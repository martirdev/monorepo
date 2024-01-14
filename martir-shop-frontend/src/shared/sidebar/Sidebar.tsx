import {Drawer} from 'antd';
import {memo} from 'react';

import {SidebarType} from './types';

const Sidebar = memo<SidebarType>(function Modal({isOpen, onClose, footer, children}) {
  return (
    <Drawer
      onClose={onClose}
      open={isOpen}
      width={620}
      footer={footer}
      styles={{body: {paddingTop: 0, paddingBottom: 0}}}
    >
      <div style={{paddingTop: 24, paddingBottom: 24}}>{children}</div>
    </Drawer>
  );
});

export {Sidebar};
