import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import styles from './dutyfree.module.css';

import ItemBeauty from "./itemBeauty";
import Num from "./num";

function Beauty(){
    return(
        <div >
            <div className={styles.content}>
                <div className={styles.content_in}>
                    <div className={styles.product_name}>
                        <h3>화장품&향수</h3>
                    </div>
                    <div className={styles.top_con}>
                        <div className={styles.top_total}>
                            총 <span>9</span>개
                        </div>
                        <div className={styles.top_list}>
                            <ul>
                                <li>인기순</li>
                                <li>신상품순</li>
                                <li>할인율</li>
                                <li>낮은가격순</li>
                                <li>높은가격순</li>
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
                            <ItemBeauty/>
                        </div>   
                    </div>
                    <div className={styles.num}>
                        <Link to='#' className={styles.num_prev_first} ></Link>
                        <Link to='#' className={styles.num_prev} ></Link>
                        <Link to='#' className={styles.on} >1</Link>
                        <Link to='#' className={styles.num_next} ></Link>
                        <Link to='#' className={styles.num_next_first} ></Link>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Beauty;