import React from "react";
import { Route,Link } from "react-router-dom";
import Footer from "../footer";
import styles from "./community.module.css"
import Rent from "./rent";
import Bank from "./bank";
import Wifi from "./wifi";
import Hotel from "./hotel";

function Community(){
    return(
        <div>
            
            <div className={styles.header}>
                    <div className={styles.header_in}>
                    <ul>
                        <li><Link to='/community/community'>호텔</Link></li>
                        <li><Link to='/community/community/rent'>렌터카</Link></li>
                        <li><Link to='/community/community/bank'>금융및여행보험</Link></li>
                        <li><Link to='/community/community/wifi'>와이파이</Link></li>
                    </ul>
            </div>
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