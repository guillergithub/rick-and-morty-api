import { useState } from 'react'


const SearchBox = ({handleSearch}) => {

    const [value, setValue] = useState('')

    return (
        <div className='search-box'>
            <input value={value} onChange={ (e) => setValue(e.target.value) } className='input'/>
            <button onClick={()=>handleSearch(value)} placeholder={'Find by location...'} className='btn btn-primary' >&#x1F50E;&#xFE0E;</button> 
        </div>
    )
}

export default SearchBox