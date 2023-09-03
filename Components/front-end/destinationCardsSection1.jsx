import React from "react";

function getRandomItems(arr) {
  const items = [];
  const len = arr.length;

  while (items.length < 8) {
    const randomIndex = Math.floor(Math.random() * len);
    const randomItem = arr[randomIndex];

    if (!items.includes(randomItem)) {
      items.push(randomItem);
    }
  }

  return items;
}

const CardsSection1 = ({ data }) => {
  const randomData = getRandomItems(data);

  return (
    <>
      {randomData.map((item) => (
        <div className="cards1" key={item.id}>
          <a href={item.link}>
            <h4>{item.title}</h4>
          </a>
          <p>{item.description}</p>
          <a href={item.link}>
            <button>
              Book Now
              <span className="right-arrow"> &#8594;</span>
            </button>
          </a>
        </div>
      ))}
    </>
  );
};

export default CardsSection1;
