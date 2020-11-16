

import React, { useEffect, useState } from 'react';
import { request } from '../../../api';
import { AddProductPage } from '../../../pages/AddProductPage/AddProductPage';
import { AddImageSlider } from './AddImageSlider';
import { ItemSlider } from './IItemSlider';
type TStateSlider = {
    _id: string;
    image: string;
  };
export const SliderSettings:React.FC = () => {
    const [sliderData,setSliderData] = useState<Array<TStateSlider>>([])
    const [status,setStatus] = useState(false)

    useEffect(() => {
        request({
            method: "GET",
            url: "/slider",
          })
            .then((res) => {
              if (res) {
                  console.log(res);
                  
                setSliderData(res.data);
              }
            })
      
            .catch((err) => console.log(err));
    }, []);
    
    
    return <>
        <div className="slider-content">
            <div className="slider-item-wrapper">
                {sliderData.map((e, i)=> (
                    <ItemSlider content={e} key={i} />
                ))}
                <div className="wrapper-add-slide" onClick={()=>setStatus(true)}>
                    <span>+</span>
                </div>
            </div>
            {status?<AddImageSlider close={()=>setStatus(false)}/>:''}
        </div>
    </>
}