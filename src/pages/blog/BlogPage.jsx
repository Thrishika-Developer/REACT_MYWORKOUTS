import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
export default function BlogPage(){
    const[show,setShow]=useState(false)
    const handleShow =()=>setShow(true)
    const handleClose =()=>{setShow(false)}

    

    return  <div>
        <hr />
        <div>
            <Button variant="secondary" onClick={handleShow}>Open model</Button>
            <Modal show={show} onHide={handleClose} style={{background:"green"}}>
                <Modal.Header closeButton>
                    <Modal.Title> My modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    this is the modal content
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>close</Button>
                    <Button variant="success"> save changes</Button>
                </Modal.Footer>

            </Modal>
        </div>
    </div>
}