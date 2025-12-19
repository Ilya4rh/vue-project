// import {clientStore} from "@/stores/ClientStore";
// import {adminStore} from "@/stores/AdminStore";
import { CoffeeInfo } from '@/models'
import {getCookie} from "@/services/CookieService";

export function mapCoffeeDtoToModel(dto) {
    return new CoffeeInfo(
        dto.id,
        dto.name,
        dto.address,
        dto.welcome_message
    )
}

export async function getAllCoffeeShops() {
    try {
        const token = getCookie("access_token");

        const response = await fetch(
            `/api/v1/coffee-shops`,
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

        return data.map(mapCoffeeDtoToModel);
    } catch (error) {
        console.error(error)
    }
}

export async function getCoffeeShopById(coffeeShopId) {

    try {
        const token = getCookie("access_token");

        const response = await fetch(
            `/api/v1/coffee-shops/${coffeeShopId}`,
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

        const result = mapCoffeeDtoToModel(data);
        
        console.log(result);
        
        return result;
    } catch (error) {
        console.error(error)
    }
}