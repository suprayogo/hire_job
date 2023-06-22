import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Edit_profile() {
  return (
    <div id="edit_profile_page">
      <Navigation />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                src="/poto-profil.jpg"
                className="rounded-circle  object-fit-cover mx-auto d-block mt-3"
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
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="btn btn-primary mt-2 mb-2 w-100">
                  Simpan
                </button>
                <button className="btn btn-outline-primary mt-0 mb-2 w-100">
                  Batal
                </button>
              </div>
            </div>
          </div>


          <div className="col-9">
            <div className="card">
              <div className="card-body">
                <h4>Data diri</h4>
                <hr />
                <form>
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputName" class="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="inputName"
                      aria-describedby="name"
                      placeholder="Masukan nama lengkap"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputJob" class="form-label">
                      Job Desk
                    </label>
                    <input
                      type="job-desk"
                      class="form-control"
                      id="inputJob"
                      placeholder="Masukan job desk"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputDomisili" class="form-label">
                      Domisili
                    </label>
                    <input
                      type="domisili"
                      class="form-control"
                      id="inputDomisili"
                      placeholder="Masukan domisili"
                    />
                  </div>
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputJodPlace" class="form-label">
                    Tempat kerja
                    </label>
                    <input
                      type="job-place"
                      class="form-control"
                      id="inputJobPlace"
                      placeholder="Masukan tempat kerja"
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
                      style={{ height: `15vh` }}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body">
                <h4>Skill</h4>
                <hr />
                <div className="d-flex">
                  <div class="col-8 m-5 mt-2 mb-3">
                    <input
                      type="name"
                      class="form-control"
                      id="inputName"
                      aria-describedby="name"
                      placeholder="Masukan nama lengkap"
                    />
                  </div>
                  <div className="col-2">
                    <button className="btn btn-warning mt-2 mb-2 w-100">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>



            <div className="card mt-3">
              <div className="card-body">
                <h4>Pengalaman Kerja</h4>
                <hr />
                <form>
                  <div class="m-5 mt-2 mb-3">
                    <label for="inputPosition" class="form-label">
                      Posisi
                    </label>
                    <input
                      type="position"
                      class="form-control"
                      id="inputPosition"
                      aria-describedby="position"
                      placeholder="Web Developer"
                    />
                  </div>
                  <div className="d-flex">
                    <div class="col-5 ms-5 me-2 mt-2 mb-3">
                      <label for="inputPosition" class="form-label">
                        Nama Perusahaan
                      </label>
                      <input
                        type="position"
                        class="form-control"
                        id="inputPosition"
                        aria-describedby="position"
                        placeholder="Web Developer"
                      />
                    </div>
                    <div class="col-5 m-5 mt-2 mb-3">
                      <label for="inputPosition" class="form-label">
                        Bulan/Tahun
                      </label>
                      <input
                        type="position"
                        class="form-control"
                        id="inputPosition"
                        aria-describedby="position"
                        placeholder="Web Developer"
                      />
                    </div>
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
                      style={{ height: `15vh` }}
                    />
                    <hr className="mb-5 mt-5" />
                  </div>
                </form>
                <div className="row">
                  <div className="col-10">
                    <button
                      type="button"
                      class="btn btn-outline-warning ms-5"
                      style={{ width: `108%` }}
                    >
                      Tambah Pengalaman Kerja
                    </button>
                  </div>
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

export default Edit_profile;
