import { useEffect, useState } from "react";
import getResident from "../services/getResident";
import ResidentInfo from './ResidentInfo'

const ResidentContainer = ({ url }) => {  

    const [charName, setCharName] = useState('')
    const [charStatus, setCharStatus] = useState('')
    const [charImage, setCharImage] = useState('')
    const [charOrigin, setCharOrigin] = useState('')
    const [charEpAmount, setCharEpAmount] = useState(0)
    const [statusIcon, setStatusIcon] = useState('')

    useEffect( () => {
        if(url) {
            getResident(url)
            .then(res => res.data)
            .then(char => {                
                setCharName(char.name)
                setCharStatus(char.status)
                setCharImage(char.image)
                setCharOrigin(char.origin.name)
                setCharEpAmount(char.episode.length)
                setStatusIcon(char.status.toLowerCase()) 
            })
        }
    }, [url])

    
    
    return (
        <div className={'container-character'}>   
            <ResidentInfo 
                name={charName}
                status={charStatus}
                image={charImage}
                origin={charOrigin}
                epAmount={charEpAmount}
                statusIcon={statusIcon}
            />
        </div>
    )
    
}

export default ResidentContainer;