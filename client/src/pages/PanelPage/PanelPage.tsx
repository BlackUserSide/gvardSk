import React from 'react';
import { LogOut } from '../../components/PanelPageComposition/LogOut';
import { PanelSelectAction } from '../../components/PanelPageComposition/PanelSelectAction';
import  './panelpage.sass';

export const PanelPage:React.FC  = () => {
    return <div className="main-panel-page">
        <LogOut/>
        <PanelSelectAction/>
    </div>
}