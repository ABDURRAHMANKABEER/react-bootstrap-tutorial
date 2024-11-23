import { Container, Button, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {

    const {id} = useParams();
    const {data:userDetails, error} = useFetch("http://localhost:3000/Users/" + id)
    const navigate = useNavigate()

    function handleDelete() {

        fetch("http://localhost:3000/Users/" + id, {
            method: 'DELETE'
        }).then(()=> {
            navigate('/usersList');
        })
    }

    return (
        <>
            <Container>
                <h1 className="display-3 text-center">About User</h1>
                {userDetails && 
                    <div className="container">
                    <div className="text-muted">Name: {userDetails.name}</div>
                    <div className="text-muted mb-3">Email: {userDetails.email}</div>
                    <p className="lead m-0">Description:</p>
                    <div className="mb-3">{userDetails.description}</div>
                    <div className="d-flex justify-content-center">
                        <Button className="me-2" onClick={handleDelete} variant="primary">Delete User</Button>
                        <Link to={`/usersList`}>
                            <Button variant="primary">Users List</Button>
                        </Link>
                    </div>
                </div>}
            </Container>
        </>
    );
}
 
export default UserDetails;