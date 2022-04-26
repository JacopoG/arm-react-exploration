import React from 'react';
import { Value } from './Value';

export class LabFormula extends React.Component<any> {
  render () {
    return (
      <div className="flex">
        <Value label="Int">{this.props.int}</Value>
        +
        <Value label="Theory">{this.props.theory}</Value>
        +
        <Value label="Aura">{this.props.aura}</Value>
        =
        <Value label="Total">{this.props.int + this.props.theory + this.props.aura}</Value>
      </div>
    );
  }
}
