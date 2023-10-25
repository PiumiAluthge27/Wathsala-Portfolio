import {  ProjectModalDetails } from "./ModalDetails";
export const ProjectDialogDealzone = (props) => {
    return (
        <div className="modal-body-hnb">
            <ProjectModalDetails 
                title="DIALOG Promotions Management - Admin Portal" 
                role="Web UI Engineer"
                main="React"
                other="Material Ui, Java Script, Sass"/>

            <ProjectModalDetails 
                title="DIALOG Promotions Management - DealZone" 
                role="Web UI Engineer"
                main="React"
                other="React-bootsrap, Java Script, Sass"/>
             
            <p className="company-policies">* Cannot share source code or screen shots of these projects due to company policies</p>
        </div>
        
    );
};