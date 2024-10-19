const Results = (props) =>{
    return(
        <div>
            {props.results.country &&
                <div>
                    <div className="results-country">{props.results.country}</div>
                    <div className="results-city">{props.results.cityName}</div>
                    <div className="results-temp">{props.results.temperature}<span>℃</span></div>
                    <div className="results-condition">
                        <img src={props.results.icon} alt="acon"></img>
                        <span>{props.results.conditionText}</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default Results;