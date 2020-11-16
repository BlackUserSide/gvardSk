import React,{useState} from 'react';
import { SliderSettings } from './SettingsAction/SliderSettings';
import { SideBar } from './SideBar';

export interface IDataSettings {
    component: any
}

export const Settings:React.FC = () => {
    const [dataSettings, setDataSettings] = useState<IDataSettings>({
        component: <SliderSettings/>
    }
    );
    return <div className="main-settings-wrap">
        <SideBar setDataSettings={setDataSettings}/>
        <div className="content">
            {dataSettings.component}
        </div>
    </div>
}
