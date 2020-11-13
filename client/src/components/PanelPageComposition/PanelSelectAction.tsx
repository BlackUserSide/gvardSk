import React from 'react';
import { useHistory } from 'react-router-dom';

export const PanelSelectAction:React.FC = () => {
    let history = useHistory()
    const actionHandler = (link:string)=>{
         history.push(link)
    }
    return (
        <div className="main-panel-select">
            <div className="item" onClick={(e)=>actionHandler('/orders')}><h5>Заказы</h5></div>
            <div className="item" onClick={(e)=>actionHandler('/addproduct')}><h5>Добавить товар</h5></div>
            <div className="item" onClick={(e)=>actionHandler('/settings')}><h5>Настройки</h5></div>
        </div>
    )
}