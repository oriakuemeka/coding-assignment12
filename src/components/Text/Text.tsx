import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps } from './Text.type';

// Define a new interface that excludes the 'content' prop
interface StyledTextProps extends Omit<TextProps, 'content'> {}

const getSize = (props: StyledTextProps) => {
  if (props.small) return '12px';
  if (props.medium) return '16px';
  if (props.large) return '20px';
  return '16px';
};

const responsiveSize = css<StyledTextProps>`
  @media (max-width: 768px) {
    font-size: ${(props) => {
      if (props.small) return '10px';
      if (props.medium) return '14px';
      if (props.large) return '18px';
      return '14px';
    }};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => {
      if (props.small) return '8px';
      if (props.medium) return '12px';
      if (props.large) return '16px';
      return '12px';
    }};
  }
`;

const StyledText = styled.span<StyledTextProps>`
  font-size: ${(props) => (props.disabled ? 'inherit' : getSize(props))};
  color: ${(props) => (props.disabled ? 'gray' : props.color || 'black')};
  font-weight: ${(props) => (props.disabled ? 'normal' : props.bold ? 'bold' : 'normal')};
  font-style: ${(props) => (props.disabled ? 'normal' : props.italic ? 'italic' : 'normal')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 4px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  ${(props) => !props.disabled && responsiveSize}
`;

const Text: React.FC<TextProps> = ({
  content = '',
  color,
  bold,
  italic,
  visible = true,
  disabled = false,
  backgroundColor,
  small,
  medium,
  large,
}) => {
  if (!visible) return null;
  return (
    <StyledText
      color={color}
      bold={bold}
      italic={italic}
      disabled={disabled}
      backgroundColor={backgroundColor}
      small={small}
      medium={medium}
      large={large}
    >
      {content}
    </StyledText>
  );
};

export default Text;
