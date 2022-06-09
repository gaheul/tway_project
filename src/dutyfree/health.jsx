import React from "react";
import Footer from "../footer";
import styles from './dutyfree.module.css';

import ItemHealth from "./itemHealth";
import Num from "./num";

function Health(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_in}>
                    <div className={styles.product_name}>
                        <h3>건강제품</h3>
                    </div>
                    <div className={styles.top_con}>
                        <div className={styles.top_total}>
                            총 <span>5</span>개
                        </div>
                        <div className={styles.top_list}>
                            <ul>
                                <li><a href="#">인기순</a></li>
                                <li><a href="#">신상품순</a></li>
                                <li><a href="#">할인율</a></li>
                                <li><a href="#">낮은가격순</a></li>
                                <li><a href="#">높은가격순</a></li>
                            </ul>
                            <select name="number">
                                <option value="20개씩">20개씩</option>
                                <option value="20개씩">40개씩</option>
                                <option value="20개씩">100개씩</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.product_list}>
                        <div className={styles.product}>
                            <ItemHealth/>
                        </div>   
                    </div>
                    <div className={styles.num}>
                        <a className={styles.num_prev_first} href="#"></a>
                        <a className={styles.num_prev} href="#"></a>
                        <a className={styles.on} href="#">1</a>
                        <a className={styles.num_next} href="#"></a>
                        <a className={styles.num_next_first} href="#"></a>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Health;