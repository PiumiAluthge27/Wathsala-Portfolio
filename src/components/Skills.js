import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
// skills 
import photoshop from "../assets/img/photoshop.png";
import php from "../assets/img/php.png";
import wordpress from "../assets/img/wordpress.png";
import jira from "../assets/img/jira.png";
import reactLogo from "../assets/img/react.png";
import sassImg from "../assets/img/sass.png";
import html from "../assets/img/html.png";
import js from "../assets/img/js.png";
import cssImg from "../assets/img/css.png";
import git from "../assets/img/git.png";
import mysql from "../assets/img/mysql.png";
import figma from "../assets/img/figma.png";
import adill from "../assets/img/adobe_illustrator.png";
import bootstrap from "../assets/img/bootstrap.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel 
                          responsive={responsive} 
                          infinite={true}  
                          autoPlay={true}
                          className="owl-carousel owl-theme skill-slider"
                          >
                            
                            <div className="item">
                                <div className="image-div">
                                  <img src={wordpress} alt="Image" />
                                </div>
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssImg} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>My SQL</h5>
                            </div>
                            <div className="item">
                                <img src={sassImg} alt="Image" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={photoshop} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={jira} alt="Image" />
                                <h5>jira</h5>
                            </div>
                            <div className="item">
                                <img src={adill} alt="Image" />
                                <h5>Adobe Illustrator</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
