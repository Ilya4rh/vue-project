import {clientStore} from "@/stores/ClientStore";
import {adminStore} from "@/stores/AdminStore";
import { getCookie } from "@/services/CookieService";
import router from "@/router";

export async function getCurrentUserInfo() {
    const store = clientStore();
    
    try {
        const token = getCookie("access_token");
        
        const response = await fetch(
            `/api/v1/users/me`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            router.push("/")
            console.log('Ошибка запроса')
        }

        const data = await response.json()

        store.update({id: data.ID, name: data.Name, phoneNumber: data.Phone});
        
        console.log(data)
        
        return data;
    } catch (error) {
        router.push("/")
        console.error(error)
    }
}

export async function getAllClients(){
    const store = adminStore();

    try {
        const token = store.dto.access_token;

        const response = await fetch(
            `/api/v1/users`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            console.log('Ошибка запроса')
        }

        const data = await response.json()
        
        console.log(data)
        
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function getClientById(id){
    try {
        let token = getCookie("access_token");

        if (token === ''){
            token = getCookie("access_token_admin");
        }

        const response = await fetch(
            `/api/v1/users/${id}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            console.log('Ошибка запроса')
        }

        const data = await response.json()

        console.log(data)

        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function deleteClientById(id){
    const store = adminStore();

    try {
        const token = store.dto.access_token;

        const response = await fetch(
            `/api/v1/users/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            console.log('Ошибка запроса')
        }

        console.log(response.status)
    } catch (error) {
        console.error(error)
    }
}