import * as S from './styles'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export function AccordionProducts() {
  return(
    <S.Container>
      <Accordion 
        allowZeroExpanded={true}
        allowMultipleExpanded={true}
      >

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <strong>Almoço</strong>
            </AccordionItemButton>
          </AccordionItemHeading>
          
          <AccordionItemPanel>
            <p>
              Comidinha boa!
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <strong>Bebidas</strong>
            </AccordionItemButton>
          </AccordionItemHeading>
          
          <AccordionItemPanel>
            <p>
              Bebidinha boa!
            </p>
          </AccordionItemPanel>
        </AccordionItem>

      </Accordion>
    </S.Container>
  )
}