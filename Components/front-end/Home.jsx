/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import car1 from "../../Assets/car1.svg";
import car2 from "../../Assets/car2.svg";
import logo1 from "../../Assets/logo1.svg";
import logo2 from "../../Assets/logo2.svg";
import logo3 from "../../Assets/logo3.svg";
import sanitizeHTML from "../hero/SanitizedReactUtils";
import CustomerFeedBack from "./CustomerFeedBack";
import Faqs from "./components/Faqs";
import CardsSection1 from "./destinationCardsSection1";
import CardsSection2 from "./destinationCardsSection2";
import {
  fetchLimitedContent,
  fetchLimitedContent2,
  fetchLimitedContent3,
} from "./fetchLimitedContent";

const pStyle = {
  fontFamily: "ProximaNovaLight",
};
const card = [
  {
    title: "George Bush Airport ",
    description: "Book AAdmirals Houston car service for private rides ",
    link: "/airport-transportation/george-bush-airport-transfer",
  },
  {
    title: "Hobby Airport Car ",
    description: "All-inclusive price for private ride Airport transfer",
    link: "/airport-transportation/hobby-airport-transfer",
  },
  {
    title: "Private Jet Car Service ",
    description: "Your satisfaction is our goal, houston private aviation",
    link: "/airport-transportation/private-jet-limo",
  },
  {
    title: "Galveston Cruise Transfer",
    description: "Book your Galveston shuttle, Galveston transfer one-way",
    link: "/Car services/galveston-cruise-transfer",
  },
  {
    title: "Houston to College Station",
    description: "Houston ground shuttle to College station, Airport",
    link: "/city-to-city-transfer/houston-to-college-station",
  },
  {
    title: "Houston to Lake Jackson",
    description: "Houston airport transfer and airport shuttle to Lake ",
    link: "/city-to-city-transfer/houston-to-lake-jackson",
  },
  {
    title: "Houston to Victoria",
    description: "Houston car service, airport shuttle to Victoria, TX. ",
    link: "/city-to-city-transfer/houston-to-victoria",
  },
  {
    title: "Houston to Austin",
    description: "A group of friends, a big family Or one person, long trip?",
    link: "/city-to-city-transfer/houston-to-austin",
  },
  {
    title: "Houston to Dallas",
    description: "AAdmirals Travel& Transportation, Houston Limo Service",
    link: "/city-to-city-transfer/houston-to-dallas",
  },
  {
    title: "Houston to San Antonio",
    description: "AAdmirals Limo Service based in Houston, TX provides you",
    link: "/city-to-city-transfer/houston-to-san-antonio",
  },
  {
    title: "Houston to Lake Charles",
    description: "Pre booking Lake Charles premium chauffeured",
    link: "/city-to-city-transfer/houston-to-lakecharles",
  },
  {
    title: "Houston to Lafayette",
    description: "AAdmirals provide a private transfer- a private shuttle ",
    link: "/city-to-city-transfer/houston-to-lafayette",
  },
  {
    title: "Business Convertions ",
    description: "Leave all transportation worries to AAdmirals Houston ",
    link: "/events/business-event-transfer",
  },
  {
    title: "Sporting Events Transfer",
    description: "Want to go to one of Houston sporting big games?",
    link: "/events/sport-events-transfer",
  },
  {
    title: "Houston Concerts Transfer",
    description: "Go to the theater or music concert in style and comfort",
    link: "/events/concerts-transfer",
  },
  {
    title: "Houston Rodeo Transfer",
    description: "Let your family and friends enjoy the ride to Houston ",
    link: "/events/houston-rodeo-transfer",
  },
  {
    title: " Limo for Parties & Wedding",
    description: " AAdmirals Houston Limo Service is the best car service",
    link: "/celebrations/party-transfer",
  },
  {
    title: "Graduation Party Limo Service",
    description: "Our Executive Minibus Limo is here to make your graduation",
    link: "/celebrations/graduation-transfer",
  },
  {
    title: "Best Bachelor Party Limo",
    description: "he purpose of having a bachelorette party is to honor",
    link: "/celebrations/bachelor-party-transfer",
  },
];
const cardCities = [
  {
    title: "Houston Limo Car Services",
    description:
      "Private airport transfer, Private airport shuttle, City to city",
    link: "/cities/houston-limo-car-service",
  },
  {
    title: "Spring Limo Car Services",
    description:
      "Private airport transfer, Private airport shuttle, City to city",
    link: "/cities/spring-limo-car-service",
  },
  {
    title: "Fulshear Limo Car Services",
    description:
      "Private airport transfer, Private airport shuttle, City to city",
    link: "/cities/fulshear-limo-car-service",
  },
  {
    title: "Galveston Limo Car Services",
    description: "Offers Galveston ground transportation including Airport ",
    link: "/cities/galveston-limo-car-service",
  },
  {
    title: "Montgomery Limo Car Services",
    description: "We offer Airport transfer, By the Hour and City to City car ",
    link: "/cities/montgomery-limo-car-service",
  },
  {
    title: "Conroe Limo Car Services",
    description:
      "Airport transfer, By the Hour and City to City professional car ",
    link: "/cities/conroe-limo-car-service",
  },
  {
    title: "Tomball Limo Car Services",
    description:
      "Airport transfers, One way or return, Long-distance rides, by",
    link: "/cities/tomball-limo-car-service",
  },
  {
    title: "Cypress Limo Car Services",
    description:
      "Airport transfer, One way or return, Long-distance rides, by ",
    link: "/cities/cypress-limo-car-service",
  },
  {
    title: "Beaumont Limo Car Services",
    description: "Based in Houston, TX provides Airport transfer, By the Hour",
    link: "/cities/beaumont-limo-car-service",
  },
  {
    title: "Sugarland Limo Car Services",
    description: "We offer Airport transfer, By the Hour and City to City car ",
    link: "/cities/sugarland-limo-car-service",
  },
  {
    title: "Richmond Limo Car Services",
    description: "Based in Houston, TX provides Airport transfer, By the Hour",
    link: "/cities/richmond-limo-car-service",
  },
  {
    title: "Katy Limo Car Services",
    description: "We provide Airport transfer, By the Hour and City to City  ",
    link: "/cities/katy-limo-car-service",
  },
];

