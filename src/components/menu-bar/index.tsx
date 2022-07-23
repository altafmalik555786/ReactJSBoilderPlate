import React from 'react'
import style from './style.module.scss'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'

function MenuBar() {
    const itemsList = [
        { label: 'item 1', key: 'item-1' },
        { label: 'item 2', key: 'item-2' },
        {
            label: 'sub menu',
            key: 'submenu',
            children: [{ label: 'item 3', key: 'submenu-item-1' }],
        },
    ]

    return (
        <div style={{ height: "10vh" }} >
            <NavLink className={style.Logo} to={""}> Logo </NavLink>
            <Menu mode='horizontal' items={itemsList} />
        </div>
    )
}

export default MenuBar



