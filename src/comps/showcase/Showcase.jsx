import React from 'react';
import { ImgOne, Box, Item, ItemMiddle } from './showCaseStyles';
import img from '../../assets/shutterstock_407632243.jpg';

const Showcase = () => {
  return (
    <ImgOne background={img}>
      <Box>
        <Item>
          <i className='fas fa-arrow-left'></i>
        </Item>
        <ItemMiddle>
          <ul>
            <li>Title</li>
            <li>Subtitle</li>
            <li>Button</li>
          </ul>
        </ItemMiddle>
        <Item>
          <i className='fas fa-arrow-right'></i>
        </Item>
      </Box>
    </ImgOne>
  );
};

export default Showcase;
