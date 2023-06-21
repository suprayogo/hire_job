import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

function halamanHire() {
    const [activeTab, setActiveTab] = useState("portofolio");
    let company = [...new Array(2)];
    return (
      <>


<div id="halaman_hire">

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
              <h5 className="card-title ms-3 ">Skills</h5>
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
            </div>
          </div>



          <div className="col-9">
  
     

<h4>
Hubungi Lous Tomlinson
</h4>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
</p>


<form className="col-md-10" >
                  <div class="m-5 mt-2 mb-3">
                    <label for="tujuanPesan" class="form-label">
                    Tujuan tentang pesan ini
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="tujuanPesan"
                      aria-describedby="tujuanPesan"
                      placeholder="Projek"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="name" class="form-label">
                    Nama Lengkap
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="name"
                      placeholder="Masukan nama lengkap"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="email" class="form-label">
                   Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Masukan email"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="no_handphone" class="form-label">
                    No Handphone
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="no_handphone"
                      placeholder="Masukan no handphone"
                    />
                  </div>
          
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputJodPlace" class="form-label">
                      Deskripsi Singkat
                    </label>
                    <textarea
                      type="text-area"
                      class="form-control"
                      id="inputJobPlace"
                      placeholder="Tuliskan deskripsi singkat"
                      style={{ height: `35vh` }}
                    />
                  </div>
                  <button
                      type="button"
                      class="btn btn-warning ms-5"
                      style={{ width: `87%`,
                    marginBottom: "200px" }}
                    >
Hire
                    </button>
                  
                </form>

            </div>



        </div>
      </div>




<Footer />
      </div>   


      </>  
    )
}

export default halamanHire
