import { Container, Button} from "react-bootstrap";
import { Link, useParams, useNavigate} from "react-router-dom";
import { connect } from "react-redux";

const UserDetails = (props) => {

    const User = props.User;

    function handleDelete() {
        props.delete(User.id);
        
    };

    return (
        <>
            <Container>
                <h1 className="display-3 text-center">About User</h1>
                { 
                    <div className="container">
                    <div className="text-muted">Name: {User.name}</div>
                    <div className="text-muted mb-3">Email: {User.email}</div>
                    <p className="lead m-0">Description:</p>
                    <div className="mb-3">{User.description}</div>
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
function mapStateToProps(state){
    
    const { id } = useParams();
    return {
        User: state.Users.find(user => user.id === id)
    }
};
function mapDispatchToProps(dispatch){
    return {
        delete: (id)=> dispatch({type: 'DELETE_USER', id: id})
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);