import React from "react";
import styled from "styled-components";
 
export interface ButtonProps {
    disabled?: boolean;
    label?: string;
    visible?: boolean;
    disabledBackgroundColor?: string;
}
 
const StyledButton = styled.button<{ disabled?: boolean; disabledBackgroundColor?: string }>`
    ${(props) =>
        props.disabled
            ? `background-color: ${props.disabledBackgroundColor || 'gray'};`
            : `background-color: blue;`}
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
 
const Button: React.FC<ButtonProps> = ({ disabled, label, visible = true, disabledBackgroundColor }) => {
    if (!visible) {
        return null;
    }
 
    return (
        <StyledButton disabled={disabled} disabledBackgroundColor={disabledBackgroundColor}>
            {label}
        </StyledButton>
    );
};
 
export default Button;
