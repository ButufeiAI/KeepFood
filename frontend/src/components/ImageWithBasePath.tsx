import React from "react";

interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  id?: string;
}

const ImageWithBasePath = (props: ImageProps) => {
  // Use the src directly or prepend base path if needed
  let fullSrc = props.src;
  
  if (!props.src.startsWith('http') && !props.src.startsWith('/')) {
    // Try to find in public assets first
    if (props.src.startsWith('assets/')) {
      fullSrc = `/${props.src}`;
    } else {
      // Fallback to src/assets-template
      fullSrc = `/src/assets-template/${props.src}`;
    }
  }
    
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
    />
  );
};

export default React.memo(ImageWithBasePath);
