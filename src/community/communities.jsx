import React from "react";
import styles from './community.module.css';

const communityData = {
    hotel : {
        name: '호텔'
    },
    rent : {
        name: '렌터카'
    },
    bank : {
        name: '금융 및 여행자보험'
    },
    wifi: {
        name: '와이파이'
}
};


function Comunuties({match}){
    const {list} = match.params;
    const community = communityData[list];
    return(
        <div>
            
            <div className={styles.content}>
             <div className={styles.content_header}>
                    <div className={styles.content_title}>
                        <h3>{community.name}</h3>
                    </div>
                </div>
             <div className={styles.section}>
                    <div className={styles.company}>
                        <div className={styles.company_img}></div>
                        <div className={styles.company_go}></div>
                    </div>
                    <div className={styles.company_list}>
                        <div className={styles.list_con}></div>
                    </div>
             </div>
            </div>
  
        </div>
    )
}

export default Comunuties;