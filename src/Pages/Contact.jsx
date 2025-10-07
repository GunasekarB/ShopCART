import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDirections,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            Get in touch with us for inquiries, support, or feedback. We’re here
            to help.
          </p>
        </div>

        <Row className="g-4 mb-5">
          <Col xs={12} md={6} lg={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <div
                  className="d-flex justify-content-center align-items-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaMapMarkerAlt className="text-primary fs-3" />
                </div>
                <Card.Title className="fw-semibold">Visit Us</Card.Title>
                <Card.Text className="text-muted mb-2">
                  No.7, Mettu Street, Sholinghur
                </Card.Text>
                <Card.Text className="text-muted mb-2">Ranipet DT</Card.Text>
                <Card.Text className="text-muted mb-3">
                  Tamil Nadu -631102
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="https://www.google.com/maps"
                  target="_blank"
                >
                  <FaDirections className="me-2" />
                  Directions
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <div
                  className="d-flex justify-content-center align-items-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaPhoneAlt className="text-primary fs-3" />
                </div>
                <Card.Title className="fw-semibold">Call Us</Card.Title>
                <Card.Text className="text-muted mb-2">
                  +91 98431 50391
                </Card.Text>
                <Card.Text className="text-muted mb-3">
                  Mon–Fri 9AM–6PM
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="tel:+919843150391"
                >
                  Call Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <div
                  className="d-flex justify-content-center align-items-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3 mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  <FaEnvelope className="text-primary fs-3" />
                </div>
                <Card.Title className="fw-semibold">Email Us</Card.Title>
                <Card.Text className="text-muted mb-2">
                  ShopCART@example.com
                </Card.Text>
                <Card.Text className="text-muted mb-3">
                  ShopCART.sales@example.com
                </Card.Text>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href="mailto:gunabygs@gmail.com"
                >
                  Send Email
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ===== Store Info & Map (Responsive 2-column) ===== */}
        <Row className="align-items-start g-5">
          {/* Left: Store Info */}
          <Col xs={12} lg={6}>
            <h3 className="fw-bold mb-4">Store Information</h3>

            <div className="mb-4">
              <h5 className="fw-semibold">Sholinghur</h5>
              <p className="text-muted mb-2">Ranipet, Tamil Nadu - 631102</p>
              <Button
                variant="primary"
                size="sm"
                href="https://www.google.com/maps"
                target="_blank"
              >
                <FaDirections className="me-2" />
                Get Directions
              </Button>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold">Store Hours</h5>
              <ul className="list-unstyled text-muted">
                <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                <li>Saturday: 10:00 AM - 6:00 PM</li>
                <li>Sunday: 12:00 PM - 6:00 PM</li>
              </ul>
            </div>

            <div>
              <h5 className="fw-semibold">Customer Support</h5>
              <p className="text-muted mb-1">
                Email:{" "}
                <a href="mailto:support@example.com">gunabygs@gmail.com.com</a>
              </p>
              <p className="text-muted">
                Phone: <a href="tel:+15551234567">+91 98431 50391</a>
              </p>
            </div>
          </Col>

          {/* Right: Google Map */}
          <Col xs={12} lg={6}>
            <h3 className="fw-bold mb-4">Store Map</h3>
            <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
              <iframe
                title="Store Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.273393382416!2d79.4187495!3d13.1145095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52b28b51cbc39b%3A0x327e8997e0e682aa!2sSholinghur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1728293400000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
