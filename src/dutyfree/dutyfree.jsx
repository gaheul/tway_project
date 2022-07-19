import React from "react";
import { Route,Link } from "react-router-dom";
import styles from './dutyfree.module.css';
import Footer from "../footer";

import Health from "./health";
import Gift from "./gift";
import Beauty from "./beauty";
import Drink from "./drink";

function Dutyfree() {
    const current_text = window.location.pathname.includes("health") ? "건강제품" :
                         window.location.pathname.includes("gift") ? "쥬얼리&선물용품" :
                         window.location.pathname.includes("beauty") ? "화장품&향수" : "주류";

    return(
        <div>
            <div className={styles.header}>
                <div className={styles.header_in}>
                    <ul className={styles.dutyfree_list}>
                        <li><Link className={styles.list_name} to='/dutyfree/dutyfree'>주류</Link></li>
                        <li><Link className={styles.list_name} to='/dutyfree/dutyfree/health'>건강제품</Link></li>
                        <li><Link className={styles.list_name} to='/dutyfree/dutyfree/gift'>쥬얼리&선물용품</Link></li>
                        <li><Link className={styles.list_name} to='/dutyfree/dutyfree/beauty'>화장품&향수</Link></li>
                    </ul>
                    <ul className={styles.util_menu}>
                        <li><a href="#">나의주문</a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">이벤트</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.add_content_go} ${styles.content_go_list}`}>
                <ul className={styles.add_button}>
                    <li>
                        <Link className={styles.add_home}>HOME</Link>
                    </li>
                    <li>
                        <Link className={`${styles.add_home} ${styles.add_con}`}>이벤트</Link>
                    </li>
                    <li>
                        <Link className={`${styles.add_home} ${styles.add_con}`}>이벤트/프로모션</Link>
                    </li>
                    <li>
                        <Link className={`${styles.add_home} ${styles.add_con}`}>{current_text}</Link>
                    </li>
                </ul>
            </div>
            <div style={{width:'100%', height:'auto', background:'#fff'}}>
                <Route path="/dutyfree/dutyfree" exact={true} component={Drink}/>
                <Route path="/dutyfree/dutyfree/health" component={Health}/>
                <Route path="/dutyfree/dutyfree/gift" component={Gift}/>
                <Route path="/dutyfree/dutyfree/beauty" component={Beauty}/>
                
            </div>
            
           <Footer/>
        </div>
    )
}

export default Dutyfree;