import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
import Label from "./label";

function ItemList({items,best,hot}){
    Label.defaultProps = {
        best:'BEST',
        hot:"HOT"
    }

    const [open, setOpen] = useState(false)
    const [opens, setOpens] = useState(false)

    const onBasket = () => setOpen(!open);
    const onShop = () => setOpens(!opens);



    return(
     <div className={styles.item}>    
         <div className={styles.product} >
            <div className={styles.item_img}>
                <div><img src={items.img} alt="" /></div>
            </div>
            {/* <div className={styles.item_box}> */}
                <div className={styles.item_name}>
                    <p className={styles.brand}>{items.brand}</p>
                    <strong className={styles.name}>{items.name}</strong>
                </div>
                
                {/* </div> */}
            <div className={styles.item_price} >
                <del>{items.salePrice}</del>
                <strong>{items.price}</strong>
                <span>{items.exchage}</span>
            </div>
             <div className={styles.item_label}>
                {items.label ? <Label/> : null}
            </div> 
            <div className={styles.item_link} >
                <Link className={styles.basket}  onMouseEnter={onBasket} onMouseLeave={onBasket} >                   
                    {open ? <div className={styles.basket_text}>장바구니</div> : <div className={styles.basket_img}></div>}
                </Link>
                <Link className={styles.shop} onMouseEnter={onShop} onMouseLeave={onShop}>
                {opens ? <div className={styles.shop_text}>주문하기</div> : <div className={styles.shop_img}></div>}
                </Link>
                
            </div>
        </div>
            
    </div>
    )

}

function ItemDrink(){
    
    const itemLists=[
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/5d1a577f-d3b3-4c63-a583-6375f0e63681.jpg',
            brand:'발렌타인',
            name:'발렌타인 30년',
            salePrice: '$394.00',
            price:'$335.00',
            exchage:'(₩419,000)',
            label:true
            
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/c176d926-3649-426b-84ea-a5df56a7bbc8.jpg',
            brand:'발렌타인',
            name:'발렌타인 23년',
            salePrice: '$189.00',
            price:'$151.00',
            exchage:'(₩193,500)'
        },
        {           
            img:'https://contents-image.twayair.com/contents/2020/0106/a5b18ecc-35b4-4359-a43e-458aeb9b0c94.jpg',
            brand:'발렌타인',
            name:'발렌타인 21년',
            salePrice: '$136.00',
            price:'$116.00',
            exchage:'(₩148,500)',
            label:true

        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/2153472b-6fcb-42e2-ba29-89f6f9200aa7.jpg',
            brand:'발렌타인',
            name:'발렌타인17년',
            salePrice: '$75.00',
            price:'$64.00',
            exchage:'(₩82,000)',
            label:true
        },
        {   
            img:'https://contents-image.twayair.com/contents/2020/0109/778f15f4-a547-4c63-bc17-02a3ec935a32.jpg',
            brand:'로얄살루트',
            name:'로얄살루트32년 유니언 오브 더 크라운스',
            salePrice: '#394.00',
            price:'$335.00',
            exchage:'(₩419,000)',
            label:true

        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/86f77242-9057-4573-af12-51b88a7ad1e7.jpg',
            brand:'로얄살루트',
            name:'로얄살루트 21년 시그니처 블렌드',
            salePrice: '$150.00',
            price:'$120.00',
            exchage:'(₩154,000)',
            label:true

        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/04ef50df-d2d6-4c2c-87d0-235ac0f6e56c.jpg',
            brand:'글랜피딕',
            name:'글랜피딕 18년 싱글몰트 위스키',
            salePrice: '$103.00',
            price:'$93.00',
            exchage:'(₩119,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/6fff4c1c-abf9-40cc-a23e-70ec71bdd4d6.jpg',
            brand:'글랜피딕',
            name:'글랜피딕 21년 싱글몰트 위스크',
            salePrice: '$190.00',
            price:'$171.00',
            exchage:'(₩219,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/cbc2e2c9-5c10-49cb-b5e5-ec8e52f47d9e.jpg',
            brand:'조니워커',
            name:'조니워커 블루 라벨',
            salePrice: '$191.00',
            price:'$153.00',
            exchage:'(₩196,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/3ebddfd5-362d-4b43-83bd-b2cfbb22d4f5.jpg',
            brand:'수정방',
            name:'수정방 52%',
            salePrice: '$120.00',
            price:'$84.00',
            exchage:'(₩108,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/1db5407b-2c6b-4f8f-a369-d6459400f4ab.jpg',
            brand:'잭다니엘',
            name:'잭다니엘 테네시 허니',
            salePrice: '$34.00',
            price:'$31.00',
            exchage:'(₩40,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/5451302c-7d65-49fe-9fc2-d18122aa794e.jpg',
            brand:'잭다니엘',
            name:'잭다니엘No.27골드',
            salePrice: '$83.00',
            price:'$58.00',
            exchage:'(₩74,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/54fdee37-e170-4216-b3e4-37b74a1186d7.jpg',
            brand:'시바스리갈',
            name:'시바스리갈 18년',
            salePrice: '$79.00',
            price:'$63.00',
            exchage:'(₩81,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0106/61ca7808-8969-4acf-b2e4-72bb5d8331c0.jpg',
            brand:'단츠카',
            name:'단츠카 더 스피릿',
            salePrice: '$33.00',
            price:'$26.00',
            exchage:'(₩33,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/9278745c-347c-46ca-b804-13e8bf75826a.jpg',
            brand:'텐뉴델체로',
            name:'텐뉴델체로 라 포데리나 브루넬로 디 몬탈치노 2013',
            salePrice: '$68.00',
            price:'$54.00',
            exchage:'(₩69,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/73b981a1-d1f7-4c60-8748-e5f83083e1f0.jpg',
            brand:'텐뉴델체로',
            name:'텐뉴델체로 콜페트론 사그라니노 디 몬테팔코 2011',
            salePrice: '$48.00',
            price:'38.00',
            exchage:'(₩49,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/4eb77078-f586-4222-9608-b4c32a83f346.jpg',
            brand:'화요',
            name:'화요 53도 750ml',
            salePrice: '$65.00',
            price:'$46.00',
            exchage:'(₩59,000)'
        }

    ]

    return(
       <div>  
           {itemLists.map(drink => (
               <ItemList  items={drink} key={drink.name}/>
           ))}
       </div>
       
    )
}

export default ItemDrink;