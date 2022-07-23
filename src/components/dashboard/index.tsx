import { Carousel } from "antd"
import React from "react"
import styles from './style.module.scss'

function DashBoard() {

  return <div className={styles.DashboardContainer}>
    <div className={styles.carosalImg} >
      <Carousel autoplay>
        <div>
          <h3 style={{
            height: '90vh',
            color: '#fff',
            lineHeight: '90vh',
            textAlign: 'center',
            background: '#364d79',
          }}>
            <img src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Hotel Image" />
          </h3>
        </div>
        <div>
          <h3 style={{
            height: '90vh',
            color: '#fff',
            lineHeight: '90vh',
            textAlign: 'center',
            background: '#364d79',
          }}>
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={{
            height: '90vh',
            color: '#fff',
            lineHeight: '90vh',
            textAlign: 'center',
            background: '#364d79',
          }}>
            <img src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={{
            height: '90vh',
            color: '#fff',
            lineHeight: '90vh',
            textAlign: 'center',
            background: '#364d79',
          }}>
            <img src="https://images.pexels.com/photos/561458/pexels-photo-561458.jpeg?cs=srgb&dl=pexels-energepiccom-561458.jpg&fm=jpg" />
          </h3>
        </div>
      </Carousel>
    </div>
  </div>
}

export default DashBoard
