<template>
  <section class="navigation">
    <router-link to="/admin/auth" class="exit btn">
      <p class="exit-btn__title">выйти</p>
      <img
        class="exit-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
    <div @click="openAdminMainPage()" class="main btn">
      <p class="main-btn__title">на главную</p>
      <img
        class="main-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </div>
  </section>
  <section class="title-container">
    <h1 class="title-container__login">Личный кабинет</h1>
    <img class="title-container__img" src="../assets/big_coffee.svg" />
  </section>
  <section class="controlls-container">
    <input class="controll cofee-name" placeholder="Название кофейни" v-model="coffeeShopInfo.coffeeName" />
    <div class="ideas count-container">Идей: <span>{{ coffeeShopIdeasCount }}</span></div>
    <textarea class="controll description" placeholder="Описание" v-model="coffeeShopInfo.cofeeDescription"></textarea>
  </section>
  <div class="buttons-container">
    <button class="signIn btn" @click="updateCoffeeShopInfo()">Сохранить изменения</button>
  </div>
</template>
<script>
import router from "@/router";
import {getCoffeeShopIdeas} from "@/services/IdeasService";
import {CoffeeInfo} from "@/models";
import {getCoffeeShopById, updateCoffeeShop} from "@/services/CoffeeShopsService";

export default {
  name: "PersonalAccountAdmin",
  props: ['inputCoffeeId'],
  data() {
    return {
      coffeeShopIdeasCount: '',
      coffeeShopInfo: CoffeeInfo
    };
  },
  async mounted() {
    let coffeeShopIdeas = await getCoffeeShopIdeas(this.$route.params.inputCoffeeId);
    this.coffeeShopIdeasCount = coffeeShopIdeas.length;
    
    this.coffeeShopInfo = await getCoffeeShopById(this.$route.params.inputCoffeeId);
  },
  methods: {
    openAdminMainPage(){
      router.push({ name: 'CitePageAdminComponent', params: { inputCoffeeId: this.$route.params.inputCoffeeId } });
    },
    async updateCoffeeShopInfo() {
      let coffeeShop = this.coffeeShopInfo;
      await updateCoffeeShop(coffeeShop.coffeeId, coffeeShop.coffeeName, coffeeShop.cofeeDescription);
    }
  },
};
</script>
<style lang="scss">
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31px;
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
.buttons-container {
  width: 96%;
  max-width: 96%;
  margin-top: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .btn {
    width: 90%;
    border: none;
    border-radius: 10px;
    background: rgba(41, 41, 41, 1);
    padding: 15px;
    color: white;
    font-size: 14px;
    &:hover {
      outline: 2px solid rgba(255, 255, 255, 1);
    }
    &:active {
      outline: 2px solid rgba(255, 255, 255, 1);
      border-radius: 10px;
      background: rgba(154, 138, 138, 1);
    }
  }
}
</style>
