import React from 'react';
import {Button, Container, Form, Modal, Row} from "react-bootstrap";
import useFormInput from "../common/useFormInput";

const NewUserModal = (props) => {

    const [show, setShow] = props.showNewUserModalState;

    const firstNameInput = useFormInput('');
    const lastNameInput = useFormInput('');
    const phoneInput = useFormInput('');

    // CFG
    // initial username and password
    function handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            username: (firstNameInput.value[0]+lastNameInput.value).toString().toLowerCase(),
            password: firstNameInput.value.toString().toLowerCase(),
            first_name: firstNameInput.value,
            last_name: lastNameInput.value,
            phone: phoneInput.value.replace(/\s/g, '')
        }
        props.setNewUser(newUser);
        console.log(newUser)
        setShow(false);
    }

    return (
        <Modal show={show} animation={true} onHide={() => setShow(false)}
            >
            <Modal.Header closeButton>
                <Modal.Title>Nowy user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Form onSubmit={handleSubmit} >
                            <Form.Label>Imię</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                {...firstNameInput}
                            />
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                {...lastNameInput}
                            />
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                {...phoneInput}
                            />
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" className="form-button">
                                    Dodaj usera
                                </Button>
                            </div>
                        </Form>
                    </Row>
                </Container>
            </Modal.Body>
            {/*<ModalFooter>*/}
            {/*    xxx*/}
            {/*</ModalFooter>*/}
        </Modal>
    );
};

export default NewUserModal;