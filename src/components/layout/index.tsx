import React from 'react';
import Routing from '../router_service'
import { observer } from 'mobx-react';

const DefaultLayout = observer(() => {


  return (
    <>
      <Routing />
    </>
  );

})
export default DefaultLayout;
