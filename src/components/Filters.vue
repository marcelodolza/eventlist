<template>
  <header class="Filters">
    <a-row :gutter="10">
      <a-col :md="6" :xs="24" class="Filters__search">
        <a-input-search
          placeholder="Name, venue"
          allow-clear
          v-model="filters.search"
          @change="handleChange"
        />
      </a-col>
      <a-col :md="4" :xs="24" class="Filters__date">
        <a-date-picker
          @change="handleChange"
          v-model="filters.date"
          placeholder="Date"
          :format="['DD/MM/YYYY']"
        />
      </a-col>
      <a-col :md="5" :xs="24" class="Filters__price">
        <a-select
          v-model="filters.price"
          @change="handleChange"
          placeholder="Price range"
        >
          <a-select-option
            v-for="item in filters.priceOptions"
            :value="item.value"
            :key="item.value"
          >
            {{ filters.currency }}{{ item.text }}
          </a-select-option>
        </a-select>
        <a-select
          v-model="filters.currency"
          @change="handleChange"
          placeholder="Currency"
        >
          <a-select-option
            v-for="item in filters.currencyOptions"
            :value="item.value"
            :key="item.value"
          >
            {{ item.text }}
          </a-select-option>
        </a-select>
      </a-col>
      <a-col :md="9" :xs="24" class="Filters__sort">
        <a-radio-group :value="filters.layout" @change="handleLayoutChange">
          <a-radio-button value="list">
            <img class="icon" src="@/assets/img/icon-list.svg" alt="List" />
          </a-radio-button>
          <a-radio-button value="grid">
            <img class="icon" src="@/assets/img/icon-grid.svg" alt="Grid" />
          </a-radio-button>
        </a-radio-group>
        <a-select
          class="is-transparent"
          style="width: 154px"
          v-model="filters.sort"
          @change="handleChange"
          placeholder="Sort by"
        >
          <a-select-option
            v-for="item in filters.sortOptions"
            :value="item.value"
            :key="item.value"
          >
            {{ item.text }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </header>
</template>

<script>
export default {
  name: "Filters",
  props: {
    type: Object,
    default: () => {}
  },
  data() {
    return {
      filters: {
        search: "",
        date: undefined,
        price: "10-50",
        priceOptions: [
          {
            text: "0-10",
            value: "0-10"
          },
          {
            text: "10-50",
            value: "10-50"
          },
          {
            text: "50+",
            value: "50+"
          }
        ],
        currency: "£",
        currencyOptions: [
          {
            text: "GBP",
            value: "£"
          },
          {
            text: "USD",
            value: "$"
          }
        ],
        layout: "list",
        sort: undefined,
        sortOptions: [
          {
            text: "Event name",
            value: "name"
          },
          {
            text: "Venue name",
            value: "venue"
          },
          {
            text: "Upcoming events",
            value: "upcoming"
          },
          {
            text: "Lowest price first",
            value: "lowestprice"
          }
        ]
      }
    };
  },
  created() {
    this.handleChange();
  },
  methods: {
    handleChange() {
      this.$emit("onChange", this.filters);
    },
    handleLayoutChange(e) {
      this.filters.layout = e.target.value;
      this.handleChange();
    }
  }
};
</script>
<style lang="scss">
.Filters {
  padding: 30px 0;
  color: $primary;

  &__date {
    .ant-calendar-picker {
      width: 100%;
    }
  }

  &__price {
    .ant-select {
      &:nth-child(1) {
        width: 60%;
      }
      &:nth-child(2) {
        width: 40%;
      }
    }
  }

  .ant-select-arrow {
    svg {
      height: 9px;
    }
  }

  .ant-radio-button-wrapper {
    .icon {
      display: block;
      height: 100%;
      padding: 7px;
      opacity: 0.4;
    }
  }

  .ant-col {
    &:nth-child(3) {
      .ant-select {
        &:first-child .ant-select-selection {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-child .ant-select-selection {
          left: -1px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .ant-col {
      &:nth-child(4) {
        text-align: right;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .ant-col {
      margin-bottom: 5px;

      &:nth-child(4) {
        justify-content: space-between;
        display: flex;
      }
    }
  }
}
</style>
