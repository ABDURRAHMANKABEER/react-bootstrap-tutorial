import { Col, Row } from "react-bootstrap";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";

const Buttom = (prop) => {

    const data = prop.buttomData;
    const degree = prop.degree;
    const { 
        main: {temp, feels_like, temp_max, temp_min, pressure, humidity},
        wind: {speed},
        } = data;

    return (
        <>
           <Row className="container-fluid ps-3 justify-content-between align-items-center">
                <Col xs={5} className="d-flex align-items-center p-2 rounded buttom flex-column text-light">
                    <div><FaArrowUp /> Max</div>
                    {temp_max} {degree}
                </Col>
                <Col xs={5} className="d-flex buttom p-2 rounded flex-column text-light align-items-center">
                    <div><FaArrowDown /> Min</div>
                    {temp_min} {degree}
                </Col>
            </Row>
            <Row className="container-fluid ps-3 justify-content-between align-items-center">
                <Col xs={5} className="d-flex align-items-center p-2 rounded buttom flex-column text-light">
                    <div><MdCompress /> Pressure</div>
                    {pressure} hpa
                </Col>
                <Col xs={5} className="d-flex buttom p-2 rounded flex-column text-light align-items-center">
                    <div><MdOutlineWaterDrop /> Humidity</div>
                    {humidity} %
                </Col>
            </Row>
            <Row className="container-fluid ps-3 justify-content-between align-items-center">
                <Col xs={5} className="d-flex align-items-center p-2 rounded buttom flex-column text-light">
                    <div><MdOutlineAddReaction /> Feels Like</div>
                    {feels_like} {degree}
                </Col>
                <Col xs={5} className="d-flex buttom p-2 rounded flex-column text-light align-items-center">
                    <div><FaWind /> Wind Speed</div>
                    {speed} m/s
                </Col>
            </Row>
        </>
    );
}
 
export default Buttom;