import {getCookie} from "@/services/CookieService";
import {CategoryInfo} from "@/models";

export function mapCategoryDtoToModel(dto) {
    return new CategoryInfo(
        dto.id,
        dto.coffee_shop_id,
        dto.title,
        dto.description
    )
}

export async function getCategoriesByCoffeeShopId(coffeeShopId){
    try {
        let token = getCookie("access_token");

        if (!token){
            token = getCookie("access_token_admin");
        }

        const response = await fetch(
            `/api/v1/coffee-shops/${coffeeShopId}/categories`,
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

        console.log(data.data)

        const result = data.data.map(mapCategoryDtoToModel);

        console.log(result);

        return result;
    } catch (error) {
        console.error(error)
    }
}

export async function getCategoryById(coffeeShopId, categoryId){
    try {
        let token = getCookie("access_token");

        if (!token){
            token = getCookie("access_token_admin");
        }

        const response = await fetch(
            `/api/v1/coffee-shops/${coffeeShopId}/categories/${categoryId}`,
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
        
        return mapCategoryDtoToModel(data);
    } catch (error) {
        console.error(error)
    }
}