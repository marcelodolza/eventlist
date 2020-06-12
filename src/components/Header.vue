<template>
  <header class="Header">
    <div class="container">
      <h1 class="Header__logo">
        <router-link to="/">
          <img src="@/assets/img/logo.jpg" alt="Logo" />
        </router-link>
      </h1>
      <h2 class="Header__title"><b>Event</b> List</h2>
      <nav class="Header__nav">
        <a-button icon="menu" />
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.Header {
  padding: 10px 0;
  background: #fff;
  & > .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    margin: 0;
    width: 60px;
    img {
      display: block;
      width: 100%;
    }
    @media screen and (max-width: 767px) {
      width: 36px;
    }
  }
  &__title {
    margin: 0;
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 0.1em;
    color: #333;
    font-size: 18px;
  }
  &__nav {
    .ant-btn {
      border: 0;
    }
  }
}
</style>
