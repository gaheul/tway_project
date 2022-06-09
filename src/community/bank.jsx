import React from "react";
import Footer from "../footer";
import styles from './community.module.css';
import PartnerBank from "./partnersbank";
import PartnerInfo from "./partnersHotel";
import Partner from "./partnersHotel";

function Bank(){
    return(
            <div>
                <div className={styles.content}>
                <div className={styles.content_header}>
                <div className={styles.content_title}>
                        <h3>금융 및 여행자보험</h3>
                    </div>
                    <div className={styles.con_sale}>
                    <h3>이달의 금융 할인</h3>
                    <p>이달의 제휴 카드 할인을 이용해보세요!</p>
                </div>
             </div>
             
             <div className={styles.section}>
                <div className={styles.company}>
                    <div className={styles.company_img_other}> <img src={require('./images/bank.jpg')} alt="" /></div>
                    <div style={{backgroundColor:"#8C74CC"}} className={styles.company_go}>
                         <strong>Chubb 여행자 보험</strong>
                        <p>항공기 지연과 수하물 파손까지 보상하는 <br/>
                            원클릭 여행자 보험
                        </p>
                        <button>Chubb 바로가기</button>
                    </div>
                </div>
                    <div className={styles.company_list}>
                    <PartnerBank/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Bank;