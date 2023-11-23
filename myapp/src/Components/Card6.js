import React from "react";
import img1 from "./images/25.webp";
import img2 from "./images/26.webp";
import img3 from "./images/27.webp";
import img4 from "./images/28.webp";
import img5 from "./images/29.webp";
import { Card } from "react-bootstrap";

const Card6 = () => {
  const cardTitleStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    zIndex: "1",
  };

  const cardStyle = {
    width: "18rem",
    margin: "10px", 
    borderRadius: "10px", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
  };

  const data = [
    { name: "Boats & Yachts", img: img1 },
    { name: "Architecture", img: img2 },
    { name: "Sightseeing Cruises", img: img3 },
    { name: "Bus & Minivan Tours", img: img5 },
  ];

  return (
    <div className="card6-sec">
        <h2>Immersive Experiences</h2>
      {data.map((item) => (
        <div className="d-inline-flex" key={item.name}>
          <Card style={cardStyle}>
            <div style={{ position: "relative" }}>
              <Card.Img variant="top" src={item.img}  className="hover-effect"/>
              <Card.Title className="tit" style={cardTitleStyle}>
                {item.name}
              </Card.Title>
            </div>
            <Card.Body>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Card6;
