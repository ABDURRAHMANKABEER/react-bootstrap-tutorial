import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [addingUser, setAddingUser] = useState(false);

    function handleSubmit(e){

        e.preventDefault();
        const user = { name, email, description };
        setAddingUser(true);

        fetch("http://localhost:3000/Users", {
            method: 'Post',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            setAddingUser(false);
        });
        navigate('/usersList');
    };

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlTextarea1">
                        <Form.Label>Describe Your Self</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} required/>
                    </Form.Group>
                    {!addingUser && <Button variant="primary" type="submit">Add User</Button>}
                    {addingUser && <Button variant="primary" type="submit" disabled>Adding...</Button>}
                </Form>
            </Container>
        </>
    );
}
 
export default NewUser;