function Home({ serviceDetail }) {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(true);
  const [section3, setSection3] = useState(true);

  let sanitizedContentSection1 = sanitizeHTML(
    serviceDetail.firstSectionsDescription
  );
  let showLimitedContentSection1 = "";
  showLimitedContentSection1 = fetchLimitedContent(sanitizedContentSection1);
  const sectionContent = section1
    ? showLimitedContentSection1
    : sanitizedContentSection1;
  const handleSection = () => setSection1(false);

  let sanitizedContentSection2 = sanitizeHTML(
    serviceDetail.secondSectionDescription
  );
  let showLimitedContentSection2 = "";
  showLimitedContentSection2 = fetchLimitedContent2(sanitizedContentSection2);
  const sectionContent2 = section2
    ? showLimitedContentSection2
    : sanitizedContentSection2;
  const handleSection2 = () => setSection2(false);

  let sanitizedContentSection3 = sanitizeHTML(
    serviceDetail.thirdSectionDescription
  );
  let showLimitedContentSection3 = "";
  showLimitedContentSection3 = fetchLimitedContent3(sanitizedContentSection3);
  const sectionContent3 = section3
    ? showLimitedContentSection3
    : sanitizedContentSection3;
  const handleSection3 = () => setSection3(false);
  const visible = () => {
    if (section1) {
      return (
        <span
          onClick={handleSection}
          style={{ color: "blue" }}
          className="hoverEffect ">
          Read More
        </span>
      );
    }
    return null;
  };
  const visible2 = () => {
    if (section2) {
      return (
        <span
          style={{ color: "blue" }}
          onClick={handleSection2}
          className="hoverEffect ">
          Read More
        </span>
      );
    }
    return null;
  };
  const visible3 = () => {
    if (section3) {
      return (
        <span
          onClick={handleSection3}
          style={{ color: "blue" }}
          className="hoverEffect ">
          Read More
        </span>
      );
    }
    return null;
  };

  const details = useSelector((state) => state.contactDetails);
  const { contact_details_page } = details;
  const det = contact_details_page && contact_details_page.contactDetails[0];

  const router = useRouter();
  const currentUrl = router.asPath;
  const currentLocation = currentUrl.split("/");

  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <div className="content">
            <div>
              <h3>
                {serviceDetail.metaTitle ||
                  "AAdmirals Travel & Transportation Houston Limo Service"}
              </h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: serviceDetail.metaDescription,
              }}></div>
          </div>
        </div>
        <div className="icons-container">
          <div className="icons">
            <Image
              src={logo1}
              alt="Aadmirals dollar icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>
                Always on time for your pick-Up, 60 minutes free of charge wait
                time for international flights, 30 minutes for domestic, and 15
                minutes for others.
              </p>
            </div>
          </div>
          <div className="icons">
            <Image
              src={logo2}
              alt="Aadmirals clock icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>
                Private Travel Solutions In Houston one-way, round trip airport
                transfer, point to point, by the hour, long-distance rides city
                to city based on your time.
              </p>
            </div>
          </div>
          <div className="icons">
            <Image
              src={logo3}
              alt="Aadmirals car icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>
                All inclusive- price professional car service in Houston with no
                hidden charges, pay what you see
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section02">
        <div className="section02-container">
          <div className="content-container1">
            <div className="content-top">
              <h5>STRESS-FREE IAH AIRPORT TRANSPORTATION</h5>
            </div>
            <div>
              <h3>{serviceDetail.firstSectionsTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: sectionContent,
              }}></div>
            {visible()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
          <div className="image-container1">
            <div className="img-left">
              <img
                src={serviceDetail.firstImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="img-back-right"></div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="container2">
          <div className="image-container22">
            <div className="img-right">
              <img
                src={serviceDetail.secondImage || car2}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div
              className="img-back-left"
              style={{ backgroundColor: "#ef4a67" }}></div>
          </div>
          <div className="content-container22">
            <div>
              <h3>{serviceDetail.secondSectionTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: sectionContent2,
              }}></div>
            {visible2()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="section3-container">
          <div className="content-container1">
            <div className="content-top">
              <h5>airport with AAdmirals</h5>
            </div>
            <div>
              <h3>{serviceDetail.thirdSectionTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: sectionContent3,
              }}></div>
            {visible3()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
          <div className="image-container1">
            <div className="img-left">
              <img
                src={serviceDetail.thirdImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="img-back-right"></div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="cardsContainer">
          <div className="content-container">
            <div
              className="cardContent"
              style={{
                paddingBottom: "1%",
              }}>
              <div>
                <h3 className="cards-heading">
                  {currentLocation[1] === "cities"
                    ? "Popular Cities"
                    : "Popular Destnations"}
                </h3>
              </div>
              <div>
                <p className="cards-content">TO & FROM THE AIRPORT</p>
              </div>
            </div>
          </div>
          <div className="cardsParentContainer">
            {currentLocation[1] === "cities" ? (
              <CardsSection1 data={cardCities} />
            ) : (
              <CardsSection1 data={card} />
            )}
          </div>
        </div>
      </section>

      <section className="update-section5">
        <div className="updatecard-container">
          <CardsSection2 />
        </div>
      </section>
      <section className="section4">
        <div className="cardsContainer">
          <div className="content-container">
            <div
              className="cardContent"
              style={{
                paddingBottom: "1%",
              }}>
              <div>
                <h3 className="cards-heading">
                  {currentLocation[1] !== "cities"
                    ? "Popular Cities"
                    : "Popular Destnations"}
                </h3>
              </div>
              <div>
                <p className="cards-content">TO & FROM THE AIRPORT</p>
              </div>
            </div>
          </div>
          <div className="cardsParentContainer">
            {currentLocation[1] !== "cities" ? (
              <CardsSection1 data={cardCities} />
            ) : (
              <CardsSection1 data={card} />
            )}
          </div>
        </div>
      </section>

      <section className="section8">
        <div className="customer-container">
          <center
            style={{
              paddingBottom: "1%",
            }}>
            <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
          </center>
          <CustomerFeedBack />
        </div>
      </section>

      <section className="faqs-section">
        <div className="faqs">
          <h2>Frequently Ask Questions</h2>
          <p>
            At Upstart, we pride ourselves on offering exceptional customer
            experiences for every client that walks through our doors.
          </p>
        </div>
        <Faqs />
      </section>
    </>
  );
}

export default Home;
