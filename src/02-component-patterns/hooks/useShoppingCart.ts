import { useState } from "react"
import { Product, ProductInCart } from '../interfaces/iterfaces';
import {products} from '../data/products'

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({
        //   '1': {...product1, count: 10},
          // '2': {...product1, count: 2}
    })

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        console.log(count)
        setShoppingCart(oldShoppingCart =>{

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max(productInCart.count + count, 0) > 0 ){
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return {...rest}

            // if( count === 0){
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest
            // }
            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: {...product, count}
            // }
        })  
    }
    return {
        products,
        shoppingCart,
        
        onProductCountChange,

    }
}
