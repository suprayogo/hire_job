import Navigation from "../components/Navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { increment} from '@/store/reducers/counterSlice'

import Footer from "@/components/Footer";
export default function Home() {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state)

  const handleCounter = () => {
    dispatch(increment());
  }
  
  return (
    <>
      <header>
        <Navigation />

        <div className="container content-to-center">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5  col-lg-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center order-2 order-md-1">
              <h1 className="d-block mb-3 mt-5">
                Talenta terbaik negri untuk perubahan revolusi 4.0
              </h1>
              <p className="d-block mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <Link href="/register">
                <button className="btn btn-primary btn-lg">
                  Mulai Dari Sekarang
                </button>
              </Link>




            </div>
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 order-1 order-md-2 ">
              <div className="box-gray"></div>  
                {/* <div className="box-purple"></div> */}
                <img
                  src="/home-img-1.png"
                  alt="Home Picture"
                  height={400}
                  width={400}
                />
            </div>
          </div>
        </div>
      </header>

      {/* Why tallent in peaworld (START) */}
      <section
        id="peawolrd"
        className="container"
        style={{ marginBottom: "200px" }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 ">
            <div className="box-gray-2"></div>

            <div>
              <img
                src="/home-img-2.png"
                alt="Home Picture"
                height={300}
                width={400}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <h2 className="mb-5 mt-5">Kenapa harus mencari tallent di peworld</h2>

            {[...new Array(4)].map((item, key) => (
              <div className="d-flex align-items-center mb-4" key={key}>
                <img
                  src="/checklist-purple.svg"
                  style={{ marginRight: "20px" }}
                />
                <p className="mb-0">Lorem ipsum dolor sit amet.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why tallent in peaworld (END) */}

      {/* Skill Tallent (START) */}
      <section className="container" style={{ marginBottom: "200px" }}>
        <div className="row justify-content-end">
          <div className="col-md-7 col-lg-6 col-sm-12 col-xs-12 d-flex flex-column justify-content-center order-2 order-md-1">
            <h2 className="d-block mt-5">Skill Tallent</h2>
            <p className="d-block mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>

            <div className="row">
              <div className="col-md-5">
                {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                  <div className="d-flex align-items-center mb-4" key={key}>
                    <img
                      src="/checklist-orange.svg"
                      style={{ marginRight: "20px" }}
                    />
                    <p className="mb-0">{item}</p>
                  </div>
                ))}
              </div>
              <div className="col-md-5" >
                {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"].map(
                  (item, key) => (
                    <div className="d-flex align-items-center mb-4" key={key}>
                      <img
                        src="/checklist-orange.svg"
                        style={{ marginRight: "20px" }}
                      />
                      <p className="mb-0">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-6 col-sm-12 col-xs-12 order-1 order-md-2">
          <div className="box-gray-3"></div>  
            <img src="/home-img-3.png" alt="Home Picture"   height={300}
                width={400} />
          </div>
        </div>
      </section>
      {/* Skill Tallent (END) */}

      
<Footer />

    </>
  );
}
