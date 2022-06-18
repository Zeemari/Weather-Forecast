import { useState} from 'react'

const ApiKey=process.env.REACT_APP_API_KEY

export const useFetch= ()=> {
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': ApiKey
        }
    };
    
    const fetchdata = async(keyword)=>{
        setLoading(true);
        try {
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${keyword}%20%20%20%20&lang=en&units=imperial&mode=json`, options)
         const data = await response.json()
         if (!response.ok){
             throw new Error("error!")
         }   
         setLoading(false);
         return data
        } catch (error) {
         setLoading(false);
         setError(error.message);    
        }
       
    }
   
     return {loading, error, fetchdata}   
}