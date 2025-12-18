import { defineStore } from 'pinia'

export const adminStore = defineStore('admin', {
    state: () => ({
        dto: {
            coffeeShopId: '',
            login: '',
            coffeeShopName: '',
            city: '',
            password: ''
        }
    }),

    actions: {
        update(payload) {
            Object.assign(this.dto, payload)
        },
        reset() {
            this.dto = {
                coffeeShopId: '',
                login: '',
                coffeeShopName: '',
                city: '',
                password: ''
            }
        }
    }
})