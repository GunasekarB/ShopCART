import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine, ThreeDot } from "react-loading-indicators";
import useFetch from "../components/custom-hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineFolderDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import { MdDelete } from "react-icons/md";

const ProductList = () => {
  let navigate = useNavigate();

  let { products, error, isLoading, setProducts } = useFetch(
    "https://fakestoreapi.com/products"
  );
  let handleDelete = (id) => {
    console.log(id);

    axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });

      let newProductList = products.filter((product) => product.id !== id);

      setProducts(newProductList);
    });
  };

  let dispatch = useDispatch();

  let cartState = useSelector((state) => {
    return state.cart;
  });

  let addItemToCart = (product) => {
    let checkProduct = cartState.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!checkProduct) {
      dispatch(addItem(product));
      Swal.fire({
        title: "Success",
        text: "Product Added Successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Product Already Added",
        icon: "error",
        footer: "<p> Add Some other Product </p>",
      });
    }
  };

  if (isLoading) {
    return (
      <div>
        <center>
          <ThreeDot
            variant="bounce"
            color="#b931cc"
            size="large"
            text="Loading..."
            textColor="#NaNNaNNaN"
          />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ padding: "0 10px", color: "red" }}>
          The API allows only the <b>GET</b> method. <b>POST</b> and <b>PUT</b> methods
          are not accessible.
        </p>
        <article
          className="addItem"
          style={{
            marginBottom: "10px",
            display: "flex",
            gap: "10px",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <span>
            {" "}
            <h5>Add Product</h5>{" "}
          </span>
          <Button onClick={() => navigate("/newProduct")}>Click</Button>
        </article>
        {products.length !== 0 && (
          <section className="products">
            {products.map((product, index) => (
              <Card
                key={`${product.id}-${index}`}
                style={{ width: "13rem", height: "18rem" }}
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
                      whiteSpace: "",
                      overflow: "auto",
                      height: "3.7rem",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={() => addItemToCart(product)}
                  >
                    <MdAddShoppingCart />
                    {" Add"}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/update/${product.id}`);
                    }}
                  >
                    <FaEdit />{" "}
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    {" "}
                    <MdDelete />{" "}
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}
        {error && <p> {error} </p>}
      </div>
    );
  }
};

export default ProductList;
