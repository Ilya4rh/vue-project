<template>
  <section class="article">
    <div class="article-info">
      <div class="offer-info">
        <div class="offer-container">
          <p>предложить идею</p>
        </div>
        <img src="../assets/add.svg" />
      </div>
      <router-link to='/mainClient' class="return-btn">
        <p class="return-btn__title">на главную</p>
        <img class="return-btn__icon" src="../assets/arrow.svg" alt="стрелка" height="10"/>
      </router-link>
    </div>
  </section>

  <CoffeeCardComponent
      class="cofee-card"
      :key=defaultCoffee.coffeeId
      :coffeeInfo="defaultCoffee"/>
  <h1 class="text">ИДЕИ</h1>
  <div class="line"></div>
  <idea-card-component
      class="ideaCard"
      v-for="ideaInfo in defaultIdeasArr"
      :key="ideaInfo.ideaId"
      :ideaInfo="ideaInfo"
  />
</template>

<script>
import CoffeeCardComponent from "@/components/ui-kit-components/CoffeCardInfo.vue";
import IdeaCardComponent from "@/components/ui-kit-components/IdeaCard.vue";

export default {
  name: "MainClientPage",
  components: {IdeaCardComponent, CoffeeCardComponent},
  data() {
    return {
      defaultCoffee: {
        coffeeId: "1",
        coffeeName: "CoffeeMania",
        coffeeAdress: "Mira, 19",
        cofeeDescription: "Simple Coffee InfoSimple Coffee InfoSimple",
      },
      defaultIdeasArr: [
        {
          ideaId: "1",
          ideaName: "Idea 1",
          ideaDate: "07.05.2004",
          ideaDescription: "Simple idea InfoSimple idea InfoSimple",
          ideaStatus: "Check",
          ideaLiked: false,
        },
        {
          ideaId: "2",
          ideaName: "Idea My Idea",
          ideaDate: "07.05.2004",
          ideaDescription:
              "Simple idea InfoSimple idea InfoSimpleSimple Coffee InfoSimple Coffee InfoSimpleSimple Coffee InfoSimple Coffee InfoSimple",
          ideaStatus: "Ready",
          ideaLiked: true,
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.cofee-card {
  margin-bottom: 26px;
}

.text {
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 0.5px;
}

.line {
  width: 97%;
  height: 0;
  border: 1px solid rgba(0, 0, 0, 1);
  margin-bottom: 13px;
}

.article {
  padding: 0px 10px 0px 10px;
  margin-bottom: 21px;
  * {
    background: transparent;
  }
  .article-info {
    display: flex;
    justify-content: space-between;

    .offer-info {
      border-radius:0px 0px 20px 0px;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: -11px;
      margin-left: -20px;
      padding: 0px 9px 0px 14px;
      width: fit-content;
      max-width: 50%;
      .offer-container{
        display: flex;
        flex-direction: column;
        .offer-text{
          color: rgba(0, 0, 0, 1);

          font-family: Rubik;
          font-size: 19px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 5%;
          text-align: left;
        }
      }
    }

    .return-btn {
      width: 41%;
      max-width: 41%;
      height: 36px;
      border-radius: 10px;
      background: rgba(41, 41, 41, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 0;
      margin: 0;

      &:hover {
        outline: 2px solid rgba(255, 255, 255, 1);
      }

      &:active {
        outline: 2px solid rgba(255, 255, 255, 1);
        border-radius: 10px;
        background: rgba(154, 138, 138, 1);
      }

      .return-btn__icon {
        background: transparent;
      }

      .return-btn__title {
        background: transparent;
        color: white;
        font-size: 11.5px;
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>