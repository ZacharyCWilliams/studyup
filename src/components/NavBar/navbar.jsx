import React from "react";
// import styled, { css } from 'styled-components'
import styles from "./navbar.module.css";

//  const Container = styled.div`
//     text-align: center;
//     background-color: blue;
//     height: 100px;
//   `

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>StudyUp</h1>
    </div>
  )
}