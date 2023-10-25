import { ProjectModalHeader, ProjectModalDetails } from "./ModalDetails";
export const ProjectHnbDesign = (props) => {
    return (
        <div className="modal-body-hnb">
            <ProjectModalDetails 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                title="HNB Online Banking Web App" 
                role="Web UI Design"
                main="Figma"
                other="Adobe Illustrator"
                href="https://www.figma.com/file/R4vigkJmDjiNFj7QDdlhBX/HNB-Digital-Banking-IB---New-Update?type=design&node-id=91%3A3&mode=design&t=GKMbL3IrRKMLlTvN-1/"/>
                
            <p className="company-policies">* Cannot share design of these projects due to company policies</p>
        </div>
        
    );
};