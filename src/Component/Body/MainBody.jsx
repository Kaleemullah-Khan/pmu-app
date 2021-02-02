import React from 'react';
import {Carousel,Container,Row,Col} from "react-bootstrap"
export const MainBody = () => {
    return (
        <div>
          <Container>
  <Row>
    <Col lg={"3"}>
    <Carousel>
  <Carousel.Item>
    <img
      src="Assets/pmu-banner-img-3.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3>CREATIVE MINDS,TRANSFORM THE WORLD</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src="Assets/pmu-banner-img-6.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>CREATIVE MINDS,TRANSFORM THE WORLD</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="Assets/Pcimpaired.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>CREATIVE MINDS,TRANSFORM THE WORLD</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className=""
      src="Assets/university.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>CREATIVE MINDS,TRANSFORM THE WORLD</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>
  </Row>
</Container>
<Container fluid="md">
  <Row>
    <Col lg={"12"}>
    <p>Vision
PMU vision is to be a higher education institution having a transformative impact on society through sustainable innovation in education, research, and creativity.


Mission
PMU is committed to sustaining world-class excellence in education, research and service by advancing the state of discovery, development, and application of knowledge.  We prepare our graduates for professional careers by offering the highest quality academic programs in a learning environment that fosters research and nourishes creativity. We equip our students with competencies and lifelong learning skills that help them become successful and responsible leaders in their communities. Our multicultural diverse and inclusive communities, our global connectedness and engagements, and our 21st futuristic outlook enrich our university environment.


Values
Dedication: A reflection of our unique work principles and our commitment to quality.

Sustainability: Our ability to maintain institutional capabilities in educational, social, environmental, and financial performance.

Impact: To solve critical issues faced by national and international communities.

Creativity: To be innovative by providing original ideas and knowledge.

Inclusive Community: To show respect for ethics, cultural and religious diversity, and freedom of thought.

Citizenry: Maintaining strong commitments to local, national, and global communities

Futuristic Outlook: To participate in shaping the future: its techniques, its resources, societies, and economics.

Compassion: To deal with others empathetically and transcend self-interest</p>
    </Col>
  </Row>
</Container>
        </div>
        
    );
};

