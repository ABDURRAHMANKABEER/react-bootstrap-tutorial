import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const PracticeRedux = ({Users}) => {
    

    return (
        <>
            {Users.map((user) => (
                <Container key={user.id}>
                    {user.id}, {user.name}, {user.email} 
                </Container>
            ))}
        </>
    );
}
function mapStateToProps(state){
    return {
        Users: state.Users
    }
}
 
export default connect(mapStateToProps)(PracticeRedux)