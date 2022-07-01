import React, { useState } from 'react';

export const ProductImgSlider = ({ imgs = [] }) => {  //eslint-disable-line
  const [img, setImg] = useState(0);
  return (
    <div className='w-fit flex flex-col items-center'>
      <img
        className='  w-[90vw] h-[50vh] lg:h-[50vh] lg:w-[50vw] xl:w-[35vw] xl:h-[60vh] object-cover '
        src={imgs[img]}
        alt='product'
      />
      <div className='flex pt-4'>
        {imgs.map((el) => {
          return (
            <img
              key={imgs.indexOf(el)}
              onClick={() => setImg(imgs.indexOf(el))}
              className={`cursor-pointer w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] object-cover ${
                imgs.indexOf(el) === img ? 'opacity-90' : 'opacity-50'
              }`}
              src={el}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
};
