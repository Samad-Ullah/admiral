import Link from "next/link";
const mainPage = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Cities",
    url: "/cities/houston-limo-car-service",
  },
  {
    name: "Feets",
    url: "/fleet",
  },
  {
    name: "About",
    url: "/about-us",
  },
  {
    name: "Faq's",
    url: "/FAQ",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
];
const service = [
  {
    name: "Houston Airport Transportation",
    url: "/houston-airport-transportation",
  },
  {
    name: "George Bush Airport Transfer",
    url: "/airport-transportation/george-bush-airport-transfer",
  },
  {
    name: "Hobby Airport Transfer",
    url: "/airport-transportation/hobby-airport-transfer",
  },
  {
    name: "Private Aviation & Regional Airports",
    url: "/airport-transportation/private-jet-limo",
  },
  {
    name: "Galveston Cruise Transfer",
    url: "/services/galveston-cruise-transfer",
  },
  {
    name: "City to City Transfer",
    url: "/city-to-city-transfer",
  },
  {
    name: "Houston to College Station",
    url: "/city-to-city-transfer/houston-to-college-station",
  },
  {
    name: "Houston to Austin",
    url: "/city-to-city-transfer/houston-to-austin",
  },
  {
    name: "Houston to San Antonio",
    url: "/city-to-city-transfer/houston-to-san-antonio",
  },
  { historyPush: "/events", name: "Events Transfer" },
  {
    historyPush: "/events/business-event-transfer",
    name: "Business Conventions Transfer",
  },
  {
    historyPush: "/events/sport-events-transfer",
    name: "Sports Events Transfer",
  },
  {
    historyPush: "/events/concerts-transfer",
    name: "Concerts Transfer",
  },
  {
    historyPush: "/events/houston-rodeo-transfer",
    name: "Houston Rodeo Transfer",
  },
  {
    name: "Celebrations Transfer",
    url: "/celebrations",
  },
  {
    name: "Party Transfer",
    url: "/celebrations/party-transfer",
  },
  {
    name: "Graduation Transfer",
    url: "/celebrations/graduation-transfer",
  },
  {
    name: "Bachelor Party Transfer",
    url: "/celebrations/bachelor-party-transfer",
  },
];
const data = [
  {
    url: "/cities/houston-limo-car-service",
    name: "Houston Limo Car Service",
  },
  {
    url: "/cities/spring-limo-car-service",
    name: "Spring Limo Car Service",
  },
  {
    url: "/cities/fulshear-limo-car-service",
    name: "Fulshear Limo Car Service",
  },
  {
    url: "/cities/galveston-limo-car-service",
    name: "Galveston Limo Car Service",
  },
  {
    url: "/cities/montgomery-limo-car-service",
    name: "Montgomery Limo Service",
  },
  {
    url: "/cities/conroe-limo-car-service",
    name: "Conroe Limo Service",
  },
  {
    url: "/cities/tomball-limo-car-service",
    name: "Tomball Limo Service",
  },
  {
    url: "/cities/cypress-limo-car-service",
    name: "Cypress Limo Service",
  },
  {
    url: "/cities/beaumont-limo-car-service",
    name: "Beaumont Limo Service",
  },
  {
    url: "/cities/sugarland-limo-car-service",
    name: "Sugarland Limo Service",
  },
  {
    url: "/cities/richmond-limo-car-service",
    name: "Richmond Limo Service",
  },
  {
    url: "/cities/katy-limo-car-service",
    name: "Katy Limo Service",
  },
];
const SiteMap = () => {
  return (
    <div className="container-fuild bg-white p-4 m-3 border-rounded shadow">
      <h1>Sitemap</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h4 style={{ color: "#ee405e" }}>Main</h4>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {mainPage.map((url, index) => (
              <li key={index}>
                {url.url ? (
                  <Link
                    href={url.url}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {url.name}
                  </Link>
                ) : (
                  <span>{url.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#ee405e" }}>Service</h4>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {service.map((url, index) => (
              <li key={index}>
                {url.url ? (
                  <Link
                    href={url.url}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {url.name}
                  </Link>
                ) : (
                  <span>{url.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#ee405e" }}>Cities</h4>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {data.map((url, index) => (
              <li key={index}>
                {url.url ? (
                  <Link
                    href={url.url}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {url.name}
                  </Link>
                ) : (
                  <span>{url.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
