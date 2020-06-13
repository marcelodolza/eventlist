<template>
  <li
    class="ListItem"
    :class="{
      'is-active':
        event.name === $route.params.name && $route.name === 'EventLocation',
      'is-out': isOut
    }"
  >
    <a-tag class="fs-12 ListItem__sold-out" v-if="isOut">
      SOLD OUT
    </a-tag>
    <div class="ListItem__content">
      <a-row>
        <a-col :md="12" :xs="24">
          <a-row>
            <a-col :span="24">
              <router-link
                :to="`/events/${event.name}/details`"
                :disabled="isOut"
              >
                {{ event.name }}
              </router-link>
            </a-col>
            <a-col :span="24" class="fs-12">
              <span class="mr-10">
                <a-icon type="calendar" />
                {{ event.startDate | dateTime }}
              </span>
              <router-link
                :to="`/events/${event.name}/location`"
                class="ListItem__venue"
                :disabled="isOut"
              >
                <a-icon type="environment" /> {{ event.venue }}
              </router-link>
            </a-col>
          </a-row>
        </a-col>
        <a-col :md="12" :xs="24" class="fs-12">
          <a-row>
            <a-col :span="24">
              <span class="mr-10">Tickets ranging between</span>
              <a-tag class="fs-12  ListItem__price">
                {{ event.price | priceRange(currency) }}
              </a-tag>
            </a-col>
            <a-col :span="24">
              <span class="mr-10">
                <a-icon type="team" /> {{ event.availablePlacesLeft }} places
                left
              </span>
              <span>
                <a-icon type="pound" /> Fees:
                {{ event.price | fee(currency) }}
              </span>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div class="ListItem__content-extra">
      <router-view name="location" />
    </div>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    event: Object,
    currency: String
  },
  data() {
    return {};
  },
  computed: {
    isOut() {
      return this.event.availablePlacesLeft === 0;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.ListItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid transparent;
  background: white;
  font-size: 13px;
  transition: box-shadow 0.3s ease, border 0.2s ease;
  color: #999;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  position: relative;

  &__venue {
    color: #999;
  }

  &__sold-out.ant-tag {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    box-shadow: 0 0 8px 8px #fff;
    color: #fff;
    background: #ccc;
    z-index: 1;
  }

  &__price.ant-tag {
    background-color: #cef3c8;
    border-color: #c8e4c4;
  }

  &__content {
    padding: 10px 15px;
    width: 100%;

    .ant-row {
      width: 100%;
      .ant-col .ant-col {
        padding: 3px 0;
      }
    }
    .ant-tag {
      color: #386f2f;
      border-radius: 30px;
      line-height: 17px;
      padding: 0 5px;
    }

    @media screen and (min-width: 768px) {
      & > .ant-row {
        & > .ant-col {
          &:nth-child(2) {
            text-align: right;
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
    }
  }
  &__content-extra {
    height: 0px;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    border-top: 1px solid transparent;
  }
  &:hover:not(.is-out) {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.065);
    z-index: 2;
  }

  &.is-active {
    .ListItem__content-extra {
      height: 200px;
      border-top-color: #eee;
    }
  }
  &.is-out {
    .ListItem__content {
      opacity: 0.4;
      .ant-tag {
        color: #555;
        background-color: #ddd;
      }
    }
  }
}
</style>
