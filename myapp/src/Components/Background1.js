import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Background1 = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
  };
  return (
    <div className='bg_sec'>
     <div className='wrap_sec'>
        
        <FiSearch className='search-icon' />
        <input type='text' placeholder="Login" id='search' />
    
    </div> 
    <div className='date_sec'>
    <input
            type="text"
            placeholder="Add Dates"
            id="search"
            onClick={handleDateClick}
          />
          {showCalendar && <Calendar />}

    </div>
   
        
        <h3>Things to do in</h3>
        <h1> Kerala</h1>

    </div>
  )
}

export default Background1