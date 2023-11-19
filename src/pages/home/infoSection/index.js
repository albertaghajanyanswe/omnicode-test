import logo from "../../../assets/logo.png";
import { ReactComponent as LogoSVG } from "../../../assets/logoSVG.svg";
import './info.css';

function InfoSection() {
  return (
    <div className="info-section">
      <img src={logo} alt="First slide" />
      {/* <div><LogoSVG style={{ position: 'absolute', left: 0 }}/></div> */}
      <div className='info-section_right'>
        <p className='info-section_item-title'>The brains behind this</p>
        <p className='info-section_item-info'>
          Our mission at <span className='ai'>Experts.ai</span> is to bridge the gap between visionary
          businesses and exceptional AI talent. We believe that AI has the
          potential to revolutionize industries and create unprecedented value,
          but only when placed in the hands of those who truly understand its
          complexities and capabilities. We strive to facilitate collaborations
          that yield not only groundbreaking technological advancements but also
          foster learning and growth for both our clients and experts.
        </p>
        <p className='info-section_item-info'>
          We pride ourselves on being more than just a platform – we're a
          community where brilliance converges. Our platform serves as a hub
          where businesses seeking AI expertise can seamlessly connect with a
          curated network of AI specialists, data scientists, machine learning
          engineers, and visionaries. We meticulously vet our experts, ensuring
          that only the most accomplished and forward-thinking minds become part
          of the Experts.ai community.
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
