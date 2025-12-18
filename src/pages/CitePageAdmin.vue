<template>
  <section class="navigation">
    <div class="nav-controll-container">
      <div class="select-wrapper ideas">
        <select id="nameIdea" name="ideas">
          <option value="" selected>Без категории</option>
          <option value="apple">Яблоко</option>
          <option value="banana">Банан</option>
          <option value="cherry">Вишня</option>
        </select>
      </div>
      <div class="select-wrapper status">
        <select id="statusIdea" name="status">
          <option value="" selected>Без категории</option>
          <option value="apple">Яблоко</option>
          <option value="banana">Банан</option>
          <option value="cherry">Вишня</option>
        </select>
      </div>
    </div>
    <router-link to="/" class="nav-btn">
      <p class="nav-btn__title">личный кабинет</p>
      <img
        class="nav-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
  </section>
  <IdeaCardAdminComponent
    class="ideaCard"
    v-for="ideaInfo in defaultIdeasArr"
    :key="ideaInfo.ideaId"
    :ideaInfo="ideaInfo"
  ></IdeaCardAdminComponent>
</template>
<script>
import IdeaCardAdminComponent from "../components/ui-kit-components/IdeaCardAdmin.vue";

export default {
  name: "CitePageAdminComponent",
  components: { IdeaCardAdminComponent },
  data() {
    return {
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
.ideaCard{
    margin-bottom: 20px;
}
.navigation {
    margin-bottom: 20px;
    .nav-btn{
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
        .nav-btn__icon {
          background: transparent;
        }
        .nav-btn__title {
          background: transparent;
          color: white;
          font-size: 11.5px;
          padding: 0;
          margin: 0;
        }
    }
  .nav-controll-container {
    max-width: 50%;
    width: 50%;
    .select-wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    #nameIdea,
    #statusIdea {
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
</style>
