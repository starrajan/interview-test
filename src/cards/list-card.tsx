import React from "react";
import { ListCardContainer } from "./style";
const ListCard = (props: any) => {
  const { nutrition, size } = props;
  return (
    <ListCardContainer {...props}>
      <p>{nutrition}</p>
      <p>{size}</p>
    </ListCardContainer>
  );
};
export default ListCard;
