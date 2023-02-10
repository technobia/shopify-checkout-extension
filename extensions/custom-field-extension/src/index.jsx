import React from 'react';
import {
  render,
  BlockStack,
  Text
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <BlockStack>
      <Text>Achetez directement auprès du fabricant</Text>
      <Text>Livraison gratuite à partir de 49 €</Text>
      <Text>Retours gratuits</Text>
      <Text>Service client personnalisé</Text>
    </BlockStack>
  );
}
