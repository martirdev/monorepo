import {memo} from 'react';

import {Button} from '_shared/button';
import {Container} from '_shared/container';
import {Link} from '_shared/link';

const NotFound = memo(function NotFound() {
  return (
    <Container px={3} className="flex items-center justify-center ">
      <div className="mt-[100px] flex w-1/3 flex-col items-center">
        <h1 className="mb-10 text-page-title uppercase">Ой, товар не найден...</h1>
        <p className="mb-6 text-paragraph-2">
          Похоже, товар раскупили или у нас произошла ошибка... <br /> Но у нас много интересных товаров, возвращайтесь
          в каталог и выберите подходящий.
        </p>
        <Link to={'/'}>
          <Button size="large">В каталог</Button>
        </Link>
      </div>
    </Container>
  );
});

export default NotFound;
