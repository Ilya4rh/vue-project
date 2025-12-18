import {clientStore} from "@/stores/ClientStore";

export async function getCurrentUserInfo() {
    const store = clientStore();
    
    try {
        const token = store.dto.access_token;
        
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
            console.log('Ошибка запроса')
        }

        const data = await response.json()

        store.update({id: data.id, name: data.name});
        
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}