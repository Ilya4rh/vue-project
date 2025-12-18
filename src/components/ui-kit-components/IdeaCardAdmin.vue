<template>
  <section class="card-sec">
    <div class="article-container">
      <p class="article-title">{{ ideaInfo.ideaName }}</p>
      <p class="article-status">{{ ideaInfo.ideaStatus }}</p>
    </div>
    <div class="date-author-container">
      <p>Иван</p>
      <p>07.05.2025</p>
    </div>
    <div class="description-container">
      {{ ideaInfo.ideaDescription }}
    </div>
    <div class="liked-count-container">
      <p>385</p>
      <img
        class="like-container"
        v-if="ideaInfo.ideaLiked"
        src="../../assets/heart_fill.svg"
        width="15"
        height="15"
      />
      <img
        class="like-container"
        v-if="!ideaInfo.ideaLiked"
        src="../../assets/heart_stroke.svg"
        width="15"
        height="15"
      />
    </div>
  </section>
</template>
<script>
import IdeaInfo from "../../models";
export default {
  name: "IdeaCardAdminComponent",
  props: {
    ideaInfo: IdeaInfo,
  },
  methods: {
    sendDataCoffee() {
      this.$emit("onClickCard", {
        ideaInfo: {
          id: this.ideaInfo.ideaId,
          name: this.ideaInfo.coffeeName,
          date: this.ideaInfo.ideaDate,
          description: this.ideaInfo.ideaDescription,
          status: this.ideaInfo.ideaStatus,
          isLiked: this.ideaInfo.ideaLiked,
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
  .date-author-container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 8px;
    margin-top: -10px;
    p {
      margin: 0;
      padding: 0;
      color: rgba(175, 165, 150, 1);
      color: rgba(175, 165, 150, 1);

      font-family: Rubik;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0%;
      text-align: left;
    }
  }
  .article-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .article-status {
      color: rgba(0, 0, 0, 1);
      font-family: Rubik;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 5%;
      text-align: right;
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
      width: 65%;
      max-width: 65%;
    }
  }
  .description-container {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .liked-count-container {
    margin-left: auto;
    display: flex;
    gap: 6px;
    align-items: center;
  }
}
</style>
