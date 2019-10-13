import React from 'react';
import {
  Container,
  FlexContainer,
  FlexItem,
  List,
  BulletPoint,
  Img
} from './sectionOneStyles';

import { Text, BtnPadding } from '../showcase/showCaseStyles';
import img from '../../assets/shutterstock_696636346.jpg';
import { Button } from '../custom-btn/customBtnStyles';

const SectionOne = () => {
  let array = [1, 2, 3, 4];
  array.fill(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, tempore.',
    0
  );

  return (
    <Container>
      <FlexContainer>
        <FlexItem>
          <List>
            <Text fontSize='24px' color='#333'>
              Justo petentium te vix, scripta regione urbanitas
            </Text>
            <Text fontSize='12px' color='#333'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              magnam illum enim qui est, sed ad tempora aspernatur nobis
              reprehenderit omnis maiores incidunt, doloribus quos alias debitis
              animi possimus facere quasi voluptatum similique explicabo
              pariatur rerum! Eligendi, corporis dolor sed, nostrum ratione et
              ipsa reiciendis qui nisi pariatur alias dolore.
            </Text>
            {array.map((el, index) => (
              <BulletPoint key={index} fontSize='12px'>
                {el}
              </BulletPoint>
            ))}
            <BtnPadding>
              <Button>Learn more</Button>
            </BtnPadding>
          </List>
        </FlexItem>
        <FlexItem>
          <Img background={img}></Img>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
};

export default SectionOne;
