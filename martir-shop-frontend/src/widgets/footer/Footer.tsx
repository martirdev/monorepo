import {memo} from 'react';

import {Container} from '_shared/container';
import {ListOfLinks} from '_shared/list-of-links';

import {GROUPS_OF_LINKS} from './consts';

const Footer = memo(function Footer() {
  return (
    <Container
      py={5}
      px={3}
      className="flex flex-col justify-center gap-12 bg-common-darkest-gray md:flex-row md:gap-4"
    >
      {GROUPS_OF_LINKS.map((data, i) => (
        <ListOfLinks {...data} key={i} />
      ))}
    </Container>
  );
});

export {Footer};
