import {Form,Button} from 'react-bootstrap';

const AddCity = () =>{

    return(
<Form>
    <Form.Group>
        <Form.Control animation="glow"
        type="text" 
        placeholder="Name"
        required
        />
         </Form.Group>
         <Form.Group>
        <Form.Control 
        type="text"
        placeholder=""
        required
        />
    </Form.Group>
    <Button variant="success" type="submit" block>Add New City </Button>
</Form>
    )
}

export default AddCity

