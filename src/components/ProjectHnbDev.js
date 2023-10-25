import { ProjectModalHeader, ProjectModalDetails } from "./ModalDetails";
export const ProjectHnbDev = (props) => {
    return (
        <div className="modal-body-hnb">
            <ProjectModalDetails 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                title="HNB Online Banking Web App" 
                role="Web UI Engineer"
                main="React"
                other="React-boostrap, Java Script, Sass, Html"
                href="https://onlinebanking.hnb.lk/"/>

            <ProjectModalDetails 
                title="HNB Online Banking Admin Portal" 
                role="Web UI Engineer"
                main="React"
                other="React-boostrap, Java Script, Sass, Html"/>
                
            <p className="company-policies">* Cannot share source code or screen shots of these projects due to company policies</p>
        </div>
        
    );
};