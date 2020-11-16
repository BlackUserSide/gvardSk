
import React from 'react';
import { request } from '../../../api';



type Tprops = { 
    content: {
        _id: string;
        image: string;
    }
}

export const ItemSlider:React.FC<Tprops> = ({content}) => {
    const dellHandler = () => {
        const id : string = content._id
        request({
            method: 'DELETE',
            url: `/slider/dell/${id}`
        }).then(res => console.log(res)
        ).catch(err => console.log(err)
        )
    }
    return(
        <div className="item-slider">
            <div className="image-wrapper-slide-settings" style={{backgroundImage: `url(${content.image})`}}></div>
            <span className="dell-wrapper" onClick={dellHandler}>X</span>
        </div>

    )
}