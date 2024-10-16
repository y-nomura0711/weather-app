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
        .then(data => console.log(data))
    }

    return(
        <div>
            <Title/>
            <Form
                ArticleCity = {ArticleCity}
                city = {city}
                getWeather = {getWeather}
            />
            <Results/>
        </div>
    )
}

export default App;