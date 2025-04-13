export const getPlantApi = () =>{
    return fetch("http://localhost:3000/plants").then((respons) => respons.json())
}