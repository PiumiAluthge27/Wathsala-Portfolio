import {  ProjectModalDetails } from "./ModalDetails";
export const ProjectToDo = (props) => {
    return (
        <div className="modal-body-hnb">
            <ProjectModalDetails 
                description="To Do Master is site that I design for "
                title="To Do" 
                role="UI Designer"
                main="Figma"
                other="-"
                href="https://www.figma.com/file/iT63w4wDOLq1Bfpv2vjhTl/To-Do-Master?type=design&node-id=0%3A222&mode=design&t=ZyLjhTaYXIopxtmJ-1"/>
             
            {/* <p className="company-policies">* Cannot share source code or screen shots of these projects due to company policies</p> */}
        </div>
        
    );
};