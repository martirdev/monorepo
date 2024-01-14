import {Button} from 'antd';
import {memo} from 'react';
import {Link} from 'react-router-dom';

type EmptyPagePropsType = {
  title: string;
  description: string;
  primaryButton: {
    link: string;
    title: string;
  };
};

const EmptyPage = memo(function EmptyPage({title, description, primaryButton}: EmptyPagePropsType) {
  return (
    <div className="flex h-full w-full justify-center text-center">
      <div className="flex w-[500px] flex-col items-center py-10">
        <h1 className="mb-6 text-page-title uppercase">{title}</h1>
        <p className="mb-4 text-paragraph">{description}</p>
        <Link to={primaryButton.link}>
          <Button size="large" type="primary">
            {primaryButton.title}
          </Button>
        </Link>
      </div>
    </div>
  );
});

export {EmptyPage};
