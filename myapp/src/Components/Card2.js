import React from "react";
import img1 from "./images/top-act-1.png";
import img2 from "./images/top-act-2.png";
import img3 from "./images/top-act-3.png";
import img4 from "./images/top-act-4.png";
import { Card } from "react-bootstrap";

const Card2 = () => {
  const imagess = [
    {
      Name: "WATER ACTIVITY",
      desc: "Alappuzha Backwater",
      image: img1,
      rupees: "From ₹ 5,800 per person ",
    },
    {
      Name: "PRIVATE TOUR",
      desc: "Cochin Backwater",
      image: img2,
      rupees: "From ₹ 6,800 per person ",
    },
    {
      Name: "DAY TRIP",
      desc: "Munnar Private Day Trip",
      image: img3,
      rupees: "From ₹ 4,800 per person ",
    },
    {
      Name: "PRIVATE TOUR",
      desc: "Vembanadu Lake",
      image: img4,
      rupees: "From ₹ 11,800 per person ",
    },
  ];
  return (
    <div className="card2">
      {imagess.map((data) => {
        return (
          <>
            <div className="d-inline-flex">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.desc}</Card.Title>
                  <Card.Text>{data.Name}</Card.Text>
                  <Card.Text>{data.rupees}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card2;
