import React from 'react';
import { Settings } from '../../components/SettingsComposition/Settings';
import './settings.sass'

export const SettingsPage:React.FC = () => {
    return <div className="main-settings-page">
        <Settings/>
    </div>
}