const Api_Key = 'e71bc3a59b2021ecac2989036d881090';

const handleFetchedData = async (city, units = 'metric') => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=${units}`;

    const fetchData = await fetch(url)
        .then(res => {
            return res.json();
        }).then(data => {
            setCityData(data);
        })

    const data = prop.middleData;
    const {weather, 
        main: {temp, feels_like, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name
    } = data;
    const {description, icon: iconId} =  weather[0];
    const imgUrl = `${iconId}`;

    return {temp, feels_like, temp_max, pressure, humidity, speed, country, name, iconId, description};
    
}
export {handleFetchedData};