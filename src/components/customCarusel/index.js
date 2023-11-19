import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { ReactComponent as LeftSVG } from "../../assets/left.svg";
import { ReactComponent as RightSVG } from "../../assets/right.svg";
import "./carusel.css";
import frame from '../../assets/frame.png';
import frame2 from '../../assets/frame2.png';

function CustomCarusel({ caruselItems }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carusel-root">
      <img className="carusel-bg" src={frame} alt="bg1"/>
      <img className="carusel-bg" src={frame2} alt="bg2" />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        prevIcon={<LeftSVG />}
        nextIcon={<RightSVG />}
      >
        {caruselItems.map((i) => (
          <Carousel.Item className="carusel-item">
            <img className="carusel-img" src={i.img} alt="First slide" />
            <div className="carusel-info-block">
              <h3 className="carusel-info-block-title">{i.title}</h3>
              <p className="carusel-info-block-desc">{i.desc}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarusel;
