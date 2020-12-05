import axios from 'axios'
import Global from './Global'

const makeSearch = async search => {
    let url = Global.url + "api/items?limit=4&q=" + search;
    const response = await axios.get(url)
    return response.data
}

const getItem = async id => {
    let url = Global.url + "api/items/" + id;
    const response = await axios.get(url)
    return response.data
}

let exportDef = {makeSearch, getItem}
export default exportDef