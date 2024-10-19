import { useState } from 'react';
import {Title, Form, Results} from './index';

const App = () => {

    const [city, setCity] = useState("")
    const ArticleCity = (event) => {
        setCity(event.target.value)
    }

    const getWeather = (event) =>{
        event.preventDefault()
        fetch(`https://api.weatherapi.com/v1/current.json?key=0af6eed4b19a47fb9de135317241610&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => setResults({
            country: data.location.country,
            cityName: data.location.name,
            temperature: data.current.temp_c,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon
            
        }))
    }
    
    const [results, setResults] = useState({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    })

    return(
        <div className='wrapper'>
            <div className='container'>
                <Title/>
                <Form
                    ArticleCity = {ArticleCity}
                    city = {city}
                    getWeather = {getWeather}
                />
                <Results
                    results = {results}
                />
            </div>
        </div>
    )
}

export default App;