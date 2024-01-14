import {memo, useMemo} from 'react';
import {NavLink} from 'react-router-dom';

import {Icons} from '_shared/consts';
import {cn} from '_utils/cn';

import {VerticalNavPropsType} from './types';

const VerticalNav = memo<VerticalNavPropsType>(function VerticalNav({groups, className, search}) {
  const searchRegexp = useMemo(() => new RegExp(search, 'i'), [search]);

  return (
    <div
      className={cn('flex flex-col gap-8 overflow-auto', {
        [className]: !!className
      })}
    >
      {groups.map(group => (
        <div className="flex flex-col gap-5" key={group.name}>
          <div className="hidden text-bold text-common-gray lg:block">{group.name}</div>
          <div className="flex flex-col gap-4">
            {group.links.map(link => {
              const Icon = Icons[link.icon];
              if (!searchRegexp.test(link.label)) {
                return null;
              }

              return (
                <NavLink
                  to={link.to}
                  key={link.to}
                  className={({isActive}) =>
                    cn(
                      'flex min-h-[32px] items-center justify-center gap-4 text-paragraph text-common-gray duration-200 ease-in-out hover:text-common-white lg:justify-start',
                      {['text-white']: isActive}
                    )
                  }
                >
                  <div className="h-6 w-6">
                    <Icon />
                  </div>
                  <div className="hidden items-center lg:flex">{link.label}</div>
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
});

export {VerticalNav};
