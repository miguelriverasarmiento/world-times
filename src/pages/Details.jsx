import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {loadNews} from '../api/news.api'

export const Details = () => {

    const params = useParams();
    const [news, setNews] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {
        loadNews().then((data) => setNews(data.results))
    },[])

    useEffect(() => {
        news.forEach(product => {
            if(product.article_id === params.id) {
                setDetails(product)
            }
        })
    }, [params.id, news])

  return (
    <div>
      <div>
            <div className='font-medium text-zinc-950 text-lg md:mx-4 mx-2 mt-5'>
                {details.title}
            </div>
            <div className='mt-4 md:mx-4 mx-2'>
                <img className='md:w-[500px] w-90 h-60' src={details.image_url}/>
            </div>
            <div className='font-light text-zinc-950 text-lg md:mx-4 mx-2 mt-5'>{details.description}</div>
        </div>
    </div>
  )
}

 
