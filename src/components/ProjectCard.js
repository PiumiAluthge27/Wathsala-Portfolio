import { Col } from "react-bootstrap";
import { ProjectModal } from "./ProjectModal";
import  { Fragment, useState } from "react";

export const ProjectCard = ({ title, description, imgUrl,modalBody,header }) => {
  const [billPayment, viewBillPayment] = useState(false);

  const handleBillPaymentmodalClose = () => {
      viewBillPayment(false);
  };

  const handleBillPaymentmodalOpen = () => viewBillPayment(true);
  return (

    <Fragment>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span><br/>
            <div className="pro-see-more" type="primary" onClick={handleBillPaymentmodalOpen}>see more</div>
          </div>
        </div>
      </Col>

      <ProjectModal show={billPayment} largeModalClose={handleBillPaymentmodalClose} header={header}>
          {modalBody}
      </ProjectModal>

    </Fragment>

  )
}
