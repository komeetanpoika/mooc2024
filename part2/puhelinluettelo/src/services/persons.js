import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const removeFromDatabase = id => {
    const id1 = id
    axios.delete(`${baseUrl}/${id1}`)
    .then(response => {
        console.log(`deleted post with ID${id1}`)
    })
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, 
  create, 
  update,
  removeFromDatabase 
}