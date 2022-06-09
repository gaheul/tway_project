import React from "react";
import Footer from "../footer";
import styles from './community.module.css';
import PartnerInfo from "./partnersHotel";
import Partner from "./partnersHotel";

function Wifi(){
    return(
        <div>
            <div className={styles.content}>
             <div className={styles.content_header}>
             <div className={styles.content_title}>
                        <h3>와이파이</h3>
                    </div>
                    <div className={styles.con_sale}>
                    <h3>와이파이와 유심</h3>
                    <p>해외여행의 필수품! 와이파이와 유심 할인을 확인해보세요</p>
                </div>
             </div>
             
             <div className={styles.section}>
                <div className={styles.company}>
                    <div className={styles.company_img}> <img src={require('./images/wifi.jpg')} alt="" /></div>
                    <div style={{backgroundColor:"#6B85BE"}} className={styles.company_go}>
                         <strong>와이파이 도시락 & 유심</strong>
                        <p>해외여행 필수품 챙기기 <br/>
                           와이파이 도시락 15% 할인!
                        </p>
                        <button>와이파이도시락 & 유심 바로가기</button>
                    </div>
                </div>
                <div className={styles.company_list}>
                </div>
             </div>
            </div>
        
        </div>
    )
}

export default Wifi;