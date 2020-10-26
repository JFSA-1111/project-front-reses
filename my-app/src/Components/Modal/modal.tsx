import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

export interface Props {
    isVisible: any;
    Title: any;
    Form: any;
    OnClose: any;

}


const ModalForm = ({isVisible, Title, Form, OnClose}: Props) => {


    return (
        <Modal size={'lg'} isOpen={isVisible}>
            <ModalHeader>{Title}</ModalHeader>
            <ModalBody>
                {Form}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={OnClose}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}


export default ModalForm
