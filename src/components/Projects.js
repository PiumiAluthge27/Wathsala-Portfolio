import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import hnb from "../assets/img/hnb-projects.png";
import uiImg from "../assets/img/uiImg.png";
import todo from "../assets/img/todo.png";
import nobleaged from "../assets/img/nobleaged.png";
import nobletec from "../assets/img/nobletec.png";
import dealzone from "../assets/img/dealzone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectHnbDev } from "./ProjectHnbDev";
import { ProjectDialogDealzone } from "./ProjectDialogDealzone";
import { ProjectNobleAged } from "./ProjectNobleAged";
import { ProjectNobleTec } from "./ProjectNobleTec";
import { ProjectToDo } from "./ProjectToDo";
import { UIDesign } from "./UIDesign";
import { ProjectHnbDesign } from "./ProjectHnbDesign";
import dfcc from "../assets/img/dfcc.png";
import { ProjectDFCCDesign } from "./ProjectDFCCDesign";
import { ProjectCarRent } from "./ProjectCarRent";
import car from "../assets/img/car.png";

export const Projects = (props) => {

  const projects = [
    {
      title: "HNB Online Banking",
      description: "UI Design",
      imgUrl: hnb,
      modalBody:<ProjectHnbDesign/>,
      header:"HNB",
    },
    {
      title: "HNB Online Banking",
      description: "UI Development",
      imgUrl: hnb,
      modalBody:<ProjectHnbDev/>,
      header:"HNB",
    },
    {
      title: "DFCC Online Banking",
      description: "Illustrator Design",
      imgUrl: dfcc,
      modalBody:<ProjectDFCCDesign/>,
      header:"DFCC"
    },
    {
      title: "Car Rental App",
      description: "UI Design",
      imgUrl: car,
      modalBody:<ProjectCarRent/>,
      header:"Car Rent App"
    },    
    {
      title: "Dialog Deal Zone",
      description: "UI Development",
      imgUrl: dealzone,
      modalBody:<ProjectDialogDealzone/>,
      header:"Deal Zone"
    },
    {
      title: "To Do Master",
      description: "UI Design",
      imgUrl: todo,
      modalBody:<ProjectToDo/>,
      header:"To Do Master"
    },
    {
      title: "UI Design",
      description: "UI Design",
      modalBody:<UIDesign/>,
      imgUrl: uiImg,
      header:"UI Design"
    },
    {
      title: "NobleAged",
      description: "Wordpress Development",
      imgUrl: nobleaged,
      modalBody:<ProjectNobleAged/>,
      header:"NobleAged"
    },
    {
      title: "NobleTec",
      description: "UI Design",
      imgUrl: nobletec,
      modalBody:<ProjectNobleTec/>,
      header:"NobleTec"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Hey! Have a look at my latest projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
