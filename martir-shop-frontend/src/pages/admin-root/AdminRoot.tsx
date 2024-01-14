import {Input as AntInput} from 'antd';
import {ChangeEvent, useCallback, useState} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';

import {UserCard} from '_entities/user-card';
import {Container} from '_shared/container';
import {VerticalNav} from '_shared/vertical-nav';
import {Header} from '_widgets/header';

import {GROUPS} from './consts';

const AdminRoot = function AdminRoot() {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), [setSearch]);

  return (
    <>
      <div className="flex h-full">
        <Container
          px={{def: 2, lg: 3}}
          py={3}
          className="w-[64px] shrink-0 border-r border-common-dark-gray bg-common-darkest-gray lg:w-[350px]"
        >
          <div className="flex h-full flex-col gap-8">
            <AntInput placeholder="Раздел..." onChange={handleSearch} value={search} />
            <VerticalNav groups={GROUPS} className="flex-1" search={search} />
            <UserCard />
          </div>
        </Container>
        <div className="flex w-0 flex-auto flex-col">
          <Header />
          <div className="w-full flex-1 overflow-auto border-t border-common-dark-gray">
            <Outlet />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default AdminRoot;
