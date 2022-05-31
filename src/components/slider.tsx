import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <Carousel
        updateOnItemClick
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: 'blue'
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span style={{color: '#000000', fontSize: 40}}>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span style={{color: '#000000', fontSize: 40}}>{`<`}</span>,
        }}
        itemsToShow={3}
        speed={400}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <div
            style={{
              background: 'red',
              width: 300,
              height: 300,
              border: '30px solid white',
              textAlign: 'center',
              lineHeight: '240px',
              boxSizing: 'border-box'
            }}
            key={index}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;