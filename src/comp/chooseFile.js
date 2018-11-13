import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ChooseFile extends React.Component {
  render() {
    return (

        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" accept=".csv, .json" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>


    );
  }
}
