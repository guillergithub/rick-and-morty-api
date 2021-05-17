import axios from 'axios'



const getResident = (url) => {
    const promise = axios(url, 
    {
        method: 'GET'
    })

    return promise;
}

export default getResident;


