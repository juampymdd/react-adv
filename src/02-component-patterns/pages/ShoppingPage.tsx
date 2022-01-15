import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components/index';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';





export const ShoppingPage = () => {

    const {products, onProductCountChange, shoppingCart} = useShoppingCart();
    

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (

                <ProductCard 
                    key={ product.id }
                    product={ product }
                    className='bg-dark text-white'
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductImage  className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)' }}/>
                    <ProductTitle 
                        className="text-white text-bold"
                    />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                    ))
                }

                <div className='shopping-cart'>
                    {
                        Object.entries(shoppingCart).map( ([key, product]) => (

                        <ProductCard 
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{
                                width: '100px'
                            }}
                            value={product.count}
                            onChange={ onProductCountChange }
                        >
                            <ProductImage  className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0, 0.2)'}}/>
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
