import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from 'react-accessible-accordion';

import { Product } from '~/interfaces/Products';

import * as S from './styles';

interface ProductsSeparatedByCategory {
  [key: string]: Product[];
}

interface ProductsProps {
  products: ProductsSeparatedByCategory;
}

export function AccordionProducts({ products }: ProductsProps) {
  const nameOfCategories = Object.keys(products);
  const productsOfCategories = Object.values(products);

  /*
    ['Salgados', 'Doces']

    [[{um produto completo}, {outro produto completo}], [{um produto completo}, {outro produto completo}]]
  */

  return (
    <S.Container>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {nameOfCategories.map((key, index) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <strong>{key}</strong>
              </AccordionItemButton>
            </AccordionItemHeading>

            {productsOfCategories[index].map(product => (
              <AccordionItemPanel>
                <p>{product.name}</p>
              </AccordionItemPanel>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </S.Container>
  );
}
