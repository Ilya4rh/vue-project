<template>
  <section class="navigation">
    <router-link to="/" class="exit btn">
      <p class="exit-btn__title">выйти</p>
      <img
        class="exit-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
    <router-link to="/mainClient" class="main btn">
      <p class="main-btn__title">на главную</p>
      <img
        class="main-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
  </section>
  <section class="title-container">
    <h1 class="title-container__login">LoginCoffee</h1>
    <img class="title-container__img" src="../assets/big_coffee.svg" />
  </section>
  <section class="controlls-container">
    <input class="controll cofee-name" placeholder="Название кофейни" />
    <div class="ideas count-container">Идей <span>385</span></div>
    <textarea class="controll description" placeholder="Описание"></textarea>
  </section>
</template>
<script>
export default {
  name: "PersonalAccountAdmin",
  props: {},
  methods: {},
};
</script>
<style lang="scss">
.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:31px;
    margin-bottom: 48px;
}
.controlls-container {
  .count-container,
  .controll {
    border: none;
    border-radius: 10px;
    background: rgba(94, 53, 28, 1);
    padding: 12px 26px 13px 14px;
    color: rgba(255, 255, 255, 0.8);
    width: 85%;
    max-width: 85%;
    margin-bottom: 7px;
    span {
      background: transparent;
      color: white;
    }
  }
  .description {
    min-height: 200px;
  }
}
.navigation {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 53px;
  .btn {
    padding: 10px;
    border-radius: 10px;
    background: rgba(41, 41, 41, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0;
    &:hover {
      outline: 2px solid rgba(255, 255, 255, 1);
    }
    &:active {
      outline: 2px solid rgba(255, 255, 255, 1);
      border-radius: 10px;
      background: rgba(154, 138, 138, 1);
    }
    .exit-btn__icon {
      transform: rotate(180deg);
      background: transparent;
    }
    .main-btn__icon {
      background: transparent;
    }
    .exit-btn__title,
    .main-btn__title {
      background: transparent;
      color: white;
      font-size: 11.5px;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
