import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "./ui/button";

const SliderButtons = ({ contaierStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={contaierStyles}>
      <Button
        aria-label="previous"
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
      >
        <PiCaretLeftBold className={iconStyles} />
      </Button>
      <Button
        aria-label="next"
        onClick={() => swiper.slideNext()}
        className={btnStyles}
      >
        <PiCaretRightBold className={iconStyles} />
      </Button>
    </div>
  );
};

export default SliderButtons;
