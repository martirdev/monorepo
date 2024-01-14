import {Button, Modal} from 'antd';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import {LABELS} from './consts';

type SizeGuidePropsType = {
  isOpened: boolean;
  closeModal: () => void;
};

const SizeGuide = memo<SizeGuidePropsType>(function SizeGuide({isOpened, closeModal}) {
  return (
    <Modal
      title={LABELS.TITLE}
      open={isOpened}
      footer={[
        <Button key="submit" type="primary" onClick={closeModal}>
          {LABELS.CLOSE}
        </Button>
      ]}
    >
      <div>{/* ASYNC_LOAD_TABLE */}</div>
      <div className="flex justify-between gap-2">
        <span className="self-center">{LABELS.NEED_HELP}</span>
        <Link to="/contacts" target="_blank">
          <Button className="self-end">{LABELS.CONTACT}</Button>
        </Link>
      </div>
    </Modal>
  );
});

export {SizeGuide};
