import React from 'react'
import H_img from "../../assets/img/H_img.svg"
import shopping_img from "../../assets/img/shopping_img.svg"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.h_logo}>
           <img src={H_img} alt="" />
      </div>
      <div className={styles.shopping}>
          <img src={shopping_img} alt="" />
      </div>
    </div>
  )
}
