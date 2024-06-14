import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.div<SectionProps>`
  background-color: ${(props) => (props.disabled ? props.disabledBgColor : 'blue')};
  padding: 20px;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Section: React.FC<SectionProps> = ({ disabled, disabledBgColor, visible, children }) => {
  return (
    <StyledSection disabled={disabled} disabledBgColor={disabledBgColor} visible={visible}>
      {children}
    </StyledSection>
  );
};

export default Section;
