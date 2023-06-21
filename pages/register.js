import Link from 'next/link'
import React from 'react'

function Register() {
    return (
        <>
           <main className="container">
      <div className="row align-items-center mt-3">
        <div className="col col-md-6">
          <div style={{ position: "relative" }}>
            <div
              className=" content-to-center"
              style={{
                height: "95vh",
                width: "100%",
                position: "absolute",
                top: 0,
                opacity: 0.8,
                padding: "20px",
                backgroundColor: "#5e50a1",
              }}
            >
              <h1 className="text-white">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
          </div>

          <img src="/auth.png" width="100%" style={{ height: "95vh" }} />
        </div>
        <div className="col-md-6 p-4">
          <h2>Halo, Pewpeople</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>


      

          <form onSubmit="">
            <div class="mb-3">
              <label for="fullname" class="form-label">
             Nama
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="fullname"
                aria-describedby="fullname"
                placeholder="Masukan nama panjang"
              
                required
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
             Email
              </label>
              <input
                type="email"
                class="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Masukan alamat email"
              
                required
              />
            </div>

            <div class="mb-3">
              <label for="no_handphone" class="form-label">
            No handphone
              </label>
              <input
                type="number"
                class="form-control form-control-lg"
                id="no_handphone"
                aria-describedby="no_handphone"
                placeholder="Masukan no handphone"
              
                required
              />
            </div>

   



            
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Masukan kata sandi"
                required
              />
            </div>
            <div class="mb-5">
              <label for="exampleInputPassword2" class="form-label">
               Konfirmasi Password
              </label>
              <input
                type="password"
                class="form-control form-control-lg"
                id="exampleInputPassword2"
                placeholder="Konfirmasi kata sandi"
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" class="btn btn-warning btn-lg mb-4">
                Daftar
              </button>
            </div>


            <p className="text-center mt-3">
            Anda sudah punya akun?{" "}
              <Link
                href="/login"
                className="text-decoration-none text-warning"
              >
              Masuk disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>



        </>
    )
}

export default Register
