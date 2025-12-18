<template>
  <CofeeCardComponent :coffeeInfo="defaultCofee" />
</template>
<script>
import CofeeCardComponent from "../components/ui-kit-components/CoffeCardInfo.vue";
export default {
  name: "MainClientPage",
  components: { CofeeCardComponent },
  data() {
    return {
      defaultCofee: {
        coffeeName: "CoffeMania",
        coffeeAdress: "Mira, 19",
        cofeeDescription:
          "Simple Coffee InfoSimple Coffee InfoSimple",
      },
    };
  },
};
</script>
