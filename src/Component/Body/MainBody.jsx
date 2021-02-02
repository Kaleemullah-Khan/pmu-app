import React from 'react';
import {Carousel,Card, Button,Row,Col} from "react-bootstrap"
export const MainBody = () => {
    return (
        <div>
          
  <Row>
    <Col lg={"8"}>
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
      className=""
      src="Assets/university.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h3>CREATIVE MINDS,TRANSFORM THE WORLD</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></Col>

    <Col lg={"4"}>
    <Card className="text-center">
  <Card.Header> <h2>University Vision & Mission</h2> </Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    Vision
PMU vision is to be a higher education institution having a transformative impact on society through sustainable innovation in education, research, and creativity.


Mission
PMU is committed to sustaining world-class excellence in education, research and service by advancing the state of discovery, development, and application of knowledge.  We prepare our graduates for professional careers by offering the highest quality academic programs in a learning environment that fosters research and nourishes creativity. We equip our students with competencies and lifelong learning skills that help them become successful and responsible leaders in their communities. Our multicultural diverse and inclusive communities, our global connectedness and engagements, and our 21st futuristic outlook enrich our university environment.
    </Card.Text>
    <Button variant="primary">Know More</Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
    </Col>
  </Row>

        </div>
        
    );
};

