import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container >
                <div className="d-flex justify-content-center">
                    <h1 className="display-3">About Me</h1>
                </div>
                <Row className="justify-content-center align-items-center">
                    <Col xs lg="8" className="shadow-sm bg-muted rounded p-3 mt-3">
                        <Row className="justify-content-center align-items-sm-center">
                            <Col xs={4}>
                                <Image fluid src="./src/assets/me.PNG" alt="" />
                            </Col>
                            <Col>
                                <p className="h6">My Name is Abdurrahman kabeer</p>
                                I’m a passionate frontend developer and a 300-level engineering student with a growing expertise in building dynamic and user-friendly web applications. My skill set includes HTML, CSS, JavaScript, and modern frameworks like React and Bootstrap.

                                I thrive on tackling challenging projects that push my creativity and technical knowledge, as I continuously strive to enhance my craft and deliver exceptional results.

                                Beyond coding, I bring a friendly and collaborative attitude to every project, ensuring a seamless and enjoyable working experience for everyone involved.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Home;