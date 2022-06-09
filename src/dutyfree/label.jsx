import React from "react";
import styles from "./item.module.css";



function Label(){
    return(
        <div>
            <span className={styles.lbl_best}>BEST</span>
                <span className={styles.lbl_hot} >HOT</span>
        </div>
    )
}

export default Label;