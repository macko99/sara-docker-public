import React, {useState} from 'react';
import {Toast} from "react-bootstrap";

const InfoToast = (props) => {

    const [show, setShow] = useState(true);
    const timeout = 3500; // ms

    return (
        <Toast
            className="m-1"
            show={show}
            onClose={() => setShow(false)}
            bg="light"
            delay={timeout}
            autohide
        >
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
                <small>{props.id}</small>
            </Toast.Header>
            <Toast.Body>{props.content}</Toast.Body>
        </Toast>
    );
};
//  style={{zIndex:1}}

export default InfoToast;