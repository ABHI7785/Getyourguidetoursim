import React from "react";
import img1 from "./images/10.webp";
import img2 from "./images/11.webp";
import img3 from "./images/12.webp";
import img4 from "./images/13.webp";
import img5 from "./images/14.webp";
import img6 from "./images/15.webp";
import img7 from "./images/16.webp";
import img8 from "./images/19.webp";
import img9 from "./images/20.webp";
import img10 from "./images/21.webp";
import img11 from "./images/22.webp";
import img12 from "./images/24.webp";
import img13 from "./images/top-act-1.png";
import img14 from "./images/top-act-2.png";
import img15 from "./images/top-act-3.png";
import img16 from "./images/top-act-4.png";
import { Button, Card } from "react-bootstrap";

const Card5 = () => {
  const datas = [
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img1,
    },
    {
      name: "DAY TRIP",
      desc: "Wayanad Backwater",
      act: "10 activities",
      rupees: "From ₹ 3,800 per person",
      img: img2,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img3,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img4,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img5,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img6,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img7,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img8,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img9,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img10,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img11,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img12,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img3,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img14,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img15,
    },
    {
      name: "MULTI DAY TRIP",
      desc: "Alappuzha Backwater",
      act: "12 activities",
      rupees: "From ₹ 5,800 per person",
      img: img16,
    },
  ];
  return (
    <div className="card-container">
      {datas.map((data) => {
        return (
          <div className="card-wrapper">
            <Card className="crad-6" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.img} className="hover-effect" />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
                <Card.Text>{data.act}</Card.Text>
                <Card.Text>{data.rupees}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Card5;
