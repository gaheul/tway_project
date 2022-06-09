import React from "react";
import styles from './footer.module.css';

function Footer(){
    return(
            <div className={styles.footer}>
                <div className={styles.header}>
                    <div className={styles.header_in}>
                        <div className={styles.header_info}>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                        <div className={styles.footer_menu}>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    
                </div>
                <div className={styles.copy}>
                    <div className={styles.copy_info}>
                        
                    </div>
                </div>
            </div>

    )
}

export default Footer;