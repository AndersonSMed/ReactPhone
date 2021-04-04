import React from 'react';
import Button from '@material-ui/core/Button';

export interface Props {
  onClick: Function,
  onCall: Function
}

export default function Dialpad(props:Props) {
  const { onClick, onCall } = props;
  const padNumbers = Array.from('1234567890');

  return (
    <React.Fragment>
      {padNumbers.map(padNumber => <Button key={`pad-${padNumber}`}>{padNumber}</Button>)}
    </React.Fragment>
  );
}