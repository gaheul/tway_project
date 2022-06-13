import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import styles from "./event.module.css"
import EventItem from "./eventList";


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
                <div className={styles.event_num}>
                     <div className={styles.num}>
                        <Link to='#' className={styles.num_prev_first} ></Link>
                        <Link to='#' className={styles.num_prev} ></Link>
                        <Link to='#' className={styles.on} >1</Link>
                        <Link to='#' className={styles.add} >2</Link>
                        <Link to='#' className={styles.num_next} ></Link>
                        <Link to='#' className={styles.num_next_first} ></Link>
                     </div>

                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Event;