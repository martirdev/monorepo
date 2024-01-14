import {theme as antdTheme} from 'antd';

export const ANTD_CONFIG = {
  components: {
    Select: {
      optionActiveBg: '#424242',
      optionSelectedBg: '#3691FC',
      colorIcon: '#fff'
    },
    Drawer: {
      footerPaddingInline: 24,
      footerPaddingBlock: 16
    }
  },
  token: {colorPrimary: '#3691FC', fontFamily: 'inherit'},
  algorithm: [antdTheme.darkAlgorithm]
};
