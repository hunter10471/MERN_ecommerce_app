import React, { useEffect, useRef, useState } from 'react';
import noImg from '../images/no-image.png';


const registerObserver  = (ref, setShowImg) => {
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        return;
      }
      setShowImg(true);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

export const LazyImage = ({src, classes}) => {  //eslint-disable-line
  const [showImg, setShowImg] = useState(false);
  const imgRef = useRef();

  useEffect(()=>{
    registerObserver(imgRef.current, setShowImg);
  },[]);

  if(showImg){
    return <img src={src} className={classes}
      alt='product' />;
  }
  return (
    <img ref={imgRef} src={noImg} className={classes} />
  );
};
