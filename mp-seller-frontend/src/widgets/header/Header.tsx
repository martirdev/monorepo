import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PATHS = {
    table: '/',
    places: '/places'
};

const items: MenuProps['items'] = [
    {
        label: <Link to={PATHS.table}>Таблица КТ</Link>,
        key: 'product-card-table',
        title: 'Таблица карточек товаров'
    },
    {
        label: <Link to={PATHS.places}>Магазины</Link>,
        key: 'Shops',
        title: 'Добавление магазинов, расположенных на маркетплейсах'
    }
];

const Header: React.FC = () => {
    const [current, setCurrent] = useState('product-card-table');

    const onClick: MenuProps['onClick'] = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="flex w-full justify-center"
        />
    );
};

export {Header};
