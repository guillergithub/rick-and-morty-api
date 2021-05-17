import SearchBox from './SearchBox'
import getLocation from '../services/getLocation'
import LocationInfo from './LocationInfo'
import ResidentContainer from './ResidentContainer'
import { useEffect, useState } from 'react'

const LocationContainer = () => {    
    
    const [queryTerm, setQueryTerm] = useState('')
    const [locationName, setLocationName] = useState('')
    const [locationType, setLocationType] = useState('')
    const [dimension, setDimension] = useState('')
    const [residentsAmount, setResidentAmount] = useState(null)
    const [characters, setCharacters] = useState([])    
    
    
    useEffect( () => {

        // This uses the user location to make a call to the API
        if(queryTerm){  
            getLocation('/location/?name='+queryTerm)                
                .then(res => res.data.results)                
                .then(data => {        

                    //This generate a random number between 0 and the length of the result array
                    const randomIndex = Math.floor(Math.random()*data.length)

                    setLocationName(data[randomIndex].name)                
                    setLocationType(data[randomIndex].type)
                    setDimension(data[randomIndex].dimension)
                    setResidentAmount(data[randomIndex].residents.length)                                        
                    setCharacters(data[randomIndex].residents.slice(0,10)) 
                })

        } else {   
            //This gets all info locations
            getLocation('/location')                
                .then(res => res.data)
                .then(data => {
                    let results = []
                    const pages = data.info.pages
                    const count = data.info.count

                    results = [...data.results]          
                    //This generate a random number between 0 and the amount of locations that give us the API (count = 108)
                    const randomIndex = Math.floor(Math.random()*count)
                    
                    // This gets the locations of every page
                    for(let i=2; i<=pages; i++) {
                        getLocation('/location?page='+i)
                        .then(res => res.data)
                        .then(data => {   

                            // This saves every locations data into an array
                            data.results.forEach((elem) => {
                                results.push(elem)
                            })
                                // This checks that we got all the locations (count = 108)
                                if(results.length === count) {                                                                                              
                                    setLocationName(results[randomIndex].name)                
                                    setLocationType(results[randomIndex].type)
                                    setDimension(results[randomIndex].dimension)
                                    setResidentAmount(results[randomIndex].residents.length)
                                    setCharacters(results[randomIndex].residents)                                     
                                }                                
                        })
                    }     
                })   
        }
   
    }, [queryTerm])      
    
        

    const list = characters.slice(0,10).map( (elem, index) => {
        
        return <ResidentContainer url={elem} key={index}/>
    })

    return (
        <div className={'location-container'}>   
            <div className={'overlay'}>
                <SearchBox handleSearch={setQueryTerm} />

                <LocationInfo 
                    name={locationName}
                    type={locationType}
                    dimension={dimension}
                    amount={residentsAmount}                                         
                />
                
                <div className='container-characters'>              
                    {list}
                </div>            
            </div>     
        </div>
    )

}

export default LocationContainer;