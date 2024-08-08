// Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.type';

const StyledButton = styled.button<{
  disabled: boolean;
  backgroundColor?: string;
  hoverColor?: string;
}>`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? props.backgroundColor || '#cccccc' : props.backgroundColor || '#007bff')};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => !props.disabled && (props.hoverColor || '#0056b3')};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, disabled = false, backgroundColor, hoverColor,  visible = true }) => {
  if (!visible) return null;

  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      
    >
      {label}
    </StyledButton>
  );
};

export default Button;
