import React from 'react'
import { useState, useEffect } from 'react'
import {loadNews} from '../api/news.api'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Home = () => {

const [news, setNews] = useState([])

useEffect(() => {
    loadNews().then((data) => setNews(data.results))
},[])

return (
    <div>
        <Header />
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-5 gap-5 mx-3'>
            {news.map((lea) => (
                <Link to={`/details/${lea.article_id}`} className='mt-10 shadow-2xl shadow-neutral-500'>
                    <div key={lea.article_id}>
                        <div className='font-light text-zinc-950 text-lg mx-2'>
                            {lea.title}
                        </div>
                        <div className='mt-4'>
                            <img className='md:w-[500px] w-90 h-60' src={lea.image_url}/>
                        </div>
                    </div>
                </Link> 
            ))}
        </div>
        <Footer />
    </div>
  )
}

