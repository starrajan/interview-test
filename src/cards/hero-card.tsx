import React from "react";
import { Container } from "./style";
import Mango from "../assets/images/Mango.jpg";
const HeroCard = (props: any) => {
  return (
    <Container {...props}>
      <div>
        <h2>Lorem ipsum </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          iusto.
        </p>
      </div>
      <img src={Mango} alt="" />
    </Container>
  );
};

export default HeroCard;
