import React from "react";
import styles from "./item.module.css";



function Label({best,hot}){

    return(
        <div>
            <span className={styles.lbl_best}>{best}</span>
                <span className={styles.lbl_hot} >{hot}</span>
        </div>
    )
}



export default Label;