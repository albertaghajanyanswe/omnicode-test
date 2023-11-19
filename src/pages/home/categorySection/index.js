import { ReactComponent as Rect1 } from "../../../assets/categories/rect1.svg";
import { ReactComponent as Rect2 } from "../../../assets/categories/rect2.svg";
import { ReactComponent as Rect3 } from "../../../assets/categories/rect3.svg";
import CustomCard from "../../../components/customCard";
import './category.css';

function CategorySection() {
  const items = [
    {
      id: 1,
      icon: <Rect1 />,
      title: "Development & IT",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#00f0ff'
    },
    {
      id: 2,
      icon: <Rect2 />,
      title: "AI services",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#5200ff'

    },
    {
      id: 3,
      icon: <Rect3 />,
      title: "Design & Creative",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#ff2df7'
    },
    {
      id: 4,
      icon: <Rect1 />,
      title: "Development & IT",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#00f0ff'
    },
    {
      id: 5,
      icon: <Rect2 />,
      title: "AI services",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#5200ff'
    },
    {
      id: 6,
      icon: <Rect3 />,
      title: "Design & Creative",
      info: `Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify.`,
      color: '#ff2df7'
    },
  ];
  return (
    <div className="category-section">
      <p className="category-section-title">Browse expert by category</p>
      <div className="flex-wrapper">
        {items.map((i) => (
          <div className="flex-item">
            <CustomCard detail={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
