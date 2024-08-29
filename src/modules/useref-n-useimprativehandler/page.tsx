import React from 'react';
import CartList, { CartRef } from './components/cart-list';
import { Container, Flex } from '@mantine/core';
import ProductListComponent from './components/product-list';

export default function UseRefAndUseImprativeHandlerPage() {
  const cartRef = React.useRef<CartRef>(null);
  console.log('parent page');

  return (
    <Container fluid maw="100dvw" miw="100dvw" mih="100dvh" p={16}>
      <Flex direction="row" gap={24}>
        <Flex flex={3} direction="column" gap={24} style={{ flexShrink: 0 }}>
          <ProductListComponent cartRef={cartRef} />
        </Flex>
        <Flex flex={1} direction="column" gap={24} style={{ flexShrink: 0 }}>
          <CartList ref={cartRef} />
        </Flex>
      </Flex>
    </Container>
  );
}
