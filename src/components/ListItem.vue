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
      <router-link
        class="ListItem__content__arrow"
        :to="`/events/${event.name}/details`"
      >
        <a-icon type="right" />
      </router-link>
      <a-row>
        <a-col :md="12" :xs="24">
          <a-row>
            <a-col :span="24">
              <router-link
                class="ListItem__name"
                :to="`/events/${event.name}/details`"
                :disabled="isOut"
              >
                <a-icon type="shopping-cart" /> <span>{{ event.name }}</span>
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
  box-shadow: 0 0 5px #ddd;
  position: relative;

  &__name {
    position: relative;
    display: inline-block;
    & > * {
      transition: all 0.2s $base-easing;
    }
    i {
      opacity: 0;
      transform: translateX(-15px);
    }
    span {
      display: inline-block;
      transform: translateX(-17px);
    }
    &:hover {
      i {
        opacity: 1;
        transform: translateX(0px);
      }
      span {
        transform: translateX(0);
      }
    }
  }

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
    position: relative;

    &__arrow {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 0 10px;
      font-size: 20px;
      opacity: 0.12;
      display: flex;
      align-items: center;
      z-index: 1;
      color: black;
    }

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
  }

  &__content-extra {
    height: 0px;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    border-top: 1px solid transparent;
  }

  &.is-active {
    .ListItem__content-extra {
      height: 200px;
      border-top-color: #eee;
    }
  }

  &.is-out {
    .ListItem__content {
      &__arrow {
        display: none;
      }
      opacity: 0.4;
      .ant-tag {
        color: #555;
        background-color: #ddd;
      }
    }
  }

  @media screen and (min-width: 768px) {
    &__content {
      &__arrow {
        display: none;
      }
      & > .ant-row {
        & > .ant-col {
          &:nth-child(2) {
            text-align: right;
          }
        }
      }
    }
    &:hover:not(.is-out) {
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
