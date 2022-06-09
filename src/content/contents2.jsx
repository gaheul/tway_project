import React from "react";
import styles from "./contents2.module.css";
import PartnerService from "./partnerService";

function ContentsActive(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_wrap}>
                    <h3>제휴서비스</h3>
                    <div className={styles.content_menu}>
                        <div className={styles.menu_box}>
                            <PartnerService/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContentsActive;