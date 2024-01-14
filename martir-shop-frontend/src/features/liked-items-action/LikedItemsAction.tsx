import {HeartIcon} from '@heroicons/react/solid';
import {memo} from 'react';

const LikedItemsAction = memo(function LikedItemsAction() {
  return (
    <div>
      <div className="relative flex h-6 w-6 cursor-pointer items-center justify-center fill-common-gray duration-200 ease-in-out hover:fill-common-light-gray">
        <HeartIcon fill="inherit" />
      </div>
    </div>
  );
});

export {LikedItemsAction};
