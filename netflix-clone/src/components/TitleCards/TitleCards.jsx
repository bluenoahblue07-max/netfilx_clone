import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  useEffect(() => {
    const options = {
      method: 'get',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTIzYTBkYTZmZDIyMTRkMjUzZGM2ZjZiMDVlMTRhZSIsIm5iZiI6MTc4OTE2Mzg4OS45ODg5OTk4LCJzdWIiOiI2YWE0Nzk3MTIwNjM5Y2Q4ZDg4Y2YzMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5B3hWsnomA0RmVaQEKeKbVJ4BG71Aj6trC7ld_BGh2c`
      }
    }

    const handleWheel = (event) => {
      event.preventDefault()
      cardsRef.current.scrollLeft += event.deltaY
    }

    fetch(`https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`TMDB request failed: ${response.status}`)
        }
        return response.json()
      })
      .then(response => setApiData(response.results || []))
      .catch(err => console.error(err))

    const cardsElement = cardsRef.current
    cardsElement.addEventListener('wheel', handleWheel)
    return () => cardsElement.removeEventListener('wheel', handleWheel)
  }, [category])

  return (
    <div className='title-cards'>
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key=
          {index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.name} />
            <h3>{card.original_title}</h3>
          </Link>
})}
      </div>
    </div>
  )
}

export default TitleCards
