<template>
  <section class="article">
    <div class="article-info">
      <div class="idea-name-info">
        <div class="idea-name-container">
          <p>Название идеи идеи</p>
        </div>
      </div>
      <div class="idea-another-info">
        <div class="idea-another-info__title">Категория</div>
        <p class="idea-another-info__title__date">Дата</p>
      </div>
    </div>
  </section>
  <div class="idea-description">
    Описание
  </div>
  <div class="status-likes-container">
    <select class="status-select">
      <option>Поступила</option>
      <option>Ожидает</option>
      <option>В работе</option>
      <option>Готова</option>
    </select>
    <div class="likes-container">
      <h1 class="likes-count">1234</h1>
      <img src="@/assets/heart_fill.svg">
    </div>
  </div>
  <div class="comments-container">
    <input class="comment-input" placeholder="Оставить комментарий">
  </div>
  
</template>


<script>
export default {
  name: "IdeaPage",
}
</script>

<style scoped lang="scss">
.article {
  padding: 0px 10px 0px 10px;
  margin-bottom: 21px;
  * {
    background: transparent;
  }
  .article-info {
    display: flex;
    justify-content: space-between;

    .idea-name-info {
      border-radius:0px 0px 20px 0px;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: -11px;
      margin-left: -20px;
      padding: 0px 9px 0px 14px;
      width: fit-content;
      max-width: 92%;
      .idea-name-container{
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

    .idea-another-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 0;
      margin: 0;
      width: 130px;
      .idea-another-info__title {
        color: rgba(0, 0, 0, 1);
        font-family: Rubik;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 5%;
        text-align: center;
        margin: 0;
        margin-bottom: 1px;
      }
      .idea-another-info__title__date{
        color: rgba(113, 86, 62, 1);
        font-family: Rubik;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 5%;
        text-align: center;
        margin: 0;
      }
    }
  }
}
.idea-description{
  border-radius: 10px;
  background: rgba(94, 53, 28, 0.8);
  height: 254px;
  margin: 17px 22px 17px 17px;
  padding: 6px 18px 8px 11px;
  color: rgba(255, 255, 255, 1);
  font-family: Rubik;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 5%;
  text-align: left;
}
.status-likes-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 17px 22px 17px 17px;
  .status-select{
    width: 281px;
    height: 37px;
    border-radius: 10px;
    background: rgba(94, 53, 28, 1);
    color: rgba(255, 255, 255, 0.8);
    font-family: Rubik;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 5%;
    text-align: left;
  }
  .likes-container{
    display: flex;
    .likes-count{
      width: 54px;
      height: 19px;
      color: rgba(0, 0, 0, 1);
      font-family: Rubik;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
      padding-right: 6px;
    }
  }
}
.comments-container{
  display: flex;
  margin: 12px 22px 17px 17px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.6);
  height: 100%;
  padding: 14px 11px 0 10px;
  .comment-input{
    width: 354px;
    height: 50px;
    border-radius: 10px;
    background: rgba(113, 86, 62, 1);
    color: rgba(255, 255, 255, 0.6);
    font-family: Rubik;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 13px;
  }
}
</style>