import React, {useState} from 'react';
import {Form, Button, Row, Col} from "react-bootstrap";
import useFormInput from "../common/useFormInput";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


const CreateAction = (props) => {


    // ----- STATES -----
    const nameInput = useFormInput("");
    const descriptionInput = useFormInput("");
    const latitudeInput = useFormInput("");
    const longitudeInput = useFormInput("");
    const radiusInput = useFormInput("");

    const [dateTime, setDateTime] = useState(new Date());

    // ----- FUNCTIONS -----
    function handleSubmit(event) {
        event.preventDefault();
        const action = {
            name: nameInput.value,
            description: descriptionInput.value,
            longitude: longitudeInput.value,
            latitude: latitudeInput.value,
            radius: radiusInput.value,
            start_time: Date.parse(String(dateTime))/1000,
        }
        props.setNewAction(action);
        props.setShow(false);
    }

    const handleDateTimeChange = (newDateTime) => {
        setDateTime(newDateTime);
    }

    // ----- RENDER -----
    return (
        <Form onSubmit={handleSubmit} >
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                required
                {...nameInput}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
                required
                {...descriptionInput}
            />
            <Row>
                <Col md={5}>
                    <Form.Label>Lat</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        {...latitudeInput}
                    />
                </Col>
                <Col md={5}>
                    <Form.Label>Lng</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        {...longitudeInput}
                        />
                </Col>
                <Col md={2}>
                    <Form.Label>Rad</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        {...radiusInput}
                    />
                </Col>
            </Row>
                <Form.Label>Start time</Form.Label>
                <DateTimePickerComponent
                    id="datetimepicker"
                    value={dateTime}
                    onChange={(e) => handleDateTimeChange(e.target.value)}
                />
            <div className="d-grid gap-2">
                <Button variant="primary" type="submit" className="form-button">
                    Dodaj
                </Button>
            </div>
        </Form>
    );
};

export default CreateAction;