import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { Container, Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const UsersList = () => {
    const {data:userDetails, error} = useFetch("http://localhost:3000/Users");

    return (
        <>
            <Row className="container-fluid justify-content-center align-items-center">
                <Col xs lg="6">
                    <h1 className="display-3 text-center text-secondary">Users List</h1>
                    <div>{!userDetails && error}</div>
                    <div>{!userDetails && <p>Loading...</p>}</div>
                    <Row className="mt-1 p-2 bg-primary text-light row justify-content-center align-items-center">
                        <Col>Name</Col>
                        <Col>Email</Col>
                        <Col>User Details</Col>
                    </Row>
                    {userDetails && userDetails.map(user => (
                        <div key={user.id}>
                            <Row className="p-2 bg-primary text-light row align-items-center">
                                <Col xs={4}>{user.name}</Col>
                                <Col className="user-email" xs={5}>{user.email}</Col>
                                <Col xs={3}>
                                    <Link to={`/user/${user.id}`}>
                                        <Button variant="outline-light">User Details</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Col>
                <Link to={`/newUser`} className="d-flex justify-content-center">
                    <Button className="mt-3" variant="primary">Add New User</Button>
                </Link>
            </Row>
        </>
    );
}
 
export default UsersList;