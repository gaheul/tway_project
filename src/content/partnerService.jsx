import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Dutyfree from "../dutyfree/dutyfree";
import styles from "./contents2.module.css";

function Partners({list}){
    return(
        <div>
            <div style={{marginRight:'108px'}}>
                <Link to={list.src}>
                         <div className={styles.menu_item} >
                            <img src={list.img} alt="제휴서비스 이미지" />
                        </div>
                    <p className={styles.name}>{list.name}</p>   
                </Link>
            </div>
            
        </div>
    )
}

function PartnerService(){


    const serviceList = [
        {
            img:'https://contents-image.twayair.com/homepage/images/main/ico_main_aff01.png',
            name:'호텔',
            src:'/community/community'
        },
        {
            img:'	https://contents-image.twayair.com/homepage/images/main/ico_main_aff02.png',
            name:'렌터카',
            src:'/community/community/rent'
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/ico_main_aff03.png',
            name:'쇼핑 편의',
            
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/ico_main_aff04.png',
            name:'액티비티'
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/ico_main_aff05.png',
            name:'금융여행자보험',
            src:'/community/community/bank'
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/ico_main_aff06.png',
            name:'와이파이',
            src:'/community/community/wifi'
        },
    ]

    return(
        <div style={{display:'flex'}}>
            {serviceList.map(list=>(
                <Partners list ={list} key={list.name} onMouseOver={onmouseover}/>
            ))}
        </div>
    )
}

export default PartnerService;