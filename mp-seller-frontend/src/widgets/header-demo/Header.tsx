import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PATHS = {
    main: '/demo',
    features: '#features',
    stats: '#stats',
    login: '/auth'
};

const items: MenuProps['items'] = [
    {
        label: <a href={PATHS.main}>Главная</a>,
        key: 'main',
        title: 'Главная'
    },
    {
        label: <a href={PATHS.features}>Функционал</a>,
        key: 'functions',
        title: 'Функционал'
    },
    {
        label: <a href={PATHS.stats}>Статистика</a>,
        key: 'stats',
        title: 'Статистика'
    },
    {
        label: <a href={PATHS.login}>Попробовать бесплатно</a>,
        key: 'try',
        title: 'Попробовать бесплатно'
    }
];

const HeaderDemo: React.FC = () => {
    const [current, setCurrent] = useState<string>();

    const onClick: MenuProps['onClick'] = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="demo flex w-full justify-center"
            style={{border: '#EB2F96'}}
        />
    );
};

export {HeaderDemo};
