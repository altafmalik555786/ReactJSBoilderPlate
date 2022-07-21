import React from 'react';
import Routing from '../router_service'
import { observer } from 'mobx-react';
import MenuBar from '@components/menu-bar';

const DefaultLayout = observer(() => {


  return (
    <div>
      <MenuBar/>
      <Routing/>
    </div>
  );

})
export default DefaultLayout;
