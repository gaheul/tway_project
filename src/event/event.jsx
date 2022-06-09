import React from "react";
import Footer from "../footer";
import styles from "./event.module.css"
import EventItem from "./eventList";
import EventList from "./eventList";

function Event(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_box}>
                <div className={styles.content_header}>
                    <div className={styles.content_title}>
                        <h3>이벤트</h3>
                    </div>
                    <div className={styles.subTitle}>
                        <h4>진행중인 이벤트</h4>
                    </div>
                </div>  
                <div className={styles.content_section}>            
                    <EventItem/>  
                </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Event;