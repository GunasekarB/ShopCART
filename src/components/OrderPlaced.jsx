import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center", height:"90vh" }}>
      <h2>Order Confirmed</h2>
      <p>Thank you! Your order has been placed successfully.</p>
      <p>You'll receive an email confirmation shortly.</p>
      <div style={{ marginTop: "1.5rem" }}>
        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
        <Button
          variant="secondary"
          style={{ marginLeft: "0.5rem" }}
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default OrderPlaced;
