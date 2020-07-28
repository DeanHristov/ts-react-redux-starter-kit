import React, { FunctionComponent } from 'react';

export interface IButtonProps {
  title: string;
  type: string;
  className?: string;
  onClick?: () => void;
}

import './styles.scss';
const Button: FunctionComponent<IButtonProps> = ({title, type, className, onClick}) => {

  return (
    <button type="button" onClick={onClick} className={`btn ${type} ${className}`}>{title}</button>
  )
}

export default Button;
