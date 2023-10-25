import {  ProjectModalDetails } from "./ModalDetails";
export const ProjectNobleAged = (props) => {
    return (
        <div className="modal-body-hnb">
            <ProjectModalDetails 
                description="NobleAged is site that I developed for Elders Home"
                title="NobleAged" 
                role="Wordpress Developer"
                main="Wordpress"
                other="css, Javascript, Elementor page builder"
                href="https://nobleaged.com/"/>
             
            <p className="company-policies">* Cannot share source code or screen shots of these projects due to company policies</p>
        </div>
        
    );
};