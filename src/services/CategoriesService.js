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
        const token = getCookie("access_token");

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