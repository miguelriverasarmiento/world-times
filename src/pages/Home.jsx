import React from 'react'
import { useState, useEffect } from 'react'
import {loadNews, spainNews, colombiaNews} from '../api/news.api'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Select from 'react-select'

export const Home = () => {

const [usa, setUsa] = useState([])
const [spain, setSpain] = useState([])
const [colombia, setColombia] = useState([])
const [state, setState] = useState([])

useEffect(() => {
    loadNews().then((data) => setUsa(data.results))
},[])

useEffect(() => {
    spainNews().then((data) => setSpain(data.results))
},[])

useEffect(() => {
    colombiaNews().then((data) => setColombia(data.results))
},[])

const options = [
    { value: usa, label: 'Usa' },
    { value: spain, label: 'Spain' },
    { value: colombia, label: 'Colombia' }
]
  console.log(state)
return (
    <div>
        <Header />
        <div style={{width: '50%'}}>
            <Select 
                options={options}
                onChange={(selectedOption) => {setState(selectedOption)}}   
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:mx-5 gap-5 mx-3'>
            {state?.value?.map((lea) => (
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

