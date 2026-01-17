<template>
  <section class="card-sec">
    <div class="article-container">
      <p class="article-title">{{ ideaInfo.ideaName }}</p>
      <p class="article-status">{{ ideaInfo.ideaStatus }}</p>
    </div>
    <div class="description-container">
      {{ ideaInfo.ideaDescription }}
    </div>
    <img
    class="like-container"
      :src="likeIcon"
      width="15"
      height="15" 
      @click="toggleLike()"
    />
  </section>
</template>
<script>
import IdeaInfo from "../../models";
import {isLiked, likeIdea, unlikeIdea} from "@/services/LikesService";

export default {
  name: "IdeaCardComponent",
  props: {
    ideaInfo: IdeaInfo
  },
  data() {
    return {
      isLiked: '',
    };
  },
  async mounted(){
    this.isLiked = await isLiked(this.ideaInfo.ideaId)
  },
  computed: {
    likesCount() {
      return Number(this.ideaInfo.ideaLiked) || 0
    },

    likeIcon() {
      return this.isLiked
          ? require("../../assets/heart_fill.svg")
          : require("../../assets/heart_stroke.svg")
    }
  },
  methods: {
    sendDataCoffee() {
      this.$emit("onClickCard", {
        ideaInfo: {
          id: this.ideaInfo.ideaId,
          name: this.coffeeInfo.coffeeName,
          date: this.ideaInfo.ideaDate,
          description: this.ideaInfo.ideaDescription,
          status: this.ideaInfo.ideaStatus,
          ideaLiked: this.ideaInfo.ideaLiked,
        },
      });
    },
    async toggleLike() {
      let isLiked = !this.isLiked;
      let ideaId = this.ideaInfo.ideaId;

      if (isLiked) {
        await likeIdea(ideaId);
      }
      else {
        await unlikeIdea(ideaId);
      }

      this.isLiked = !this.isLiked;
    }
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
  .like-container{
    margin-left: auto;
  }
}
</style>
