import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './CarouselStyle.css'
const items = [
  {
    src: 'https://store-images.s-microsoft.com/image/apps.13367.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.f26b74f0-8b1f-41eb-a82f-06843ec33473',
    altText: 'The Best Games',
    caption: 'from Halo to Skyrim and everything in between!'
  },
  {
    src: 'https://image.freepik.com/vector-gratis/plantilla-diseno-cartel-anuncio-promocion-venta_53876-57885.jpg',
    altText: 'The best offers',
    caption: 'Go nuts with our prices!'
  },
  {
    src: 'https://image.freepik.com/vector-gratis/plantilla-diseno-cartel-anuncio-promocion-venta_53876-57888.jpg',
    altText: 'The best quality in the market',
    caption: '100% secure buying!'
  }
];

const CarouselComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem className='my-carousel-item'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className='carousel-item-img' src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className='my-carousel'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators className='my-carousel-indicators' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselComponent;