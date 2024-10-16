const Form = (props) => {
    return(
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={props.ArticleCity} value={props.city}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    )
}

export default Form;