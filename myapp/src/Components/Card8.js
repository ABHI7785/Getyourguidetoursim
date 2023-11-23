import React from 'react';
import { Card } from 'react-bootstrap';

const Card8 = () => {
  const datazz = [
    { src: "https://cdn.getyourguide.com/img/tour/5d61265520a91.jpeg/97.webp", name: "Cochin: Half-Day Backwater Village Eco Boat Cruise W/ Lunch", desc: "The tour starts with a pickup from a meeting point in Fort Cochin at 8:30 AM. Drive to a village just outside Cochin City to board a traditional covered country boat. The boats have a capacity for about 20 people" },
    { src: "https://cdn.getyourguide.com/img/tour/5d876ba925fc7.jpeg/97.webp", name: "From Kochi: 2-Day Alappuzha Backwaters Houseboat Cruise", desc: "Alappuzha is a landmark between the broad Arabian Sea and the web of rivers flowing into it. It is a town in the Alappuzha District in the southern Indian state of Kerala." },
    { src: "https://cdn.getyourguide.com/img/tour/50cb571df411a.jpeg/97.webp", name: "3. Alleppey / Alappuzha Backwater Canoe (Shikara) Cruise", desc: "Alleppey also called Venice of the East is an important tourist destination in India. The Backwaters of Alleppey are the most popular tourist attraction in Kerala." },
    { src: "https://cdn.getyourguide.com/img/tour/5f61ed406dae1.jpeg/97.webp", name: "4. Kochi: Private Tuk-Tuk City Tour with Hotel Pickup", desc: "Travel to the spice markets and learn about Kochi’s central role in the Indian spice trade for many centuries and its popularity by foreign traders" },
    { src: "https://cdn.getyourguide.com/img/tour/5976f106db741.jpeg/97.webp", name: "Munnar Private Day Trip", desc: "Munnar is a hill station that is known for its vast tea plantations and natural beauty. It was once a favorite summer retreat for British colonials." },
    { src: "https://cdn.getyourguide.com/img/tour/5b7d0f3b8b8db.jpeg/97.webp", name: "6. Kerala: 4-Day Tour with Tree House Stay", desc: "Alleppey also called Venice of the East is an important tourist destination in India. The Backwaters of Alleppey are the most popular tourist attraction in Kerala" }
  ];

  return (
    <div className='card88'>
        <h2>Our Most Recommended Things To Do In Kerala</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px',paddingBottom:"85px",paddingLeft:"130px" }}>
      {datazz.map((data) => (
        <Card key={data.name} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.src}  className='hover-effect'/>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.desc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>



    </div>
    
  );
};

export default Card8;
