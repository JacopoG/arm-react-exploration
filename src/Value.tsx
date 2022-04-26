import React from 'react';

export class Value extends React.Component<any> {
  render () {
    return (
      <div className="inline-flex flex-col items-center">
        <div>{this.props.children}</div>
        { this.props.label && <div>{this.props.label}</div> }
      </div>
    );
  }
}
