<template>
  <section class="article">
    <div class="article-info">
      <div class="adress-container">
        <img src="../assets/point_map_white.svg" width="4" height="8" />
        <p>{{ defaultInfoPerson.city }}</p>
      </div>
      <div class="person_info">
        <div class="preson_container">
          <p class="person_name">{{ defaultInfoPerson.name }}</p>
          <p class="person_phone">{{ defaultInfoPerson.phoneNumber }}</p>
        </div>
        <img src="../assets/default_person.svg" />
      </div>
    </div>
  </section>
  <CofeeCardComponent
    class="cofee-card"
    v-for="defaultCofee in defaultCoffeesArr"
    :key="defaultCofee.coffeeId"
    :coffeeInfo="defaultCofee"
  />
</template>
<script>
import CofeeCardComponent from "../components/ui-kit-components/CoffeCardInfo.vue";
export default {
  name: "MainClientPage",
  components: { CofeeCardComponent },
  data() {
    return {
      defaultInfoPerson: {
        name: "Иван",
        phoneNumber: "+792564567465",
        city: "Екатеринбург",
      },
      defaultCoffeesArr: [
        {
          cofeeId: "1",
          coffeeName: "CoffeMania",
          coffeeAdress: "Mira, 19",
          cofeeDescription: "Simple Coffee InfoSimple Coffee InfoSimple",
        },
        {
          cofeeId: "2",
          coffeeName: "CoffeMania2",
          coffeeAdress: "Mira, 119",
          cofeeDescription:
            "Simple Coffee InfoSimple Coffee InfoSimpleSimple Coffee InfoSimple Coffee InfoSimpleSimple Coffee InfoSimple Coffee InfoSimple",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.cofee-card {
  margin-bottom: 20px;
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
    .person_info {
      border-radius: 0px 0px 0px 20px;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: -11px;
      padding: 0px 9px 0px 14px;
      width: fit-content;
      max-width: 50%;
      .preson_container {
        display: flex;
        flex-direction: column;
        .person_name {
          padding: 0;
          margin: 0;
          color: rgba(0, 0, 0, 1);
          font-family: Rubik;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 5%;
          text-align: left;
        }
        .person_phone {
          padding: 0;
          margin: 0;
          color: rgba(94, 53, 28, 1);
          font-family: Rubik;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 5%;
          text-align: left;
        }
      }
    }
    .adress-container {
      padding: 8px;
      width: fit-content;
      max-width: 44%;
      height: 31px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-radius: 10px;
      background: rgba(41, 41, 41, 1);
      p {
        color: rgba(255, 255, 255, 1);
        font-family: Rubik;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0%;
        text-align: left;
      }
    }
  }
}
</style>
