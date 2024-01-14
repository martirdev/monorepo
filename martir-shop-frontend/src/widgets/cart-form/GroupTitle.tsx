import {PropsWithChildren, memo} from 'react';

type GroupWithTitlePropsType = PropsWithChildren<{
  title: string;
  bodyClassName?: string;
}>;

const GroupWithTitle = memo<GroupWithTitlePropsType>(function GroupWithTitle({title, bodyClassName, children}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-page-title uppercase">{title}</div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
});

export {GroupWithTitle};
