import { Col, Row, Form, Button } from "react-bootstrap";

const ContactMe = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="display-3">Contact Me</h1>
            </div>
            <Row className="justify-content-center align-items-center">
                <Col  xs lg="8" className="shadow-sm bg-muted rounded p-3 mt-3">
                    <div>
                        <p>
                            I’d love to hear from you! Whether you have a project idea, collaboration opportunity, or just want to connect, feel free to reach out.
                        </p>
                        <p className="m-0 mb-1">Email: abdurrahmankabeer200@gmail.com</p>
                        <p className="m-0 mb-1">Phone: +2348107790414</p>
                        <p className="m-0 mb-1">LinkedIn: </p>
                        <p className="m-0 mb-1">GitHub: </p>
                    </div>
                    <p className="m-0 mb-1">Alternatively, you can fill out the contact form below, and I’ll get back to you as soon as possible.</p>
                    <Col xs={8} lg="6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </>
    );
}
 
export default ContactMe;