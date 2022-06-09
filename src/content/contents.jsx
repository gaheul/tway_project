import React from "react";
import styles from "./contents.module.css";
import ContentsActive from "./contents2";
import Event from "./event";
import Travel from "./travel";
import Notice from "./notice";
import AddService from "./service";
import SimpleSlider from "./eventSlide";
import TravelSlider from "./travelSlide";

function Contents(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_wrap}>
                    <h3>부가서비스</h3>
                    <div className={styles.content_menu}>
                        <AddService/>
                    </div>
                </div>
                
            </div>
            <ContentsActive/>
            <SimpleSlider/>
            <TravelSlider/>
            <Notice/>
        </div>
    )
}

export default Contents;