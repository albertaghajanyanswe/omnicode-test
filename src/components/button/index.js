import classNames from "classnames";
import { Button } from "react-bootstrap";
import './button.css';

function CustomButton({ title, variant, btnType, onCLick, customClassName }) {
  return <button variant={variant} className={classNames('custom-btn', `${customClassName}`, (btnType === 'primary' ? 'primary-btn' : 'secondary-btn'))}>{title}</button>;
}

export default CustomButton;