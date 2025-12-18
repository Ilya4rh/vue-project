import { defineStore } from 'pinia'

export const clientStore = defineStore('client', {
    state: () => ({
        dto: {
            name: '',
            phone: '',
            code: ''
        }
    }),

    actions: {
        update(payload) {
            Object.assign(this.dto, payload)
        },
        reset() {
            this.dto = {
                name: '',
                phone: '',
                code: ''
            }
        }
    }
})