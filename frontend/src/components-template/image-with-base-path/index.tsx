import { image_path } from "../../environment";
import React from "react";


interface Image {
  className?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  id?:string;
  style?: React.CSSProperties;
}

const ImageWithBasePath = (props: Image) => {
  // In Vite, files from public/ directory are served at the root URL
  // So public/assets/img/logo.svg is accessible at /assets/img/logo.svg
  let fullSrc: string;
  
  // If src already includes the full path starting with assets/img/, use it directly
  if (props.src.startsWith('assets/img/')) {
    fullSrc = `/${props.src}`;
  } else if (props.src.startsWith('/assets/img/')) {
    // Already has leading slash
    fullSrc = props.src;
  } else {
    // Otherwise, prepend image_path (which is /assets/img/)
    fullSrc = `${image_path}${props.src}`;
  }
  
  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
      style={props.style}
    />
  );
};

export default React.memo(ImageWithBasePath);
