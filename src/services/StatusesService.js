import {getCookie} from "@/services/CookieService";

export async function getStatusById(statusId) {

    try {
        let token = getCookie("access_token");

        if (token === ''){
            token = getCookie("access_token_admin");
        }

        const response = await fetch(
            `/api/v1/statuses/${statusId}`,
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