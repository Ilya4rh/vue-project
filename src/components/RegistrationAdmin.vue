<template>
  <section class="registration-sec">
    <div class="article-container">
      <img
          class="title_icon"
          src="../assets/cofee_mob_logo.svg"
          alt="logo"
          width="50"
          height="50"
      />
      <div class="logIn-container">
        <p class="question-mark">Есть аккаунт?</p>
        <router-link to='/admin/auth' class="auth-btn">
          <p class="auth-btn__title">авторизация</p>
          <img class="auth-btn__icon" src="../assets/arrow.svg" alt="стрелка" height="10"/>
        </router-link>
      </div>
    </div>
    <div class="title-container">
      <h1 class="title">Регистрация</h1>
    </div>
    <div class="controls-container">
      <input class="controll login" type="text" placeholder="Логин" v-model="login"/>
      <input class="controll name" type="text" placeholder="Название заведения" v-model="coffeeShopName"/>
      <input class="controll city" type="text" placeholder="Город" v-model="city"/>
      <input class="controll" type="password" placeholder="Пароль" v-model="password"/>
    </div>
    <div class="buttons-container">
      <button class="signIn btn" @click="registration()">Зарегистрироваться</button>
    </div>
  </section>
</template>
<script>
import {adminStore} from "@/stores/AdminStore";
import {setCookie} from "@/services/CookieService";

export default {
  name: "RegistrationAdminComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      login: '',
      coffeeShopName: '',
      city: '',
      password: ''
    }
  },
  methods: {
    async registration() {
      const store = adminStore();

      if (!this.login) {
        alert('Введите логин')
        return
      }
      if (!this.coffeeShopName) {
        alert('Введите название')
        return
      }
      if (!this.city) {
        alert('Введите город')
        return
      }
      if (!this.password) {
        alert('Введите пароль')
        return
      }

      store.update({login: this.login, coffeeShopName: this.coffeeShopName, city: this.city, password: this.password});

      try {
        const response = await fetch(
            `/api/v1/auth/register/admin`,
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                address: store.dto.city,
                coffee_shop_name: store.dto.coffeeShopName,
                login: store.dto.login,
                password: store.dto.password
              })
            }
        )

        if (!response.ok) {
          console.log('Ошибка запроса')
        }

        const data = await response.json()

        store.update({coffeeShopId: data.coffeeShopId, access_token: data.access_token, refresh_token: data.refresh_token});

        setCookie('access_token_admin', data.access_token, 1)
        setCookie('refresh_token_admin', data.refresh_token, 7)
        
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>
<style lang="scss">
.registration-sec {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  .article-container {
    padding: 0;
    justify-content: space-between;
    display: flex;
    width: 96%;
    max-width: 96%;
    align-items: center;

    .logIn-container {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 52%;
      max-width: 52%;

      .question-mark {
        color: rgba(94, 53, 28, 1);
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
  }

  .title-container {
    width: 96%;
    max-width: 96%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25%;

    .title {
      color: rgba(94, 53, 28, 1);
    }
  }

  .controls-container {
    width: 96%;
    max-width: 96%;
    margin-top: 14%;
    display: flex;
    flex-direction: column;
    gap: 17px;

    .controll {
      border: none;
      border-radius: 10px;
      background: rgba(94, 53, 28, 1);
      padding: 12px 26px 13px 14px;
      color: white;

      &:hover {
        box-shadow: inset 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
      }

      &:focus,
      &:active {
        outline: 2px solid rgba(255, 255, 255, 1);
      }
    }
  }

  .buttons-container {
    width: 96%;
    max-width: 96%;
    margin-top: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .btn {
      width: 90%;
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
  }
}
</style>
