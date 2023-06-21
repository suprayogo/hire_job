import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Jobs = () => {
  return (
    <>
      <div id="Jobs" className="Jobs">
        <Navigation />
        <div className="bg-top-jobs d-flex align-items-center">
          <div className="container">
            <h3 className="text-white m-0">Top Jobs</h3>
          </div>
        </div>
        <div id="main" className="container">
          <div className="search">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for any skill"
            />
            <div className="action d-inline-flex justify-content-center align-items-center">
              <img src="/search.svg" />
              <div
                style={{
                  height: "40px",
                  borderLeft: "1px solid #9EA0A5",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
              />
              <Link href="#">
                <button
                  id="btn-category"
                  type="button"
                  className="btn btn-white "
                  style={{ marginRight: ".5rem", color: "#9EA0A5" }}
                >
                  Kategori
                </button>
              </Link>
              <Link href="#">
                <button
                  id="btn-search"
                  type="button"
                  className=" btn btn-primary "
                  style={{ marginLeft: ".5rem" }}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>

{/* DATA 1 (START) */}
          <div className="list border border-1 rounded-2">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                  <div className="photo">
                    <div className="bg-photo">
                      <img
                        className="card-img"
                        src="/poto-profil.jpg"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="text-start">
                    <h4 className="card-title">Louis Tomlinson</h4>
                    <h6 className="card-subtitle mb-1 mt-1 text-body-tertiary">
                      Web developer
                    </h6>
                    <p className="text-body-tertiary m-0">
                      <img src="/map-pin.png" />
                      Lorem ipsum
                    </p>
                    <div className="d-inline-flex mt-3">
                      <span className="badge bg-warning m-1 p-2 ">PHP</span>
                    </div>
                    <div className="d-inline-flex mt-2">
                      <span className="badge bg-warning m-1 p-2 ">
                        Javascript
                      </span>
                    </div>
                    <div className="d-inline-flex mt-2">
                      <span className="badge bg-warning m-1 p-2 ">HTML</span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <Link href="#">
                    <button
                      type="button"
                      className="btn btn btn-primary border-2"
                    >
                      Lihat Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
{/* DATA 1 (END) */}

{/* DATA 2 (START) */}
          <div className="list border border-1 rounded-2">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-auto">
                  <div className="photo">
                    <div className="bg-photo">
                      <img
                        className="card-img"
                        src="/poto-profil2.jpg"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="text-start">
                    <h4 className="card-title">Adinda sari</h4>
                    <h6 className="card-subtitle mb-1 mt-1 text-body-tertiary">
                      Web developer
                    </h6>
                    <p className="text-body-tertiary m-0">
                      <img src="/map-pin.png" />
                      Lorem ipsum
                    </p>
                    <div className="d-inline-flex mt-3">
                      <span className="badge bg-warning m-1 p-2 ">PHP</span>
                    </div>
                    <div className="d-inline-flex mt-2">
                      <span className="badge bg-warning m-1 p-2 ">
                        Javascript
                      </span>
                    </div>
                    <div className="d-inline-flex mt-2">
                      <span className="badge bg-warning m-1 p-2 ">HTML</span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <Link href="#">
                    <button
                      type="button"
                      className="btn btn btn-primary border-2"
                    >
                      Lihat Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
{/* DATA 2 (END) */}




          <div className="pagination">
            <div className="container d-flex justify-content-center align-items-center">
              <Link href="#">
                <button
                  type="button"
                  className=" btn btn-white border-1"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "0",
                    marginLeft: ".5rem",
                    marginRight: ".5rem",
                    zIndex: "",
                  }}
                >
                  <img src="/Vector.svg" />
                </button>
              </Link>
              {[...new Array(3)].map((item, key) => (
                <Link href="#" key={key}>
                  <button
                    type="button"
                    className={`btn  btn-white border-1 ${
                      key === 0 ? "active" : ""
                    }`}
                    style={{
                      width: "50px",
                      height: "50px",
                      padding: "0",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                  >
                    <h6 className="m-0 p-0">{key + 1}</h6>
                  </button>
                </Link>
              ))}
              <Link href="#">
                <button
                  type="button"
                  className=" btn btn-white border-1"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: "0",
                    marginLeft: ".5rem",
                    marginRight: ".5rem",
                  }}
                >
                  <img src="/Vector2.svg" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Jobs;
