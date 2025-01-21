"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderButtons = ({ contaierStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={contaierStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button onClick={() => swiper.slideNext()} className={btnStyles}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default SliderButtons;
