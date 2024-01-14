import {PropsWithChildren, memo} from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';

type LinkProps = PropsWithChildren<NavLinkProps>;

const Link = memo<LinkProps>(function Link({children, ...props}) {
  return (
    <NavLink
      className="text-paragraph text-primary-light visited:text-primary-dark hover:text-primary-normal"
      {...props}
    >
      {children}
    </NavLink>
  );
});

export {Link};
