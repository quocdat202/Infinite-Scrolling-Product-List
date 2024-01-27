import { Breadcrumb, Layout, Card } from 'antd';
import HeaderCM from 'components/Common/HeaderCM';
import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchProducts } from 'slices/productsSlice';

const { Meta } = Card;
const { Content } = Layout;

interface Product {
    id: number;
    title: string;
    description: string;
    images: string[];
}

const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const selectorProducts = useAppSelector<any>((state) => state.products.products);

    const [isLoading, setIsLoading] = useState(false);
    const [params, setParams] = useState({
        limit: 10, skip: 0
    });
    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        dispatch(fetchProducts(params));
        console.log("🤔🤔🤔 ~ dispatch ~ dispatch")

    }, [params]);

    const handleScroll = () => {
        console.log("🤔🤔🤔 ~ handleScroll ~ container")
        const container = containerRef.current;
        if (container && container.scrollHeight - container.scrollTop === container.clientHeight) {
            if (!isLoading) {
                setIsLoading(true);
                const params = { limit: 10, skip: selectorProducts.products.length };
                dispatch(fetchProducts(params))
                setIsLoading(false)
                // .catch(() => setIsLoading(false));
            }
        }
    };

    return (
        <Layout>
            <HeaderCM props={'Title'} />
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout">
                <div className='panel-products' ref={containerRef} onScroll={handleScroll} >
                    {selectorProducts && selectorProducts?.products?.length > 0 ? (
                        selectorProducts?.products.map((product: Product) => (
                            <Card
                                key={product.id}
                                className='card-product'
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={product?.images[0]} />}
                            >
                                <Meta title={product?.title} description={product?.description} />
                            </Card>
                        ))
                    ) : (
                        'No Data'
                    )}
                    {isLoading && 'Loading...'}
                </div>
            </Content>
        </Layout>
    );
};

export default Products;
