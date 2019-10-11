import styled from 'styled-components';

export const ImgOne = styled.div`
  background: ${props => `url(${props.background}) no-repeat 50% 25% / cover`};
  height: 440px;
`;

export const Box = styled.div`
  background: #333;
  height: 440px;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  text-align: center;
`;

export const ItemMiddle = styled.div`
  align-items: left;
  width: 1080px;
  background: red;
`;
