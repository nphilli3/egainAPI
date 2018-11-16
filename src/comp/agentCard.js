import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const AgentCard = (props) => {
  return (
      <Card body outline color="secondary">
        <CardTitle>{props.row.firstName}</CardTitle>
        <CardText>{props.row.lastName}</CardText>
        <div>{props.children}</div>

      </Card>
  );
};

export default AgentCard;