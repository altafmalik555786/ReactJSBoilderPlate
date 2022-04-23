import React from 'react'
import style from './style.module.scss'
import { Menu } from 'antd'

import {
    FileDoneOutlined,
    HomeOutlined,
    ProfileOutlined

} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { constRoute } from '../../utils/route'

const { SubMenu } = Menu

function MenuBar() {
    return (
        <div className={style.menuWrapper}>
            <div className={style.topBarWrapper} >
                <NavLink className={style.Logo} to={""}> Logo </NavLink>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                >
                    
                    <NavLink to={constRoute.home} >
                        <Menu.Item key={1} >
                        <HomeOutlined />
                            Home
                        </Menu.Item>
                    </NavLink>
                    <SubMenu
                        key={'subUniq'}
                        title="Booking"
                        icon={<FileDoneOutlined />}
                        className={style.subMenuContainer}
                    >
                        <NavLink
                            to='./dashboard'
                        >
                            <Menu.Item key={3}>
                                <FileDoneOutlined />
                                <p>Room</p>
                            </Menu.Item>
                        </NavLink>
                        <NavLink
                            to='./dashboard'
                        >
                            <Menu.Item key={4} >
                                <FileDoneOutlined />
                                <p>Meeting Hall</p>
                            </Menu.Item>
                        </NavLink>
                        <NavLink
                            to='./dashboard'
                        >
                            <Menu.Item key={4} >
                                <FileDoneOutlined />
                                <p>Ceremony</p>
                            </Menu.Item>
                        </NavLink>
                    </SubMenu>
                    <NavLink to={constRoute.about}>
                        <Menu.Item key={2} >
                        <ProfileOutlined />
                            About
                        </Menu.Item>
                    </NavLink>
                   
                </Menu>
            </div>
        </div>
    )
}

export default MenuBar



