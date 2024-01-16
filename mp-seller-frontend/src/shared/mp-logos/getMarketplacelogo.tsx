import iconOzon from "./ozon-logo.svg";
import iconYM from "./logo-yandexmarket.svg";

export const getMarketplacelogo = (marketplaceName: string) => {
    switch (marketplaceName) {
        case "ym":
            return <img src={iconYM} className="w-5" />;
        case "ozon":
            return <img src={iconOzon} className="w-5" />;
    }
};
