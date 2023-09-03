import NotFound from "../Components/404/NotFound";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SideNav from "../Components/Header/SideNav/SideNav";
import Floatingbutton from "../Components/floaingbutton/floatingbutton";
import CardsSection1 from "../Components/front-end/destinationCardsSection1";
import { Container, Col, Row, CardBody, Button, Card } from "reactstrap";

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

export default function Custom404() {
  return (
    <div style={{ overflow: "hidden" }}>
      <SideNav />
      <Floatingbutton />
      <Header />
      <Container>
        <NotFound />
        <Card style={{ padding: "3rem" }}>
          <label>Please explore some of best services</label>
          <div className="cardsParentContainer">
            <CardsSection1 data={card} />
          </div>
        </Card>
      </Container>
    </div>
  );
}
