import { request } from '../../../api/index';
import React, { FormEvent, useEffect, useState } from 'react';

type TProps = {
    close: any
}

export const AddImageSlider:React.FC<TProps> = ({close}) => {
    const [link, setLink] = useState('');
    const [reload, setReload] = useState(false);

    useEffect(() => {
        if(reload) window.location.reload()
    }, [reload]);

    const chanageHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let value = e.currentTarget.value
        setLink(value)
    }
    const addImageHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        request({
            method:'POST',
            url:'slider/addImage',
            data: {srcImage:link}
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setReload(true)
    }

    return (
        <>
        <div className="bg-lock"></div>
        <div className="main-pop-up">
            <h5>Вставте ссылку на изображение</h5>
            <form onSubmit={addImageHandler}>
                <input type="text" onChange={chanageHandler}/>
                <button type='submit'>Добавить</button>
            </form>

        </div>

        </>
    )
}