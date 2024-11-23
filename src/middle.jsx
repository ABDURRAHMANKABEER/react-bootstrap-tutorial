import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

const Middle = (prop) => {

    const data = prop.middleData;
    const degree = prop.degree;
    const {name, weather, main: {temp}, sys: {country}} = data;
    const {description, icon: iconId} =  weather[0];
    const imgUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    
    return (
        <>
            <Container className="middle d-flex justify-content-center align-items-center p-3">
                <div className="container d-flex flex-column justify-content-center">
                    <div className="text-light text-uppercase">{name}, {country}</div>
                    <div><img src={imgUrl} alt="weatherIcon" style={{height: 50}}/></div>
                    <div className="text-light ">{description}</div>
                </div>
                <div className="text-light display-6 fw-bold">{temp}{degree}</div>
            </Container>
        </>
    );
}
 
export default Middle;