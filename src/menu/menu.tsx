import React from 'react';

import './menu.css';

function MenuItem({title} : {title : string }) {
    return <div className="menu__item">{title}</div>
}


function Menu() {
    return (

      <div className="menu">
        <MenuItem title="Входящие"/>
        <MenuItem title="Отправленные"/>
        <MenuItem title="Удаленные"/>
        <MenuItem title="Спам"/>
        <MenuItem title="Черновики"/>
        <MenuItem title="Создать папку"/>
      </div>
    );
}

export default Menu;