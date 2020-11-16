import React from 'react';
import { IDataSettings } from './Settings';
import { SliderSettings } from './SettingsAction/SliderSettings';

type TProps ={
    setDataSettings: React.Dispatch<React.SetStateAction<IDataSettings>>
}

export const SideBar:React.FC<TProps> = ({setDataSettings}) => {
    const changeContent = (link:string) => {
        switch(link){
            case 'slider':
                setDataSettings(prev=>({
                    ...prev,
                    component: <SliderSettings/>
                }))
        }
    }

    return <div className="side-bar">
            <ul>
                <li><p>Настройка слайдера</p></li>
            </ul>
        </div>
}