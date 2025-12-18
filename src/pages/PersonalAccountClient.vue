<template>
  <section class="navigation">
    <router-link to="/" class="exit btn">
      <p class="exit-btn__title">выйти</p>
      <img
        class="exit-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
    <router-link to="/mainClient" class="main btn">
      <p class="main-btn__title">на главную</p>
      <img
        class="main-btn__icon"
        alt="стрелка"
        src="../assets/arrow.svg"
        height="10"
      />
    </router-link>
  </section>
  <section class="main-info">
    <div class="personal-info-container">
      <img src="../assets/default_person.svg" width="125" height="125" />
      <div class="person-desc">
        <!-- заменить данными с бэка -->
        <h3>Name</h3>
        <p>+792564567465</p>
      </div>
    </div>
    <div class="info-adress-container">
      <div class="short-info-container">
        Short-info-containershort-info-containershort-info-containershort-info-containershort-info-containershort-info-container
        short-info-containershort-info-containershort-info-container
        short-info-containershort-info-containershort-info-container
        short-info-containershort-info-container
      </div>
      <div class="adress-container">
        <img src="../assets/point_map.svg" width="10" height="15" />
        <p>Adress, 25</p>
      </div>
    </div>
    <div class="ideas count-container">Идей <span>385</span></div>
    <div class="prize count-container">Наград <span>385</span></div>
  </section>
</template>
<script>
export default {
  name: "PersonalAccountClientComponent",
};
</script>
<style lang="scss">
.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -8px;
  .count-container {
    border: none;
    border-radius: 10px;
    background: rgba(94, 53, 28, 1);
    padding: 12px 26px 13px 14px;
    color: rgba(255, 255, 255, 0.8);
    width: 85%;
    max-width: 85%;
    margin-bottom: 7px;
    span{
        background: transparent;
        color: white;
    }
  }
  .info-adress-container {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 28px;
    width: 85%;
    max-width: 85%;
    .short-info-container {
      border-bottom: 1px solid black;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .adress-container {
      * {
        background: transparent;
      }
      margin-left: auto;
      margin-right: 10px;
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
  }
  .personal-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 33px;
    .person-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 1);
        font-family: Rubik;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 5%;
        text-align: left;
      }
      p {
        padding: 0;
        margin: 0;
        color: rgba(94, 53, 28, 1);
        font-family: Rubik;
        font-size: 21px;
        font-weight: 400;
        letter-spacing: 5%;
        text-align: center;
      }
    }
  }
}
.navigation {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 33px;
  .btn {
    padding: 10px;
    border-radius: 10px;
    background: rgba(41, 41, 41, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0;
    &:hover {
      outline: 2px solid rgba(255, 255, 255, 1);
    }
    &:active {
      outline: 2px solid rgba(255, 255, 255, 1);
      border-radius: 10px;
      background: rgba(154, 138, 138, 1);
    }
    .exit-btn__icon {
      transform: rotate(180deg);
      background: transparent;
    }
    .main-btn__icon {
      background: transparent;
    }
    .exit-btn__title,
    .main-btn__title {
      background: transparent;
      color: white;
      font-size: 11.5px;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
