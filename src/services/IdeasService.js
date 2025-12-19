import {adminStore} from "@/stores/AdminStore";
import {getCookie} from "@/services/CookieService";
import {IdeaInfo} from "@/models";

export function mapIdeaDtoToModel(dto) {
    return new IdeaInfo(
        dto.id,
        dto.title,
        Date.now(),
        dto.description,
        'В работе', 
        dto.likes
    )
}

export async function getCurrentUserIdeas() {
    try {
        const token = getCookie("access_token");

        const response = await fetch(
            `/api/v1/users/me/ideas`,
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

export async function getCoffeeShopIdeas(coffeeShopId) {

    try {
        let token = getCookie("access_token");

        if (token === ''){
            token = getCookie("access_token_admin");
        }

        const response = await fetch(
            `/api/v1/coffee-shops/${coffeeShopId}/ideas`,
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

        if (!Array.isArray(data)) {
            console.log('Пустой массив')
            return [];
        }
        
        console.log(data)

        const result = data.map(dto => {
            if (!dto || !dto.id) {
                console.log("Пропущен элемент без id:", dto);
                return null;
            }
            
            return mapIdeaDtoToModel(dto);
        });

        console.log(result)
        
        return result;
    } catch (error) {
        console.error(error)
    }
}

export async function getIdeaById(ideaId) {
    // Не понятно с токеном
    const store = adminStore();

    try {
        let token = store.dto.access_token;

        const response = await fetch(
            `/api/v1/ideas/${ideaId}`,
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

export async function deleteIdeaById(ideaId) {
    // Не понятно с токеном
    const store = adminStore();

    try {
        let token = store.dto.access_token;

        const response = await fetch(
            `/api/v1/ideas/${ideaId}`,
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
    } catch (error) {
        console.error(error)
    }
}