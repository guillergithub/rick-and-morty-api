
const ResidentInfo = ({ name, image, origin, status, epAmount, statusIcon }) => {


    return (
        <div className='character-card'>
           
            <img src={image} alt={name} className='character-image'/>
 

            <div>
                <h4>{name}</h4>                
                <p className='text-card'> <span className={`status-icon-${statusIcon}`}></span>Status: {status}</p>    
                <p className='text-card'>Origin: {origin}</p>
                <p className='text-card'>Episodes appear: {epAmount}</p>
            </div>
        </div>
    )
}

export default ResidentInfo;