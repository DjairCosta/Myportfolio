import React from 'react'

import { Modal, Button } from 'react-bootstrap'


const Dialog = ({ show, setShow, header }) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure want to delete?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                <Button variant="danger" onClick={() => setShow(false)}>Confirm</Button>{' '}
            </Modal.Footer>
        </Modal>
    )
}


export default Dialog