import React from "react";
import styles from "./item.module.css";
import Label from "./label";



function ItemList({items}){
    

    return(
     <div>    
         <div className={styles.product}>
            <div className={styles.item_img}>
                <div><img src={items.img} alt="" /></div>
            </div>
            <div className={styles.item_name}>
                <p className={styles.brand}>{items.brand}</p>
                <strong className={styles.name}>{items.name}</strong>
                
            </div>
            <div className={styles.item_price}>
                <del>{items.salePrice}</del>
                <strong>{items.price}</strong>
                <span>{items.exchage}</span>
            </div>
             <div className={styles.item_label}>
                {items.label}
            </div> 
         </div>
            
        </div>
    )

}

function ItemHealth(){
    
    const itemLists=[
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/c6ca7895-fb3e-4ff0-92bc-de288b5aa707.jpg',
            brand:'정관장',
            name:'홍삼정 로얄',
            salePrice: '$188.00',
            price:'$160.00',
            exchage:'(₩205,000)',
            
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/7981e2f9-0a95-4077-98e9-dbe4d571c758.jpg',
            brand:'정관장',
            name:'홍삼정 에브리타임 로얄',
            salePrice: '$60.00',
            price:'$51.00',
            exchage:'(₩65,500)'
        },
        {           
            img:'	https://contents-image.twayair.com/contents/2020/0122/31644ea1-a5ca-43cf-8786-d32d91a3bbaf.jpg',
            brand:'닥터내츄럴',
            name:'닥터내츄럴 프로폴리스 스프레이',
            salePrice: '$70.00',
            price:'$21.00',
            exchage:'(₩27,000)',
            label:<Label/>
        },
        {   
            img:'https://contents-image.twayair.com/contents/2020/0108/2d30bc42-13fc-43f4-8bb6-e7a1505969fb.jpg',
            brand:'오쏘몰',
            name:'오쏘몰 이뮨(면역+영양)',
            salePrice: '$94.00.00',
            price:'$75.00',
            exchage:'(₩96,000)',
            label:<Label/>
        },
        {
            img:'	https://contents-image.twayair.com/contents/2022/0331/fa925ebf-badc-437e-b948-c7df17e4c9a2.jpg',
            brand:'덴마크',
            name:'유산균이야기',
            salePrice: '$71.00',
            price:'$57.00',
            exchage:'(₩73,000)',
            label:<Label/>
        }

    ]

    return(
       <div>  
           {itemLists.map(items => (
               <ItemList  items={items} key={items.brand}/>
           ))}
       </div>
       
    )
}

export default ItemHealth;