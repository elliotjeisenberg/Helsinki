import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    console.log('getAll called')
    return axios.get(baseUrl).then( res => res.data )
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then (res => res.data )
}

const update = newObject => {
    return axios.put(`${baseUrl}/${newObject.id}`, newObject).then( res => res.data )
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(res => res.data)
}

export default { getAll, create, update, deletePerson }