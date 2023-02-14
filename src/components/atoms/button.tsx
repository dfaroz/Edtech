import React from 'react';
import { Button as BSButton } from 'react-bootstrap';

const Button: React.FC<{ 
  text: string, 
  onClick: () => void 
}> = ({ text, onClick }) => (
  <BSButton onClick={onClick} variant="link" className='btn btn-outline-info' href=''>
    <small className='text-warning text-center'>{text}</small>
  </BSButton>
);

export default Button;
