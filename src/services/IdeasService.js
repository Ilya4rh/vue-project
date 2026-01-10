import {adminStore} from "@/stores/AdminStore";
import {getCookie} from "@/services/CookieService";
import {IdeaInfo} from "@/models";
import {getStatusById} from "@/services/StatusesService";
import {getClientById} from "@/services/ClientService";

export async function mapIdeaDtoToModel(dto) {
    let status = await getStatusById(dto.status_id);
    let creator = await getClientById(dto.creator_id);

    return new IdeaInfo(
        dto.id,
        dto.title,
        new Date().toLocaleDateString('ru-RU'),
        dto.description,
        status.title,
        dto.likes,
        creator.Name
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

        const result = await Promise.all(
            data
                .filter(dto => dto && dto.id)
                .map(dto => mapIdeaDtoToModel(dto))
        );

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

export async function createIdea(categoryId, coffeeShopId, title, description) {
    try {
        let token = getCookie("access_token");
        
        const formData = new FormData()
        formData.append('category_id', categoryId)
        formData.append('coffee_shop_id', coffeeShopId)
        formData.append('title', title)
        formData.append('description', description)

        console.log(formData);
        
        const response = await fetch('/api/v1/ideas', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })

        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`Ошибка ${response.status}: ${errorText}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Ошибка при создании идеи:', error)
        throw error
    }
}