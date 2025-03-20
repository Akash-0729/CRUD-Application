import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popup(abc) {
    console.log(abc.cngdata);
    const updateData = () => {

        fetch(`https://67d7ed389d5e3a10152c9db5.mockapi.io/user/Details/${abc.cngdata.id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(abc.cngdata)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            alert("Success...!")
            abc.vav(!abc.vva);
            // Do something with updated task
        }).catch(error => {
            console.log(error);
            // handle error
        })

        abc.editClose();
    };

    const createUser = () => {

        fetch('https://67d7ed389d5e3a10152c9db5.mockapi.io/user/Details', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(abc.cngdata)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            alert("Details Added Successfully...!");
            abc.vav(!abc.vva);
            // do something with the new task
        }).catch(error => {
            // handle error
        })

        abc.editClose();
    }

    return (
        <>
            {/* <Button variant="primary m-4" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={abc.editShow} onHide={abc.editClose}>
                <Modal.Header closeButton>
                    {abc.cngdata.id ? <Modal.Title>Edit Details✍️</Modal.Title> : <Modal.Title>Create Details✍️</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="txt"
                                placeholder="Name"
                                autoFocus
                                defaultValue={abc.cngdata.Name}
                                onChange={(e) => abc.setfieldData({ ...abc.cngdata, Name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="txt"
                                placeholder="name@email.com"
                                autoFocus
                                defaultValue={abc.cngdata.Email}
                                onChange={(e) => abc.setfieldData({ ...abc.cngdata, Email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="123-456-7890"
                                autoFocus
                                defaultValue={abc.cngdata.Phone}
                                onChange={(e) => abc.setfieldData({ ...abc.cngdata, Phone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="txt"
                                placeholder="State"
                                autoFocus
                                defaultValue={abc.cngdata.Location}
                                onChange={(e) => abc.setfieldData({ ...abc.cngdata, Location: e.target.value })}
                            />
                        </Form.Group>
                        {/* <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={abc.editClose}>
                        Close
                    </Button>
                    {abc.cngdata.id ? <Button variant="primary" onClick={updateData}>
                        Save Changes
                    </Button> :
                        <Button variant="primary" onClick={createUser}>
                            Create
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Popup;