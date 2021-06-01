import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import CBox from "./CBox";

const Banner = (props) => {
  return (
    // <Card className="banner">

    //   <Container className='banner-text'>
    //     <Col md={7}>
    //       <h2>16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h2>
    //       <br />
    //       <div class="read-more">
    //         Read Article <ArrowRight />{" "}
    //       </div>
    //     </Col>
    //   </Container>
    // </Card>
    <Card className="bg-dark text-white banner">
      <div className='image-container'><Card.Img
        className={props.width<583?'mobile':''}
        src="https://s4.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/77808a56-3907-44bd-a6f2-e270996c225c.jpg"
        alt="Card image"
      /></div>
      <Card.ImgOverlay>
        <Container className="banner-text">
          <Col md={7} xs={12}>
            <CBox>Entertainment</CBox>
            <h2>
              16 Fan Favourite Cult Movies That You Didn't Know Were Copied
            </h2>
            <br />
            <div class="read-more">
              <a href="#home" alt="Read-More" className="read-more-link">
                Read Article <ArrowRight />{" "}
              </a>
            </div>
          </Col>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Banner;
