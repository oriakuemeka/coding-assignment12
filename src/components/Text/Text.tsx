import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${(props) => (props.size === 'small' ? '12px' : props.size === 'medium' ? '16px' : '20px')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  color: ${(props) => (props.disabled ? 'grey' : 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? props.disabledBgColor : 'transparent')};
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Text: React.FC<TextProps> = ({ size, bold, underline, disabled, disabledBgColor, visible, children }) => {
  return (
    <StyledText size={size} bold={bold} underline={underline} disabled={disabled} disabledBgColor={disabledBgColor} visible={visible}>
      {children}
    </StyledText>
  );
};

export default Text;
