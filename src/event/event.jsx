import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import styles from "./event.module.css"
import EventItem from "./eventList";


function Event(){
    const [open, setOpen] = useState(false);

    const onEvent = () => setOpen(!open);

    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_box}>
                <div className={styles.content_header}>
                    <div className={styles.event_content_go}>
                        <ul className={styles.event_go}>
                            <li >
                                <div className={styles.event_home}>HOME</div>
                            </li>
                            <li>
                                <div className={`${styles.event_home} ${styles.event_con}`} onMouseEnter={onEvent} onMouseLeave={onEvent} >이벤트</div>
                                {open ? 
                                <div className={styles.event_box}>
                                    <ul>
                                        <li>항공권예매</li>
                                        <li>나의예약</li>
                                        <li>서비스안내</li>
                                        <li>온라인면세점</li>
                                        <li>이벤트</li>
                                        <li>제휴</li>
                                    </ul>
                                </div> : 
                                ""}
                            </li>
                            <li>
                                <div className={`${styles.event_home} ${styles.event_con}`}>이벤트/프로모션</div>
                            </li>
                        </ul>
                    </div>
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