import React, { useEffect, useRef, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import {useNavigate, useParams } from 'react-router-dom'

const Player = () => {

const {id} = useParams();
const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTIzYTBkYTZmZDIyMTRkMjUzZGM2ZjZiMDVlMTRhZSIsIm5iZiI6MTc4OTE2Mzg4OS45ODg5OTk4LCJzdWIiOiI2YWE0Nzk3MTIwNjM5Y2Q4ZDg4Y2YzMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5B3hWsnomA0RmVaQEKeKbVJ4BG71Aj6trC7ld_BGh2c'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));

}, [])

const navRef = useRef();

useEffect(()=>{
  
},[])

  return (
    <div ref={navRef} className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe
      width='90%' height='90%' 
      title='trailer'
      frameBorder='0' allowFullScreen
      src={`https://www.youtube.com/embed/${apiData.key}`}
       ></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
