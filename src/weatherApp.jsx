import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import { Container, Image, Button, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buttom from "./buttom";
import Middle from "./middle";

const WeatherApp = () => {

    const Api_Key = 'e71bc3a59b2021ecac2989036d881090';
    const [City, setCity] = useState('paris');
    const [cityData, setCityData] = useState(null);
    const [change, setChange] = useState('');
    const [unit, setUnit] = useState('metric');
    const [fahrenheit, setFahrenheit] = useState(false);
    const [celcius, setCelcius] = useState(true);
    const [degree, setDegree] = useState('°C');
    const [imageUrl, setImageUrl] = useState(coldBg);

    useEffect(()=> {
        const handleFetchedData = async (city, units) => {
            const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=${units}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json();
            }).then(data => {
                setCityData(data);
                const { main: {temp} } = data;
                if(unit === 'metric') {
                    if(temp > 20) {
                        setImageUrl(hotBg);
                    }else {
                        setImageUrl(coldBg);
                    }
                }else {
                    if(temp > 68) {
                        setImageUrl(hotBg);
                    }else {
                        setImageUrl(coldBg);
                    }
                }
            }).catch((error) => {
                console.error(error);
            })

            if(fahrenheit === true) {
                setDegree('°F');
            } else {
                setDegree('°C');
            }
        };
        handleFetchedData(City, unit);
    }, [change, fahrenheit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setChange(City);
    }
    const handleUnits = ()=> {
        if(unit === 'metric') {
            setUnit('imperial');
            setFahrenheit(true);
            setCelcius(false);
        } else {
            setUnit('metric');
            setFahrenheit(false);
            setCelcius(true);
        }
    }

    return (<>
        <div className="container-fluid ps-2 m-0 p-2 app" style={{ backgroundImage: `url(${imageUrl} )`,
        }}>
            <Row className="container-fluid justify-content-md-center align-items-center">
                <Col xs lg="6">
                    <Form onSubmit={handleSubmit}>
                        <div className="d-flex p-3 top justify-content-between align-item-center">
                            <Form.Group className="" controlId="formBasicCity">
                                <Form.Control type="text" placeholder="Enter City..." value={City} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>
                            {celcius && <Button variant="light" className="px-3" onClick={handleUnits}>°F</Button>}
                            {fahrenheit && <Button variant="light" className="px-3" onClick={handleUnits}>°C</Button>}
                        </div>
                    </Form>
                    {cityData && <Middle middleData={cityData} degree={degree}/>}
                    {cityData && <Buttom buttomData={cityData} degree={degree}/>}
                </Col>
            </Row>
            
        </div>
    </>
    );
}
 
export default WeatherApp;