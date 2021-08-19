import React from "react";
import { Layout } from "antd";

import IconMenu from '../../../../Icons/Menu';
import IconTrackfy from '../../../../Icons/Trackfy';

const { Header } = Layout;


const SideBarHeader: React.FC = () => {

  return (
    <Header className="menu-header" style={{ padding: 3 }}>
      <div className="header-icon">
          <IconMenu className="menu-icon" onClick="" />
      </div>
      <IconTrackfy className="menu-system-title" />
    </Header>
  )
}

export default SideBarHeader;
