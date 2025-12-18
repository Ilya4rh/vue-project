import { defineStore } from 'pinia'

export const clientStore = defineStore('client', {
    state: () => ({
        dto: {
            id: '',
            name: '',
            phone: '',
            code: '',
            access_token: '',
            refresh_token: '',
        }
    }),

    actions: {
        update(payload) {
            Object.assign(this.dto, payload)
        },
        reset() {
            this.dto = {
                id: '',
                name: '',
                phone: '',
                code: '',
                access_token: '',
                refresh_token: '',
            }
        }
    }
})