import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px;
`;
export const Logo = styled.div`
  margin-bottom: 15px;
  > span:first-child {
    display: inline-block;
    height: 15px;
    width: 15px;
    background-color: black;
    border-radius: 50px;
  }
  > span:nth-child(2) {
    display: inline-block;
    height: 15px;
    width: 2px;
    background-color: black;
    margin: 0 15px;
  }
`;
export const NutritionListContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
`;
export const NutritionFactTitle = styled.h3<any>`
  font-size: ${(props) => props.fontSize};
  margin: 15px 0;
`;
export const LineStyle = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
`;
export const ProcessTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 30px;
  span:first-child {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: black;
    margin-right: 30px;
    border-radius: 15px;
  }
`;
export const ProcessContainer = styled.div`
  iframe {
    margin-top: 20px;
    border-radius: 20px;
  }
`;
export const NameCard = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  h4 {
    margin-right: 40px;
  }
`;
export const FarmarCard = styled.div`
  background-color: #eff8f7;
  padding: 10px;
  border-radius: 20px;
  div:first-child {
    height: 50px;
    width: 50px;
    background-color: black;
    border-radius: 50%;
    margin-right: 30px;
  }
  display: flex;
  align-items: center;
`;
export const CarouselContainer = styled.div`
  position: relative;
  margin-top: 50px;
`;
export const Prev = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 19px;
  border-radius: 30px;
  margin-top: -22px;
  color: white;
  transition: 0.6s ease;

  user-select: none;
  left: 0;
  img {
    transform: rotate(90deg);
  }

  background-color: rgba(0, 0, 0, 0.4);
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const Next = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 19px;
  margin-top: -22px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  transition: 0.6s ease;

  user-select: none;
  right: 0;

  img {
    transform: rotate(-90deg);
  }

  background-color: rgba(0, 0, 0, 0.4);
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const fade = keyframes`
from {
  opacity: 0.4;
}
to {
  opacity: 1;
}
`;
export const Carousel = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  img {
    width: 250px;
    height: 150px;
    border: 1px solid black;
  }
  -webkit-animation-name: ${fade};
  -webkit-animation-duration: 1.5s;
  animation-name: ${fade};
  animation-duration: 1.5s;
`;
export const InfoContainer = styled.div`
  margin-top: 70px;
`;
export const InfoCard = styled.div`
  img {
    height: 60px;
    margin-right: 40px;
    border-radius: 30px;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 40px;
  }
`;
export const SubContainer = styled.div`
  padding-left: 70px;
  border-left: 2px solid gray;
`;
