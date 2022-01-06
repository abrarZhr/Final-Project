import {Form,Button} from 'react-bootstrap';

const AddUser = () =>{

    return(
<Form>
    <Form.Group>
        <Form.Control animation="glow"
        type="text" 
        placeholder="image"
        required
        />
         </Form.Group>
         <Form.Group>
        <Form.Control 
        type="text"
        placeholder="descrption"
        required
        />
    </Form.Group>
    <Button variant="success" type="submit" block>Add post </Button>
</Form>
    )
}

export default AddUser

