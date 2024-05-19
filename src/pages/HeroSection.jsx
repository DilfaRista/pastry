import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import "../dist/css/hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
        <Container>
          <Row>
            <Col>
              <div className="hero-content">
                <h1>SWEETY PASTRY</h1>
                <p>Nikmati Kelezatan Kue Kering Homemade di Setiap Gigitan <br/> Selamat Berbelanja </p>
                <Button variant="primary" size="lg">Pelajari Lebih Lanjut</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default HeroSection
