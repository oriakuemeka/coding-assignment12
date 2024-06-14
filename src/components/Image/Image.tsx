// Image.tsx
import React from 'react';
import { CardProps } from './card.types'; // Update the import statement

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isVisible?: boolean;
  backgroundColor?: string;
  isPrimary?: boolean;
  isDisabled?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  isVisible = true,
  backgroundColor,
  isPrimary,
  isDisabled,
}) => {
  if (!isVisible) {
    return null;
  }

  const style = {
    backgroundColor: isPrimary ? 'blue' : backgroundColor || 'transparent',
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
    opacity: isDisabled ? 0.5 : 1,
    filter: isDisabled ? 'grayscale(100%)' : 'none',
    pointerEvents: isDisabled ? 'none' : 'auto',
  };

  return <img src={src} alt={alt} style={style} />;
};

export default Image;
export type { ImageProps };
