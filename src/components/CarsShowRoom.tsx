import React, { useEffect, useState } from "react";
import CarsData from "../api/cars.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarItems from "./CarItems";
import { ICar } from "../utils/cars";

import { THOUSAND, THREE_THOUSAND_TWENTY_FOUR } from "../utils/constants";
import { responsive } from "../utils/ResponsiveDesign";

const CarsShowRoom = () => {
  const [data, setData] = useState<ICar[]>([]); // storing data
  const [showDots, setShowDots] = useState(false); // hide dots for large screen

  const layoutResize = () => {
    // on window resize and shows dots only for small screen
    if (window.innerWidth > THREE_THOUSAND_TWENTY_FOUR) setShowDots(false);
    else setShowDots(true);
  };

  useEffect(() => {
    setData(CarsData);
    layoutResize();
    window.addEventListener("resize", layoutResize);
    return () => {
      window.removeEventListener("resize", layoutResize);
    };
  }, []);

  return (
    <>
      {data && data.length > 0 && (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={showDots}
          responsive={responsive}
          ssr={true} // Render carousel on server-side.
          infinite={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={THOUSAND}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
        >
          {data.map((data: ICar, index: number) => {
            return <CarItems key={index} data={data} />;
          })}
        </Carousel>
      )}
    </>
  );
};
export default React.memo(CarsShowRoom);
