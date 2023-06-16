import axios from "axios"
import { useLocalStorage } from "../../../../../10-consuming-api/src/hooks/localStorage"
export const prefix = 'nurima'
export const useClient = (collection) => {
    
    
    const [creds] = useLocalStorage('credential')
    const client = axios.create({
        baseURL: `https://msib-feb3-objectstorage.productzillaacademy.com/collections/`,
        headers: {
            Authorization: `Bearer ${creds}`
        }
    })

    return client;
}

export default useClient