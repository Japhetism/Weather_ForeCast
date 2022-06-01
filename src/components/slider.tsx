import React, { useState } from 'react';
import Carousel from 'react-simply-carousel';

interface Props {
  data: any;
  unit: string|undefined;
  startSlide: number;
}

const Slider = ({ data, unit, startSlide }: Props) => {
  const [activeSlide, setActiveSlide] = useState(startSlide);
  return (
    <div>
      <Carousel
        updateOnItemClick
        activeSlideIndex={activeSlide}
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
        {data.map((item:any, index:any) => (
          <div
            style={{
              background: '#E8E8E8',
              width: 300,
              height: 300,
              border: '30px solid white',
              textAlign: 'left',
              boxSizing: 'border-box'
            }}
            key={index}
          >
            <div style={{marginTop: '120px', marginLeft: "20px"}}>
              <div style={{fontSize: '25px', fontWeight: 'bold'}}>Temp: {item!.main!.temp} {unit}</div>
              <div>Day: {item!.date}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;