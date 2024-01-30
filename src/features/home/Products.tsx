import { Breadcrumb, Layout, Card, Input } from 'antd';
import HeaderCM from 'components/Common/HeaderCM';
import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchProducts, fetchSearchProducts } from 'slices/productsSlice';
import { Spin } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { ProductTypes, dataProducts } from 'models';
import NoData from 'components/ui/Empty';

const { Meta } = Card;
const { Content } = Layout;

const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const selectorProducts = useAppSelector<any>((state) => state);
    const [spinning, setSpinning] = useState<boolean>(false);
    const { Search } = Input;
    const panelProductsRef = useRef<HTMLDivElement>(null);
    const [dataProducts, setDataProducts] = useState<dataProducts>({ data: [] });
    const [params, setParams] = useState({
        limit: 10, skip: 0
    });



    useEffect(() => {
        dispatch(fetchProducts(params));
    }, [params]);

    useEffect(() => {
        setDataProducts({ data: selectorProducts.products.data })
    }, [selectorProducts]);

    const handleScroll = () => {
        const productRef = panelProductsRef.current;
        if (productRef && productRef.scrollHeight - productRef.scrollTop === productRef.clientHeight) {
            if (!selectorProducts.products.isLoading) {
                setSpinning(true);
                setTimeout(() => {
                    setParams({ limit: dataProducts.data.length + 20, skip: 0 })
                    setSpinning(false);
                }, 1000);
            }
        }
    };

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        if (value !== '') {
            dispatch(fetchSearchProducts({ q: value }));
        } else {
            dispatch(fetchProducts(params));
        }
    };


    return (
        <Layout>
            <HeaderCM props={'Title'} />
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout-product">
                <Search className='input-search' placeholder="Enter name product" onSearch={onSearch} enterButton />

                <div className='panel-products' ref={panelProductsRef} onScroll={handleScroll} >
                    {dataProducts && dataProducts?.data?.length > 0 ? (
                        dataProducts?.data?.map((product: ProductTypes) => (
                            <Card
                                key={product.id}
                                className='card-product'
                                hoverable
                                style={{ width: 250 }}
                                cover={<img alt="example" src={product?.images[0]} />}
                            >
                                <Meta title={product?.title} description={product?.description} />
                            </Card>
                        ))
                    ) : (
                        <NoData />
                    )}

                </div>
            </Content>
            {spinning && <Spin spinning={spinning} />
            }
        </Layout>
    );
};

export default Products;
