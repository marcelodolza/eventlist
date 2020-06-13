<template>
  <div class="Events">
    <div class="container">
      <Filters @onChange="onChangeFilters" />

      <transition-group
        name="card"
        tag="ul"
        class="Events__list"
        :class="{
          'is-grid': filters.layout === 'grid',
          'is-list': filters.layout === 'list'
        }"
      >
        <ListItem
          v-for="item in filteredEvents"
          :event="item"
          :currency="filters.currency"
          :key="item.name"
        />
      </transition-group>

      <div
        v-if="filteredEvents.length === 0"
        class="Events__result is-notfound"
      >
        <a-icon type="frown" class="cl-primary icon icon-frown" />
        Events not found
      </div>
    </div>
    <a-drawer
      :title="$route.params.name"
      :width="300"
      placement="right"
      :closable="true"
      :visible="drawer.visible"
      @close="onCloseDrawer"
    >
      <router-view v-if="$route.name === 'EventDetails'" name="details" />
    </a-drawer>
  </div>
</template>

<script>
import eventList from "@/data/eventList";

import Filters from "@/components/Filters.vue";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "Events",
  components: {
    Filters,
    ListItem
  },
  data() {
    return {
      filters: {},
      drawer: {
        visible: false
      }
    };
  },
  watch: {
    $route(route) {
      if (route.name === "EventDetails") this.drawer.visible = true;
    }
  },
  computed: {
    filteredEvents() {
      const search = String(this.filters.search || "").toLowerCase();
      const date = this.filters.date ? this.filters.date : null;
      const price = this.filters.price ? this.filters.price.split("-") : null;
      const sortBy = this.filters.sort || null;

      // Search
      let list = eventList.filter(item => {
        return (
          item.name.toLowerCase().indexOf(search) > -1 ||
          item.venue.toLowerCase().indexOf(search) > -1
        );
      });

      // Date
      if (date) {
        list = list.filter(item => {
          return (
            this.getBasicDate(item.startDate).getTime() ===
            this.getBasicDate(date).getTime()
          );
        });
      }

      // Price ranging
      if (price) {
        const minRange = parseFloat(price[0]);
        const maxRange = price.length > 1 ? parseFloat(price[1]) : null;

        list = list.filter(item => {
          const currentPrice = item.price.filter(
            val => val.currency === this.filters.currency
          )[0];
          const { min, max } = currentPrice.ticketPrices;

          if (price.length === 2) {
            return (
              (min >= minRange && max <= maxRange) ||
              min <= maxRange ||
              max <= minRange
            );
          } else {
            return min >= parseFloat(price);
          }
        });
      }

      // SortBy
      if (["name", "venue"].includes(sortBy)) {
        list = list.sort(this.dynamicSort(sortBy));
      } else if (sortBy === "upcoming") {
        list = list.sort((a, b) => {
          return (
            this.getBasicDate(a.startDate) - this.getBasicDate(b.startDate)
          );
        });
      } else if (sortBy === "lowestprice") {
        list = list.sort((a, b) => {
          return (
            parseFloat(a.price[0].ticketPrices.min) -
            parseFloat(b.price[0].ticketPrices.min)
          );
        });
      }

      return list;
    }
  },
  methods: {
    onChangeFilters(filtersUpdated) {
      this.filters = filtersUpdated;
    },
    onCloseDrawer() {
      this.drawer.visible = false;
      this.$router.push("/events");
    }
  }
};
</script>
<style lang="scss">
.Events {
  &:before,
  &:after {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 240px;
    top: 0;
    content: "";
    z-index: -1;
  }
  &:before {
    opacity: 0.2;
    background-image: url("https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    background-position: 50% 50%;
  }
  &:after {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #f5f5f5 80%);
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    &.is-list {
      .ListItem {
        box-shadow: 0 0 5px #ddd;
        &:first-child {
          border-radius: 6px 6px 0 0;
        }
        &:last-child {
          border-radius: 0 0 6px 6px;
        }
        &:not(.is-out) {
          &:hover {
            border-radius: 6px;
          }
        }
      }
    }

    &.is-grid {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: auto auto auto;
      .ant-col {
        width: 100%;
        text-align: left;
      }
      .ListItem {
        border-radius: 6px;

        &.is-active {
          grid-column: span 3;
          @media screen and (max-width: 960px) {
            grid-column: span 2;
          }
          @media screen and (max-width: 630px) {
            grid-column: span 1;
          }
        }
      }
      @media screen and (max-width: 960px) {
        grid-template-columns: auto auto;
      }
      @media screen and (max-width: 580px) {
        grid-template-columns: auto;
      }
    }
  }

  &__result {
    &.is-notfound {
      padding: 50px 0;
      text-align: center;
      .icon {
        &-frown {
          display: block;
          font-size: 30px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
