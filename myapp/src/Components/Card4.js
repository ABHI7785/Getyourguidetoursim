import React from 'react';
import img1 from './images/Act1.webp';
import img2 from './images/Act2.webp';
import img3 from './images/Act3.webp';
import img4 from './images/Act4.webp';
import { Card } from 'react-bootstrap';

const Card4 = () => {
  const places = [
    { name: 'Mattanchery Palace', img: img1, act: '12 activities' },
    { name: 'ST Francis Church', img: img2, act: '5 activities' },
    { name: 'Cochin International Airport', img: img3, act: '3 activities' },
    { name: 'Chinese Fishing Nets', img: img4, act: '8 activities' },
  ];

  return (
<div className='headd'>
    <h2>TOP SIGHTS IN KERALA</h2>
    <div style={{ display: 'flex', gap: '20px',marginTop:'35px',marginLeft:'25px' }}>
      {places.map((data) => (
        <div key={data.name}>
          <Card className='cards' style={{ width: '18rem', borderRadius: '10px' }}>
            <Card.Img variant="top" src={data.img } className='hover-effect' />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.act}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card4;
