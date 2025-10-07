import React from "react";
import useFetch from "../components/custom-hook/useFetch";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/laptop.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/product.jpg"

const Home = () => {
  return (
    <>
      <article className="pb-8 pb-lg-20 hero">
        <div className="containe mt-8 d-flex" >
          <div className="row align-items-center">
            <div
              className="col-12 col-lg-6 mb-5 mb-lg-0"
              style={{ marginTop: "10px" }}
            >
              <span
                className="small text-info fw-bold"
                style={{ padding: "0px" }}
              >
                <h4 style={{ padding: "0px", fontSize: "2rem" }}>
                  <b>Welcome to ShopCart</b>{" "}
                </h4>
              </span>
              <h1
                className="mt-8 mb-8 mb-lg-12"
                style={{ fontSize: "4rem", display: "flex" }}
              >
                Find the best products, at great prices
              </h1>
              <p className="lead text-muted mb-8 mb-lg-12">
                Curated items selected for quality and value. Fast shipping,
                simple returns, and customer support you can count on — all in
                one seamless shopping experience.
              </p>
              <div className="d-flex flex-wrap">
                <Link className="btn btn-primary me-4" as={Link} to="/products">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="hero-image"> 
            <img src={image} alt="Product Image" id="pimage"/>
          </div> */}
        </div>
      </article>

      <article className="py-20">
        <div className="containe">
          <h2 className="mb-10 mb-lg-16 text-info bold">Expand your brand</h2>
          <div className="row align-items-center">
            <div className="position-relative col-12 col-lg-6 mb-12 mb-lg-0">
              <div className="max-w-lg">
                <div className="d-flex align-items-start mb-10">
                  <div className="max-w-sm">
                    <h4 className="mb-6">Quick problem-solving contact</h4>
                    <p
                      className="lead text-muted"
                      style={{ marginLeft: "30px" }}
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-10">
                  <div className="max-w-sm">
                    <h4 className="mb-6">Making changes simple and easy</h4>
                    <p
                      className="lead text-muted"
                      style={{ marginLeft: "30px" }}
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-10">
                  <div>
                    <h4 className="mb-6">Exchangeable at any time</h4>
                    <p
                      className="lead text-muted"
                      style={{ marginLeft: "30px" }}
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative col-12 col-lg-6">
              <img
                className="d-none d-lg-block position-absolute top-0 end-0 mt-40 me-n32"
                src="norse-assets/icons/dots/red-dot-right-shield.svg"
                alt=""
              />
              <img
                className="img-fluid w-100 h-100 rounded"
                style={{ objectFit: "cover", maxHeight: "502px" }}
                src={logo}
                alt="Laptop Image"
              />
            </div>
          </div>
        </div>
      </article>

      <article className="py-20 third-hero">
        <div className="containe product-home">
          <div className="row mb-n12 mb-lg-n20 disply-product">
            <div className="col-12 col-md-6 col-lg-4 mb-12 mb-lg-20">
              <div className="d-flex">
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <center>
                      <CardMedia
                        component="img"
                        image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png"
                        alt="green iguana"
                        className="home-product-img"
                        style={{
                          width: "200px",
                          height: "200px",
                          padding: "10px",
                        }}
                      />
                    </center>
                    <CardActionArea>
                      <h5 className="mb-4" style={{ padding: "10px" }}>
                        Opna Women's Short Sleeve Moisture
                      </h5>
                    </CardActionArea>
                    <CardActions
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h6>$55.10</h6>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-12 mb-lg-20">
              <div className="d-flex">
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <center>
                      <CardMedia
                        component="img"
                        image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png"
                        alt="green iguana"
                        className="home-product-img"
                        style={{
                          width: "200px",
                          height: "200px",
                          padding: "10px",
                        }}
                      />
                    </center>
                    <CardActionArea>
                      <h5 className="mb-4" style={{ padding: "10px" }}>
                        John Hardy Women's Legends Naga Gold & Silver Dragon
                        Station Chain Bracelet
                      </h5>
                    </CardActionArea>
                    <CardActions
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h6>$78.00</h6>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-12 mb-lg-20">
              <div className="d-flex">
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <center>
                      <CardMedia
                        component="img"
                        height=""
                        image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png"
                        alt="green iguana"
                        className="home-product-img"
                        style={{
                          width: "200px",
                          height: "200px",
                          padding: "10px",
                        }}
                      />
                    </center>
                    <CardActionArea>
                      <h5 className="mb-4" style={{ padding: "10px" }}>
                        Pierced Owl Rose Gold Plated Stainless Steel Double
                      </h5>
                    </CardActionArea>
                    <CardActions
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h6>$10.99</h6>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-12 mb-lg-20">
              <div className="d-flex">
                <div>
                  <Card sx={{ maxWidth: 345 }}>
                    <center>
                      <CardMedia
                        component="img"
                        height=""
                        image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
                        alt="green iguana"
                        className="home-product-img"
                        style={{
                          padding: "10px",
                        }}
                      />
                    </center>
                    <CardActionArea>
                      <h5 className="mb-4" style={{ padding: "10px" }}>
                        Solid Gold Petite Micropave
                      </h5>
                    </CardActionArea>
                    <CardActions
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <h6>$168.00</h6>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
