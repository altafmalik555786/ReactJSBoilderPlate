import React from 'react'
import style from './style.module.scss'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'

function MenuBar() {
    const itemsList = [
        { label: 'Home', key: 'home-1' },
        { label: 'About', key: 'about' },
        {
            label: 'More',
            key: 'more-submenu-1',
            children: [
                { label: 'Plans', key: 'submenu-item-1' },
                { label: 'Privacy', key: 'submenu-item-2' },
            ],
        },
    ]

    return (
        <div className={style.menuMainWrapper} style={{ height: "10vh" }} >
            <div className={style.menuWrapper} >
                <NavLink className={style.Logo} to={""}> Logo </NavLink>
                <Menu mode='horizontal' items={itemsList} />
            </div>
        </div>
    )
}

export default MenuBar



