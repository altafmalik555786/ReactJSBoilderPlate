import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { Layout, Menu } from 'antd'
import {
  FileDoneOutlined,
  LeftOutlined,
  MenuOutlined,
  RightOutlined,
} from '@ant-design/icons'
import Routing from '@components/route'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from '@components/login-page'
import CUstomHeader from '@components/header'
import { getTokenFromCookies } from '@api/common-utils'
import logosml from '../../assets/image/logosml.png'
import { allRoutes, menu, routeList } from '@utils/menu'

import { useStore } from '@stores/root-store'
import OnBoarding from '@components/onboarding'
import { observer } from 'mobx-react-lite'
import { capitalize } from 'lodash'
import { constRoute } from '@utils/route'
// import Signup from '@components/signup-page'
// import DashBoard from '@components/dashboard'
// import ResetPassword from '@components/resetPassword'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

const LayOut = () => {
  const publicPath = [
    '/reset-password',
    '/login',
    '/signup',
    '/confirm-password',
  ]
  const navigate = useNavigate()
  const [pathName, setPathName] = useState('')
  const [privatePath, setPrivatePath] = useState(['/', '/profile'])
  const [newMenu, setNewMenu] = useState([])

  const {
    userInfo: { onBoardUser, loading, getcompany },
  } = useStore(null)

  const [company, setCompany] = useState(false)
  const [visibility, setvisibility] = useState(false)
  const [hoverCollapse, sethoverCollapse] = useState(false)
  const [hoverRestriction, sethoverRestriction] = useState(true)

  useEffect(() => {
    setPathName(window.location.pathname ?? '')
    // setPrivatePath(['/'])
  }, [])

  useEffect(() => {
    async function load() {
      await onBoardUser()
    }

    if (localStorage.getItem('token')) {
      load()
    }
  }, [localStorage.getItem('token')])

  useEffect(() => {
    if (getcompany && getcompany?.id) {
      if (getcompany.admin && getcompany.company) {
        setCompany(false)
        setvisibility(false)
        menu.forEach((menus) => {
          newMenu.push(menus)
          // setPrivatePath([...allRoutes])
          setNewMenu([...newMenu])
        })
      } else if (!getcompany.admin && getcompany.role) {
        if (getcompany.role.name) {
          getcompany.role.allowed_method.forEach((method) => {
            if (!method.methods.every((currentValue) => currentValue === '-')) {
              menu.forEach((menus) => {
                if (menus.name === capitalize(method.name)) {
                  newMenu.push(menus)
                  method.methods.forEach((value, index) => {
                    if (value === 'POST')
                      privatePath.push(`/add-${method.name}`)
                    if (value === 'PATCH')
                      privatePath.push(`/update-${method.name}`)
                  })
                  if (menus.link) {
                    privatePath.push(menus.link)
                  } else if (menus.menu) {
                    menus.menu.forEach((element, index) => {
                      privatePath.push(element.link)
                    })
                  }
                  setPrivatePath([...privatePath])
                  setNewMenu([...newMenu])
                }
              })
            }
          })
        }
      } else {
        setCompany(true)
        setvisibility(true)
      }
    }
  }, [loading])

  const accessToken = getTokenFromCookies()

  const getKeyVal = (key) => {
    const data = routeList.find((e) => e.route == key)
    if (data) {
      return data.route
    } else {
      return ''
    }
  }

  const getIconVal = (key) => {
    const data = routeList.find((e) => e.menuKey == key)
    if (data) {
      return data.icon
    } else {
      return ''
    }
  }

  const toggledCollapse = () => {
    sethoverRestriction(!hoverRestriction)
    sethoverCollapse(!hoverCollapse)
  }
  const isCollapse = () => {
    if (hoverCollapse) {
      sethoverCollapse(false)
    }
  }
  const mouseLeaves = () => {
    if (!hoverCollapse && !hoverRestriction) {
      sethoverCollapse(true)
    }
  }
  if (!accessToken.length && publicPath.includes(window.location.pathname)) {
    return <Routing />
  }

  if (
    !accessToken.length &&
    (window.location.pathname === '' || window.location.pathname === '/')
  ) {
    localStorage.getItem('userRegister')
      ? navigate(`${constRoute.login}`)
      : navigate(`${constRoute.signup}`)
  }

  if (
    ((getcompany && getcompany?.id && getcompany.admin) ||
      privatePath.includes(window.location.pathname)) &&
    accessToken.length
  ) {
    return (
      <Layout>
        <Sider
          className={style.siderCheck}
          collapsible
          collapsed={hoverCollapse}
          onMouseEnter={isCollapse}
          onMouseLeave={mouseLeaves}
        >
          {hoverCollapse ? (
            <div className={style.logo}>
              <img src={logosml} alt="Enigmatix" />{' '}
            </div>
          ) : (
            <div className={style.logo}>
              <img src={logosml} alt="Enigmatix" />{' '}
            </div>
          )}
          <Menu
            className={style.menuCheck}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            {newMenu.map((val, key1) => {
              return (
                <>
                  {val.menu ? (
                    <SubMenu
                      key={'sub' + key1}
                      title={val.name}
                      icon={<FileDoneOutlined className={style.iconColor} />}
                    >
                      {val.menu.map((value, key) => {
                        return (
                          <>
                            <Menu.Item className={style.aaa}>
                              <NavLink
                                to={getKeyVal(value.link)}
                                className={style.iconDiv}
                              >
                                {getIconVal(value.icon)}
                                <p>{value.btn}</p>
                              </NavLink>
                            </Menu.Item>
                          </>
                        )
                      })}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={1 + key1} icon={getIconVal(val.icon)}>
                      <NavLink to={getKeyVal(val.link)}>{val.name}</NavLink>
                    </Menu.Item>
                  )}
                </>
              )
            })}
          </Menu>
        </Sider>

        <button className={style.hamburger} onClick={toggledCollapse}>
          <MenuOutlined />
        </button>
        <Layout className={style.New}>
          <Header className={style.sitelayout} style={{ padding: 0 }}>
            {' '}
            <CUstomHeader />
          </Header>
          <Content className={style.content}>
            <div
              className={style.siteLayoutBackground}
              style={{ minHeight: 360 }}
            >
              <Routing />
            </div>
          </Content>
        </Layout>

        {company && <OnBoarding visible={visibility} />}
      </Layout>
    )
  } else {
    return null
  }
}

export default observer(LayOut)
