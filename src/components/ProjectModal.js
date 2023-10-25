import  { Fragment } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { ProjectModalHeader } from "./ModalDetails";

export const ProjectModal = (props) => {
    return (
        <Fragment>
            <Modal show={props.show} onHide={props.largeModalClose} className="inner-page-large-modal" backdrop={props.static}>
                <Modal.Header closeButton >
                    <ProjectModalHeader header={props.header}/>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};