import React from 'react';
import Warning from './Warning.png'
import styles from './error.css'

const Error = ({message}) => {

  return (
    <div>
       <div className="missingDayComponent">
            <img id="errorImg" className = {styles.img} src={Warning} alt="warning" width="30px"/>
            <p className={styles.p}>{message}</p>
        </div>
        
    </div>
  )
}

export default Error;