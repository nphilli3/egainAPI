
import React from 'react';
import { Card, CardTitle, CardText, Input } from 'reactstrap';

const MyCard = (props) => {
  return (
      <Card body outline color="secondary">
        <CardTitle>{props.cardTitle}</CardTitle>
        <CardText>{props.cardText}</CardText>
        <div>{props.children}</div>

      </Card>
  );
};

export default MyCard;
