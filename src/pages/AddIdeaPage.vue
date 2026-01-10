<template>
  <section class="article-sec">
    <div class="add_idea">
      <p class="add_idea_title">Информация идеи</p>
    </div>
  </section>
  <section class="main-idea-page">
    <div class="category-selection">
      <div class="select-wrapper">
        <select id="categoryIdea" name="fruit" v-model="selectedCategory">
          <option value="" selected>Без категории</option>
          <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>
    <input
      class="controll name"
      type="text"
      placeholder="Название идеи"
      v-model="ideaName"
    />
  </section>
  <textarea placeholder="Описание" class="desc-container" v-model="ideaDescription"></textarea>
  <button class="add-btn" @click="handleAddIdeaClick()">Предложить идею</button>
</template>
<script>
import {getCategoriesByCoffeeShopId} from "@/services/CategoriesService";
import {createIdea} from "@/services/IdeasService";
import router from "@/router";

export default {
  name: "AddIdeaPageComponent",
  props: ['inputCoffeeId'],
  data() {
    return {
      categories: [],
      ideaName: '',
      ideaDescription: '',
      selectedCategory: '',
    }
  },
  async mounted(){
    try{
      this.categories = await getCategoriesByCoffeeShopId(this.$route.params.inputCoffeeId);
    }
    catch (e){
      console.log(e);
    }
  },
  methods: {
    async handleAddIdeaClick() {
      if (!this.ideaName) {
        alert('Введите название идеи')
        return
      }

      if (!this.ideaDescription) {
        alert('Введите описание идеи')
        return
      }
      
      console.log(this.selectedCategory);
      try {
        await createIdea(this.selectedCategory, this.$route.params.inputCoffeeId, this.ideaName, this.ideaDescription);
        await router.push({ name: 'CoffeeShopPageComponent', params: { inputCoffeeId: this.$route.params.inputCoffeeId } });
      }
      catch (e){
        alert('Ошибка при создании идеи')
      }
    }
  }
};
</script>
<style lang="scss">
.article-sec {
  padding: 0;
  margin: 0;
  .add_idea {
    margin: -8px;
    padding: 16px;
    margin-bottom: 31px;
    .add_idea_title {
      color: rgba(0, 0, 0, 1);
      margin: 0;
      padding: 0;
      font-family: Rubik;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 5%;
      text-align: left;
    }
  }
}
.main-idea-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 26px;
  .controll {
    border: none;
    border-radius: 10px;
    background: rgba(94, 53, 28, 1);
    padding: 12px 26px 13px 14px;
    color: white;
    width: 85%;
    &:hover {
      box-shadow: inset 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }
    &:focus,
    &:active {
      outline: 2px solid rgba(255, 255, 255, 1);
    }
  }
  .category-selection {
    .select-wrapper {
      position: relative;
      display: inline-block;
      width: 95%;
    }

    #categoryIdea {
      width: 100%;
      max-width: 100%;
      padding: 12px 40px 13px 14px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: rgba(94, 53, 28, 1);
      font-size: 16px;
      color: #ffffff;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .select-wrapper::after {
      content: "▼";
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      pointer-events: none;
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
    }
  }
}
.desc-container {
  border-radius: 10px;
  background: rgba(94, 53, 28, 0.8);
  padding: 10px;
  width: 90%;
  max-width: 90%;
  overflow-y: auto;
  color: white;
  height: 53vh;
}
.add-btn {
  margin-left: 30%;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 10%;
  text-align: center;
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
</style>
