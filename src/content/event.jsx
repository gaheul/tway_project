import React from "react";
import styles from "./event.module.css";

function Event(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_wrap}>
                    <h3>이벤트</h3> 
                    <div className={styles.event}>
                        <div className={styles.event_img}></div>
                        <div className={styles.event_img}></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Event;