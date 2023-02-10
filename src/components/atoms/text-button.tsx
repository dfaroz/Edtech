import React from 'react';
import { Button } from 'react-bootstrap';

const TextButton: React.FC<{ 
  text: string, 
  onClick: () => void 
}> = ({ text, onClick }) => (
  <Button onClick={onClick} variant="link">
    <small className='text-warning'>{text}</small>
  </Button>
);

export default TextButton;
