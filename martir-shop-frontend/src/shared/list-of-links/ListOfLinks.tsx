import {memo} from 'react';
import {Link} from 'react-router-dom';

import {cn} from '_utils/cn';

type ListOfLinksPropsType = {
  title: string;
  links: Array<{label: string; url: string; isBlank?: boolean}>;
  className?: string;
};

const ListOfLinks = memo<ListOfLinksPropsType>(function ListOfLinks({title, links, className}) {
  return (
    <div
      className={cn('whitespace-nowrap', {
        'w-[260px]': !className,
        [className as string]: !!className
      })}
    >
      <div>
        <span className="text-bold text-common-dark-gray">{title}</span>
      </div>
      <div className="mt-6">
        {links.map(({label, url, isBlank}) => (
          <div key={url} className="mt-4 ">
            <Link to={url} target={isBlank ? '_blank' : undefined} className="text-paragraph text-common-light-gray">
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

export {ListOfLinks};
