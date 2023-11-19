import CustomButton from "../../../components/button";
import CustomCarusel from "../../../components/customCarusel";
import img from "../../../assets/image.png";
import "./expert.css";

function ExpertSection() {
  const items = [
    { id: 1, img: img, title: "Jane Doe", desc: "Javascript developer" },
    { id: 2, img: img, title: "Jane Doe 1", desc: "Javascript developer" },
    { id: 3, img: img, title: "Jane Doe 2", desc: "Javascript developer" },
  ];

  return (
    <div className="expert-section">
      <div className="left">
        <p className="big-text">Make bright ideas happen</p>
        <p className="normal-text">Brief description of the platform</p>
        <div style={{ display: 'flex', marginTop: "44px" }}>
          <CustomButton
            customClassName="mr-20"
            btnType="primary"
            title="Browse Experts"
          ></CustomButton>
          <CustomButton
            btnType="secondary"
            variant="outline-light"
            title="Register as Expert"
          ></CustomButton>
        </div>
      </div>
      <div className="right">
        <div className="carusel-header">
          <p className="carusel-title">AI expert</p>
          <div className="indicator-block">
            <div className="color1" />
            <div className="color2" />
            <div className="color3" />
          </div>
        </div>
        <CustomCarusel caruselItems={items} />
      </div>
    </div>
  );
}

export default ExpertSection;
