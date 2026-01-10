import {getCookie} from "@/services/CookieService";

export async function getCurrentUserPrizes() {
    try {
        const token = getCookie("access_token");

        const response = await fetch(
            `/api/v1/users/me/rewards`,
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