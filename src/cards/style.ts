import styled from "styled-components";

export const Container = styled.div<any>`
  background-color: ${(props) => props.bgColor};
  padding: 60px 40px 50px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-between;
  text-align: ${(props) => props.textAlign};
  h2 {
    font-size: 40px;
    color: ${(props) => props.headFontColor};
  }
  p {
    font-size: 16px;
    color: ${(props) => props.paraFontColor};
  }
  img {
    width: 300px;
    height: 200px;
  }
`;
export const ListCardContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  p {
    margin: 10px 0;
    font-weight: 900;
  }
  p:first-child {
    font-weight: ${(props) => (props.light ? "400" : null)};
    margin-left: ${(props) => (props.light ? "15px" : null)};
  }
  border-top: ${(props) => (props.borderTop ? `1px solid gray` : null)};
`;
