import {memo} from 'react';
import {Link} from 'react-router-dom';

import {CartItemsAction} from '_features/cart-items-action';
import {LikedItemsAction} from '_features/liked-items-action';
import {Container} from '_shared/container';
import {Logo} from '_shared/logo';

type HeaderPropsType = {};

const Header = memo<HeaderPropsType>(function Header() {
  return (
    <Container px={3} py={3} className="flex min-h-[68px] w-full items-center gap-4">
      <div className="mr-6 inline-block">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <Link to="/about">О Нас</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
      <div className="ml-auto flex items-center gap-8">
        <LikedItemsAction />
        <CartItemsAction />
      </div>
    </Container>
  );
});

export {Header};
