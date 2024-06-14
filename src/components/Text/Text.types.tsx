export interface TextProps {
    size: 'small' | 'medium' | 'large';
    bold?: boolean;
    underline?: boolean;
    disabled?: boolean;
    disabledBgColor?: string;
    visible?: boolean;
    children: React.ReactNode;
  }
  