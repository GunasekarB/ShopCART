import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineFolderDelete } from "react-icons/md";
import { removeItem, changeQuantity, clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  let cartProducts = useSelector((state) => {
    return state.cart;
  });

  // console.log( cartProducts );

  let dispatch = useDispatch();
  let handleDelete = (reduxItemId) => {
    dispatch(removeItem(reduxItemId));
  };
  let handleQty = (id, delta) => {
    dispatch(changeQuantity({ id, delta }));
  };
  let handlePlaceOrder = () => {
    // in a real app you'd call an API. Here we just clear the cart and navigate
    dispatch(clearCart());
    navigate("/order-confirmed");
  };
  let navigate = useNavigate();

  const totalPrice = cartProducts.reduce((sum, p) => {
    const qty = p.quantity || 1;
    return sum + p.price * qty;
  }, 0);
  return (
    <div>
      {cartProducts.length !== 0 ? (
        <div>
          <section
            className="products"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            {cartProducts.map((product) => (
              <Card
                key={product.id}
                style={{ width: "16rem" }}
                className="product"
              >
                <center>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      width: "100px",
                      height: "100px",
                      paddingTop: "10px",
                    }}
                  />
                </center>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1rem",
                      height: "3.7rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text>${product.price} each</Card.Text>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleQty(product.id, -1)}
                    >
                      -
                    </Button>
                    <span>{product.quantity || 1}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleQty(product.id, 1)}
                    >
                      +
                    </Button>
                    <div style={{ marginLeft: "auto", fontWeight: "600" }}>
                      ${((product.quantity || 1) * product.price).toFixed(2)}
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    <MdOutlineFolderDelete />
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <div style={{ fontSize: "1.25rem" }}>
              Total: ${totalPrice.toFixed(2)}
            </div>
            <div style={{marginBottom:"10px"}}> 
              <Button
                variant="primary"
                onClick={() => navigate("/products")}
                style={{ marginRight: "0.5rem" }}
              >
                Continue Shopping
              </Button>
              <Button variant="success" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <article
          className="addItem"
          style={{
            marginBottom: "10px",
            height: "90vh",
            gap: "10px",
            margin: "25px",
            alignItems: "center",
          }}
        >
          <span>
            {" "}
            <h5>Cart is empty</h5>
            <h5>Please Purchase Somethig!</h5>{" "}
          </span>
          <Button onClick={() => navigate("/products")}>Click</Button>
        </article>
      )}
    </div>
  );
};

export default WishList;
