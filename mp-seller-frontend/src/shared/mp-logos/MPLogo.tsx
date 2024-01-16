import { memo, useMemo } from "react";
import iconOzon from "./ozon-logo.svg";
import iconYM from "./logo-yandexmarket.svg";

type MarketplaceIconType = {
    type: string;
    className?: string;
};

const getIconByType = (type: string) => {
    switch (type) {
        case "ym":
            return iconYM;
        case "ozon":
            return iconOzon;
    }
};

export const MarketplaceIcon = memo<MarketplaceIconType>(
    ({ type, className }) => {
        const icon = useMemo(() => getIconByType(type), [type]);

        return <img src={icon} className={className} />;
    }
);
