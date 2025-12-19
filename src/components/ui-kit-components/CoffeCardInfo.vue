<template>
  <section class="card-sec" @click="sendDataCoffee">
    <div class="article-container">
      <p class="article-title">{{ coffeeInfo.coffeeName }}</p>
      <div class="adress-container">
        <img src="../../assets/point_map.svg" width="10" height="15" />
        <p>{{ coffeeInfo.coffeeAdress }}</p>
      </div>
    </div>
    <div class="description-container">
      {{ coffeeInfo.cofeeDescription }}
    </div>
  </section>
</template>
<script>
import ICoffeeInfo from "../../models";
export default {
  name: "CoffeeCardComponent",
  props: {
    coffeeInfo: ICoffeeInfo,
  },
  methods: {
    sendDataCoffee() {
      this.$emit("onClickCard", {
        coffeeInfo: {
          id: this.coffeeInfo.coffeeId,
          name: this.coffeeInfo.coffeeName,
          adress: this.coffeeInfo.coffeeAdress,
          description: this.coffeeInfo.cofeeDescription,
        },
      });
    },
  },
};
</script>
<style lang="scss">
.card-sec {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  width: 94%;
  max-width: 94%;
  height: fit-content;
  max-height: 400px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  * {
    background: transparent;
  }
  .article-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    .adress-container {
      border-radius: 0px 0px 10px 10px;
      background: rgba(94, 53, 28, 0.4);
      width: fit-content;
      height: fit-content;
      gap: 12px;
      padding-right: 10px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: rgba(0, 0, 0, 1);
        font-family: Rubik;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0%;
        text-align: left;
      }
    }
    .article-title {
      margin: 0;
      background: rgba(41, 41, 41, 1);
      color: rgba(255, 255, 255, 1);
      font-family: Rubik;
      font-size: 19px;
      font-weight: 400;
      letter-spacing: 5%;
      text-align: left;
      max-width: 95%;
    }
  }
  .description-container {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
