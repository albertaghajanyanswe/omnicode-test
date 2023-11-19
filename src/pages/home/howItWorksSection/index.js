import HowItWorkItem from "./HowItWorkItem";
import './howItWork.css';

function HowItWorksSection() {
  const items = [
    {
      id: 1,
      class: "bg-5200FF",
      title: "Target Identification and Prioritization",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
    },
    {
      id: 2,
      class: "bg-00F0FF",
      title: "Target Identification and Prioritization",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
    },
    {
      id: 3,
      class: "bg-FF2DF7",
      title: "Target Identification and Prioritization",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
    },
  ];
  return (
    <div>
      <p className='section-title'>How it Works</p>
      <div className='howItWork-container'>
        {items.map((i) => (
          <HowItWorkItem detail={i} />
        ))}
      </div>
    </div>
  );
}

export default HowItWorksSection;
