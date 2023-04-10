import React from 'react'
import styles from './Jumbotron.module.css'

const Jumbotron = ({style, heading, paragraph}) => {
  return (
    <div style={style} className={styles.jumbotron}>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </div>
  )
}

export default Jumbotron
