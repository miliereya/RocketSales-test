import axios from "axios"

export const dealsAPI = {
    getDeals(query='') {
        return axios.get(`http://localhost:5000/deals/get?query=${query}`)
        .then(res => res.data)
    }
}