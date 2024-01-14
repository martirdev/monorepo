import {Col, Row} from 'antd';
import {flatten} from 'lodash';
import {memo, useMemo} from 'react';
import {NavLink} from 'react-router-dom';

import {MainItemCard} from '_features/main-item-card';
import {ProductFilters} from '_features/product-filters';
import {useGetProductList} from '_shared/api/products';
import {Container} from '_shared/container';

const ProductsList = memo(function ProductsList() {
  const {data} = useGetProductList();
  const flattenProducts = useMemo(() => flatten(data), [data]);

  return (
    <div>
      <div className="flex flex-col gap-16 pb-24 pt-10">
        <Container px={3} className="w-full">
          <ProductFilters />
        </Container>
        <Container px={3} className="w-full">
          <Row
            gutter={[
              {xs: 12, sm: 12, md: 24},
              {xs: 40, sm: 40, md: 64}
            ]}
          >
            {flattenProducts.map(product => (
              <Col span={12} md={8} key={product.id}>
                <NavLink to={`product/${product.id}`} key={product.id}>
                  <MainItemCard
                    productId={product.id}
                    price={product.price}
                    image={product.image}
                    title={product.title}
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
});

export {ProductsList};
