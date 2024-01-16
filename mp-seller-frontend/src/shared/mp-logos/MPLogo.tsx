import {memo, useMemo} from 'react';

import iconYM from './logo-yandexmarket.svg';
import iconOzon from './ozon-logo.svg';

type MarketplaceIconType = {
    type: string;
    className?: string;
};

const getIconByType = (type: string) => {
    switch (type) {
        case 'ym':
            return iconYM;
        case 'ozon':
            return iconOzon;
    }
};

export const MarketplaceIcon = memo<MarketplaceIconType>(function MarketplaceIcon({type, className}) {
    const icon = useMemo(() => getIconByType(type), [type]);

    return <img src={icon} className={className} />;
});
