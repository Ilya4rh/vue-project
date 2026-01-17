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
        let token = getCookie("access_token");

        if (!token){
            token = getCookie("access_token_admin");
        }

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
        let token = getCookie("access_token");

        if (!token){
            token = getCookie("access_token_admin");
        }

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


export async function updateCoffeeShop(
    coffeeShopId,
    name,
    description,
    address = '',
    contacts = '',
    rules = ''
) {
    try {
        let token = getCookie("access_token_admin");

        if (!token){
            token = getCookie("access_token");
        }

        const body = {
            address: address,
            contacts: contacts,
            name: name,
            rules: rules,
            welcome_message: description
        };

        console.log(body);

        const response = await fetch(`/api/v1/coffee-shops/${coffeeShopId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Ошибка ${response.status}: ${errorText}`);
        }
    } catch (error) {
        console.error('Ошибка при обновлении идеи:', error);
        throw error;
    }
}