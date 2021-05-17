const LocationInfo = ({ name, type, dimension, amount, id }) => {
    return (
        <div className='container-location-info'>
            <div className='box-info'>
                <h4>Location:</h4><p>{name}</p>
            </div>

            <div className='box-info'>
            <h4>Type: </h4><p>{type}</p>
            </div>

            <div className='box-info'>
                <h4>Dimension: </h4><p>{dimension}</p>
            </div>

            <div className='box-info'>
                <h4>Residents:</h4><p>{amount}</p>
            </div>         
        </div>
    )
}

export default LocationInfo;