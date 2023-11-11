import React from 'react'
import header_img from "../../assets/img/header_img.png"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <div className={styles.header_section}>
        <img src={header_img} alt="" />
      
    </div>
  )
}
