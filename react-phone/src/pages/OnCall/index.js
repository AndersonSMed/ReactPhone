import React from 'react';
import {CallInfo} from '../../components/organisms/CallInfo';
import {CallActions} from '../../components/organisms/CallActions';
import {Divider} from '../../components/molecules/Divider';

export const OnCall = () => (
  <React.Fragment>
    <CallInfo />
    <Divider />
    <CallActions />
  </React.Fragment>
);
