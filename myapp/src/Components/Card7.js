import React from 'react';
import { Card } from 'react-bootstrap';


const Card7 = () => {
  const imagess = [
    {
      src: "https://cdn.getyourguide.com/img/tour/647b3f6598a9a.jpeg/132.webp",
      name: "MULTI-DAY-TRIP",
      rupees: "From ₹ 5,800 per person"
    },
    {
      src: "https://cdn.getyourguide.com/img/tour/5b714f25c426c.jpeg/132.webp",
      name: "TRANSFER",
      rupees: "From ₹ 8,800 per person"
    },
    {
      src: "https://cdn.getyourguide.com/img/tour/5b56c7aa8b964.jpeg/132.webp",
      name: "DAY-TRIP",
      rupees: "From ₹ 6,800 per person"
    },
    {
      src: "https://cdn.getyourguide.com/img/tour/5b56f3203fd6c.jpeg/132.webp",
      name: "DAY-TRIP",
      rupees: "From ₹ 9,800 per person"
    }
  ];

  return (
    <div className='card7'>
        <h1>GO BEYOND KERALA</h1>
    <div className="card-container1"> {/* Apply flex layout */}
      {imagess.map((data, index) => (
        <div key={index} className="card-item"> {/* Apply flex item */}
          <Card style={{ width: '18rem' }}>
            <div className="image-container1">
              <Card.Img variant="top" src={data.src} />
              <div className="overlay"> {/* Hover effect */}
                <div className="text">{data.name}</div>
                <div className="text">{data.rupees}</div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.rupees}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card7;
