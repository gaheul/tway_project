import React from "react";
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
                        <Link className={styles.add_home}>HOME</Link>
                    </li>
                    <li>
                        <Link className={`${styles.add_home} ${styles.add_con}`}>제휴</Link>
                    </li>
                    <li>
                        <Link className={`${styles.add_home} ${styles.add_con}`}>{current_text}</Link>
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