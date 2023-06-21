import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("portofolio");
  let company = [...new Array(2)];
  return (
    <div id="profile_page">
      <Navigation />
      
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                src="/poto-profil.jpg"
                className="rounded-circle object-fit-cover mx-auto d-block mt-3"
                width={`100`}
                height={`100`}
                alt="card"
              />
              <div className="card-body">
                <h5 className="card-title">Louis Tomlinson</h5>
                <p className="card-text">web developer</p>
                <div className="card-location mb-0 d-flex">
                  <img
                    className="me-2"
                    src="/map-pin.png"
                    width={`20`}
                    height={`20`}
                  />
                  <p className="text-muted">Purwokerto, Jawa Tengah</p>
                </div>

                <p className="text-muted mb-2">Freelancer</p>
                <p className="text-muted mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>
              </div>
              <button className="btn btn-primary mt-0 mb-2 ms-2 me-2">
                Hire
              </button>
              <h5 className="card-title ms-3">Skills</h5>
              <div className="card-skills ms-2 ">
                <div className="d-inline ">
                  {[
                    "Phyton",
                    "Laravel",
                    "Golang",
                    "Javascript",
                    "Php",
                    "Html",
                    "C++",
                    "Kotlin",
                    "Swift",
                    "Ruby",
                    "Rust",
                    "Javascript",
                    "Express",
                  ].map((item, key) => (
                    <span key={key} class="badge bg-warning m-1 p-2 ">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-location mb-0 ms-3 mt-2 d-flex">
                <img
                  className="me-2"
                  src="/mail.png"
                  width={`20`}
                  height={`20`}
                />
                <p className="text-muted">Louistommo@gmail.com</p>
              </div>
              <div className="card-location mb-0 ms-3 d-flex">
                <img
                  className="me-2"
                  src="/instagram.png"
                  width={`20`}
                  height={`20`}
                />
                <p className="text-muted">@Louist91</p>
              </div>
              <div className="card-location mb-0 ms-3 d-flex">
                <img
                  className="me-2"
                  src="/github.png"
                  width={`20`}
                  height={`20`}
                />
                <p className="text-muted">@Louistommo</p>
              </div>
              <div className="card-location mb-0 ms-3 d-flex">
                <img
                  className="me-2"
                  src="/gitlab.png"
                  width={`20`}
                  height={`20`}
                />
                <p className="text-muted">@Louistommo91</p>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="card">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "portofolio" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("portofolio")}
                  >
                    Portofolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "pengalaman-kerja" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("pengalaman-kerja")}
                  >
                    Pengalaman Kerja
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="portofolio"
                  className={`tab-pane fade ${
                    activeTab === "portofolio" ? "show active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="col-4 mb-4">
                      <div className="card">
                        <img
                          src="image1.png"
                          className="card-img-top"
                          alt="Image 1"
                        />
                        <div className="card-body">{/* Card content */}</div>
                      </div>
                    </div>
                    <div className="col-4 mb-4">
                      <div className="card">
                        <img
                          src="image1.png"
                          className="card-img-top"
                          alt="Image 2"
                        />
                        <div className="card-body">{/* Card content */}</div>
                      </div>
                    </div>
                    <div className="col-4 mb-4">
                      <div className="card">
                        <img
                          src="image1.png"
                          className="card-img-top"
                          alt="Image 3"
                        />
                        <div className="card-body">{/* Card content */}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="pengalaman-kerja"
                  className={`tab-pane fade ${
                    activeTab === "pengalaman-kerja" ? "show active" : ""
                  }`}
                >
                  {company.map((item, key) => (
                    <div className="row mt-4 ms-4 me-4" key={key}>
                      <div className="col col-md-2">
                        <img src="tokped.png" style={{ width: "100%" }} />
                      </div>
                      <div className="col col-md-10">
                        <h5 className="mb-0">Trainer</h5>
                        <p className="mb-0">Pijar Camp</p>
                        <div className="d-flex align-items-center">
                          <p className="text-secondary">
                            July 2019 - January 2020
                          </p>
                          <p className="text-secondary ms-5">6 months</p>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum erat orci, mollis nec gravida sed,
                          ornare quis urna. Curabitur eu lacus fringilla,
                          vestibulum risus at.
                        </p>

                        {key === company.length - 1 ? null : <hr />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
