<template>
  <div class="page">
    <p class="title">Введите код подтверждения</p>
    <input class="code" type="text" maxlength=6 v-model="code">
    <div class="buttons-container">
      <button class="btn" @click="sendCode()">ПОДТВЕРДИТЬ</button>
    </div>
  </div>
</template>

<script>
import {clientStore} from "@/stores/ClientStore";

export default {
  name: "AcceptationCodePageComponent",
  data() {
    return {
      code: ''
    }
  },
  methods: {
    async sendCode() {
      const store = clientStore();
      
      if (!this.code) {
        return
      }

      store.update({code: this.code});
      
      try {
        const response = await fetch(
            `/api/v1/auth`,
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: store.dto.name,
                otp: store.dto.code,
                phone: store.dto.phone
              })
            }
        )

        if (!response.ok) {
          console.log('Ошибка запроса')
        }

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 222px;
  .title{
    color: rgba(94, 53, 28, 1);
    font-size: 21px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.2em;
    text-align: center;
    margin: 0;
  }
  .code{
    margin-top: 60px;
    width: 87%;
    height: 60px;
    border-radius: 15px;
    background: rgba(94, 53, 28, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 40px;
    letter-spacing: 0.2em;
    text-align: center;
  }
  .buttons-container {
    width: 96%;
    max-width: 96%;
    margin-top: 60px;
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