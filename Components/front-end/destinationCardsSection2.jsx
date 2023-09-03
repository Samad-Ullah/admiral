/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import car from "../../Assets/card image.svg";
import useFeets from "./hooks/useFeet.ts";
import { useRouter } from "next/router";

const CardsSection2 = () => {
  const router = useRouter();
  const { feets } = useFeets();

  const navigateToHomeBookingPage = () => {
    router.push("/");
  };
  return (
    <>
      {feets &&
        feets.map((item, index) => (
          <div className="updatechild-container" key={index}>
            <div className="image-container">
              <img
                src={item.image || car}
                layout="fixed"
                className="card-image"
                alt="limousine car image"
                loading="lazy"
              />
            </div>
            <div>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <div className="card-inner">
                {/* <span style={{ display: "flex", gap: "62px" }}>
                  <span
                    style={{
                      color: "#ef4a67",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    ${item.pricePerHour}
                    <span style={{ fontWeight: "400" }}> / per hour</span>
                  </span>
                  <span className="stars">
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                  </span>
                </span> */}

                <span
                  style={{ display: "flex", alignItems:"center" , gap: "10px" }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                    By the Hour Service
                  </span>
                  <span
                    style={{
                      color: "#ef4a67",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    ${item.pricePerHour}
                    
                  </span>
                  <span className="stars">
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                    <img src="../../Assets/Polygon 20.png" />
                  </span>
                </span>
                <button onClick={navigateToHomeBookingPage}>
                  Book Now
                  <span className="right-arrow"> &#8594;</span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardsSection2;
