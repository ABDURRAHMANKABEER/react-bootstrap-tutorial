export const handleFetchedData =  (city = 'paris', unit = 'metric') => {

    return async (dispatch)=> {
        const Api_Key = 'e71bc3a59b2021ecac2989036d881090';
        const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=${unit}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Failed to fetch')
            }
            return res.json();
        }).then(data => {
            dispatch({
                type: "SET_FORECAST", data});
        }).catch((error) => {
            console.error(error);
        })
    }
};
console.log(handleFetchedData());