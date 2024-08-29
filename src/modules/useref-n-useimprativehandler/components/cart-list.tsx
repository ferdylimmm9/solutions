import { Button, Card, Flex, Text, Title } from '@mantine/core';
import React from 'react';
import { ProductType } from './product-list';
import { useImmer } from 'use-immer';

export interface CartListProps {}

export type CartType = {
  id: string;
  name: string;
  qty: number;
  price: number;
};

export type CartRef = {
  onAddCart: (product: ProductType) => void;
};

const CartList = React.forwardRef(
  (props: CartListProps, ref: React.ForwardedRef<CartRef>) => {
    const [cart, setCart] = useImmer<CartType[]>([]);

    React.useImperativeHandle(
      ref,
      () => {
        return {
          onAddCart(product) {
            setCart((draft) => {
              const cart = draft.find((cart) => cart.id === product.id);
              if (cart) {
                cart.qty = cart.qty + 1;
                cart.price = product.price;
              } else {
                draft.push({
                  id: product.id,
                  name: product.name,
                  qty: 1,
                  price: product.price,
                });
              }
            });
          },
        };
      },
      [setCart],
    );

    const onRemoveCart = (id: string) => () => {
      setCart((draft) => {
        const findIndex = draft.findIndex((cart) => cart.id === id);
        if (findIndex >= 0) {
          const cart = draft[findIndex];
          if (cart.qty > 1) {
            cart.qty = cart.qty - 1;
          } else {
            draft.splice(findIndex, 1);
          }
        }
      });
    };

    console.log('render cart');

    return (
      <>
        <Title order={3}>Cart List</Title>
        {cart.length === 0 && <Text>No Data</Text>}
        {cart.map((cart) => {
          return (
            <Card withBorder key={cart.id}>
              <Flex direction="column" gap={4} justify="space-between">
                <Title order={5}>{cart.name}</Title>
                <Text>Qty: {cart.qty}</Text>
                <Text>Total: Rp{cart.price * cart.qty}</Text>
                <Button color="red" onClick={onRemoveCart(cart.id)}>
                  Remove
                </Button>
              </Flex>
            </Card>
          );
        })}
      </>
    );
  },
);

export default CartList;
