import React from "react";
import styles from "./travel.module.css";

function Travel(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_wrap}>
                    <h3>최저가 여행</h3>
                    <div className={styles.content_menu}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel;