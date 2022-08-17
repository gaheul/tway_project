import React, { useState } from "react";
import { Route,Link } from "react-router-dom";
import Footer from "../footer";
import styles from "./community.module.css"
import Rent from "./rent";
import Bank from "./bank";
import Wifi from "./wifi";
import Hotel from "./hotel";

function Community(){

    const current_text = window.location.pathname.includes("rent") ? "렌터카" :
                         window.location.pathname.includes("bank") ? "금융및여행보험" :
                         window.location.pathname.includes("wifi") ? "와이파이" : "호텔";

                         const [open, setOpen] = useState(false);

                         const onEvent = () => setOpen(!open);
    return(
        <div>
            <div className={styles.header}>
                    <div className={styles.header_in}>
                    <ul>
                        <li><Link className={styles.list_name} to='/community/community'>호텔</Link></li>
                        <li><Link className={styles.list_name} to='/community/community/rent'>렌터카</Link></li>
                        <li><Link className={styles.list_name} to='/community/community/bank'>금융및여행보험</Link></li>
                        <li><Link className={styles.list_name} to='/community/community/wifi'>와이파이</Link></li>
                    </ul>
            </div>
            </div>
            <div className={`${styles.add_content_go} ${styles.content_go_list}`}>
                <ul className={styles.add_button}>
                    <li>
                        <div className={styles.add_home}>HOME</div>
                    </li>
                    <li>
                        <div className={`${styles.add_home} ${styles.add_con}`} onMouseEnter={onEvent} onMouseLeave={onEvent} >제휴</div>
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
                        <div className={`${styles.add_home} ${styles.add_con}`}>{current_text}</div>
                    </li>
                </ul>
            </div>
            <div style={{width:'100%', height:'auto', background:'#fff'}}>
                <Route path="/community/community" exact={true} component={Hotel}/>
                <Route path="/community/community/rent" component={Rent}/>
                <Route path="/community/community/bank" component={Bank}/>
                <Route path="/community/community/wifi" component={Wifi}/>   
            </div>
            
                <Footer/>
        </div>
    )
}

export default Community;