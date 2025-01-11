import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const {cell} = useParams();
    const [loading, setLoading] = useState(true);
    const [info,setInfo] = useState();

    const getInfo = async () => {
        const get = await fetch(`https://randomuser.me/api/?cell=${cell}`);
        const jsonData = await get.json();
        console.log(jsonData.results[0]);
        setInfo(jsonData.results[0])
        
    }
    if(cell != ""){
        getInfo();
    }
  return (
    <div>
        <img src="" alt="" />
        <div>
            <h1>Character Info</h1>
            <button>{info.login.uuid}</button>
            <h3>Player Info</h3>
            <p>{info.dob.age}</p>
        </div>
    </div>
  )
}

export default Info