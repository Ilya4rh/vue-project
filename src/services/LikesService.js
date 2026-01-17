import {getCookie} from "@/services/CookieService";

export async function isLiked(ideaId) {
    try {
        let token = getCookie("access_token");

        const response = await fetch(`/api/v1/ideas/${ideaId}/liked`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            console.log('Ошибка запроса')
        }
        
        let data = await response.json();
        
        return data.has_liked
    } catch (error) {
        console.error('Ошибка при создании идеи:', error)
        throw error
    }
}

export async function likeIdea(ideaId) {
    try {
        let token = getCookie("access_token");

        const response = await fetch(`/api/v1/ideas/${ideaId}/like`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            console.log('Ошибка запроса')
        }
    } catch (error) {
        console.error('Ошибка при создании идеи:', error)
        throw error
    }
}

export async function unlikeIdea(ideaId) {
    try {
        let token = getCookie("access_token");

        const response = await fetch(
            `/api/v1/ideas/${ideaId}/unlike`,
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