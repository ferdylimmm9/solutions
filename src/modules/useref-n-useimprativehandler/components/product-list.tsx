import { Button, Card, Flex, Text, Title } from '@mantine/core';
import { CartRef } from './cart-list';
import React from 'react';

export type ProductType = {
  id: string;
  price: number;
  name: string;
  description: string;
};

interface ProductListComponentProps {
  cartRef: React.RefObject<CartRef>;
}

const products: ProductType[] = [
  {
    id: '1f29b34b-5a3d-4c9e-8f3a-2a3e7308bfb3',
    price: 19.99,
    name: 'Wireless Mouse',
    description: 'A smooth and responsive wireless mouse.',
  },
  {
    id: '2d9c5e3f-1a3f-423a-9f94-d8a5d1fca0b5',
    price: 49.99,
    name: 'Mechanical Keyboard',
    description: 'A durable and tactile mechanical keyboard.',
  },
  {
    id: '37fca7d4-8e95-4a3b-bc8c-7d3f37b731c8',
    price: 29.99,
    name: 'Bluetooth Speaker',
    description: 'A compact speaker with powerful sound.',
  },
  {
    id: '4a0e5f1a-9b4e-4b7a-928f-4a3eaa8b6c1e',
    price: 14.99,
    name: 'USB-C Hub',
    description: 'A multi-port hub for all your USB-C needs.',
  },
  {
    id: '592f4d2a-3e1c-4f1f-8c8a-2d9f5b5c3a4a',
    price: 9.99,
    name: 'Portable Charger',
    description: 'A high-capacity portable charger for your devices.',
  },
  {
    id: '66c9b5e7-2a3b-4a5f-9d8c-8a2f4e3b5c7a',
    price: 89.99,
    name: 'Noise-Canceling Headphones',
    description: 'Over-ear headphones with active noise cancellation.',
  },
  {
    id: '7b5e2c4f-4a9d-4f1e-8d8c-9a4b2d3f5a6a',
    price: 24.99,
    name: 'Smartphone Stand',
    description: 'A sturdy stand for hands-free smartphone use.',
  },
  {
    id: '8f3a5c9d-3b2f-4a7e-9d4c-2b9f3a5e1c7a',
    price: 199.99,
    name: '4K Monitor',
    description: 'A high-resolution 4K monitor for clear visuals.',
  },
  {
    id: '9e3f2a5b-6a7d-4f1a-8c9f-3d4b5e2a7c1a',
    price: 39.99,
    name: 'External Hard Drive',
    description: 'A reliable external hard drive with 1TB of storage.',
  },
  {
    id: 'ac7f2d5b-1a3b-4c9e-8d4f-7f3b5a2e9c1f',
    price: 59.99,
    name: 'Wireless Earbuds',
    description: 'Compact wireless earbuds with excellent sound quality.',
  },
];

export default function ProductListComponent(props: ProductListComponentProps) {
  const onClickAdd = React.useCallback(
    (product: ProductType) => () => {
      props.cartRef.current?.onAddCart(product);
    },
    [props.cartRef],
  );

  console.log('product list');
  return (
    <>
      <Title order={3}> Product List</Title>
      <Flex direction="row" gap={16} wrap="wrap">
        {products.map((product) => {
          return (
            <Card
              withBorder
              key={product.id}
              style={{
                flexShrink: 0,
              }}
              w={200}
              h={250}
            >
              <Flex direction="column" gap={8} h="100%" justify="space-between">
                <Title flex={1} order={5}>
                  {product.name}
                </Title>
                <Text flex={1} fw={600}>
                  Price: Rp{product.price}
                </Text>
                <Text flex={2}>{product.description}</Text>
                <Button flex={1} onClick={onClickAdd(product)}>
                  Add Product
                </Button>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </>
  );
}
