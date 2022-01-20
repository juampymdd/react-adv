import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components/index';

import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0]



export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />
            
                <ProductCard 
                    key={ product.id }
                    product={ product }
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ( {reset, increaseBy, count, isMaxCountReached, maxCount} ) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                            </>
                        )
                    }
                </ProductCard>
        </div>
    )
}
