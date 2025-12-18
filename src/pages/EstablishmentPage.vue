<template>
  <section class="article-sec">
    <div class="add_idea">
      <p class="add_idea_title">предложить идею</p>
      <img class="add_idea_icon" src="../assets/add.svg" />
    </div>
    <router-link to="/mainClient" class="auth-btn">
      <p class="auth-btn__title">на главную</p>
      <img
        class="auth-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
  </section>
  <coffe-card-info-component
    class="coffee-card-component"
    :coffeeInfo="coffeeInfo"
  />
  <div class="separate-container">
    <h1 class="separate-title">ИДЕИ</h1>
  </div>
  <idea-card-component
    class="ideaCard"
    v-for="ideaInfo in defaultIdeasArr"
    :key="ideaInfo.ideaId"
    :ideaInfo="ideaInfo"
  />
</template>
<script>
import CoffeCardInfoComponent from "../components/ui-kit-components/CoffeCardInfo.vue";
import IdeaCardComponent from "../components/ui-kit-components/IdeaCard.vue";

export default {
  name: "EstablishmentPageComponent",
  components: { IdeaCardComponent, CoffeCardInfoComponent },
  data() {
    return {
      defaultInfoPerson: {
        name: "Иван",
        phoneNumber: "+792564567465",
        city: "Екатеринбург",
      },
      coffeeInfo: {
        cofeeId: "1",
        coffeeName: "CoffeMania",
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
    };
  },
};
</script>
<style lang="scss">
.ideaCard {
  margin-bottom: 20px;
}
.coffee-card-component {
  margin-bottom: 26px;
}
.separate-container {
    border-bottom:1px solid black;
    padding: 0;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  .separate-title {
    color: rgba(0, 0, 0, 1);
    margin: 0;
    padding: 0;
    font-family: Rubik;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0%;
    text-align: left;
  }
}
.article-sec {
  * {
    background: transparent;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  .add_idea {
    border-radius: 0px 0px 20px 0px;
    margin-left: -8px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    gap: 10px;
    padding: 16px 29px 0 7px;
  }
  .auth-btn {
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
    .auth-btn__icon {
      background: transparent;
    }
    .auth-btn__title {
      background: transparent;
      color: white;
      font-size: 11.5px;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
