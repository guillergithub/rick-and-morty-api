import axios from 'axios'

const URL_BASE = 'https://rickandmortyapi.com/api'

const getLocation = (location) => {
    if(location){

        const promise = axios(`${URL_BASE}${location}`, 
        {
            method: 'GET'
        })
        
        return promise;
    } else {
        const promise = axios(`${URL_BASE}`, 
        {
            method: 'GET'
        })
        
        return promise;
    }


}

export default getLocation;