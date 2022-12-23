import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import rose from "./s.png"
import "./X.css"
function Caroussel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src={rose}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AX5400 Dual Band WiFi 6</h3>
          <p>
Boost Your Mobile Gaming</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://dlcdnimgs.asus.com/websites/global/products/g7ptpg4x2bkzebof/img/pc/BG-7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Remove Network Bottlenecks</h3>
          <p>WPA3 Security Protocol</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://dlcdnimgs.asus.com/websites/global/products/g7ptpg4x2bkzebof/img/pc/4-1-light.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
          The dedicated gaming port on RT-AX82U automatically prioritizes any wired device connected to it. No complex configuration is needed,  the queue. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}
export default Caroussel;