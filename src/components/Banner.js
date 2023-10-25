import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "UI/UX Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>               
                <h1>Hi! I'm <span className="banner-name">Wathsala</span> <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "UI/UX Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm Wathsala Piumi Aluthge. I have completed my BSc (Hons) degree in Information Technology from Sri Lanka Institute of Information Technology (SLIIT) and also have done many courses and self studies related to web designing, coding, and programming. Currently I'm working in IdeaHub (Private) Limited as a UI/UX Engineer. Now I can easily cope up with the IT Industry and understand the consumers’ needs. I believe you can hire me without any doubt because I've never failed in any of my projects and made my clients happy with my skills and knowledge. Thank you.</p>
              </div>}
            </TrackVisibility>
            <a href="https://drive.google.com/file/d/1KNXoYSd9tZxfO2b2TSeUFDIvriErREuI/view?usp=share_link"><span className="tagline">Download CV</span></a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
