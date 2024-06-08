import {Collapse, Form, Input} from 'antd';
import {memo} from 'react';

import {FieldType, MarketplaceFormType} from './types';

const TEXT_FOR_DROPDOWN = {
    APIkey: `Перейдите в <a href="https://www.ozon.ru/ozonid" target="_blank" rel="noopener noreferrer">личный кабинет Ozon Seller</a>. Нажмите "Сгенерировать ключ", впишите название, выберите "Администратор" и нажмите "Сгенерировать". Скопируйте ключ и вставьте в форму.`,
    ClientId: `Перейдите в <a href="https://www.ozon.ru/ozonid" target="_blank" rel="noopener noreferrer">личный кабинет Ozon Seller</a>. Скопируйте Client ID и вставьте в форму.`,
    token: `Перейдите <a href="https://oauth.yandex.ru/" target="_blank" rel="noopener noreferrer">по ссылке</a>. Подтвердите вход и скопируйте токен в форму`
};

const MarketplaceForm = memo<MarketplaceFormType>(function MarketplaceForm({selectedMarketplace}) {
    switch (selectedMarketplace) {
        case 'ym':
            return (
                <div>
                    <Form.Item<FieldType> label="Введите токен" name="apiKey">
                        <Input />
                    </Form.Item>
                    <Collapse
                        className="mb-6"
                        items={[
                            {
                                key: 'apiKey',
                                label: 'Как получить токен?',
                                children: <p dangerouslySetInnerHTML={{__html: TEXT_FOR_DROPDOWN.token}} />
                            }
                        ]}
                    />
                </div>
            );
        case 'ozon':
            return (
                <div>
                    <Form.Item<FieldType> label="Введите название магазина" name="place">
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label="Введите API key" name="apiKey">
                        <Input />
                    </Form.Item>
                    <Collapse
                        className="mb-6"
                        items={[
                            {
                                key: 'APIkey',
                                label: 'Как получить API key?',
                                children: <p dangerouslySetInnerHTML={{__html: TEXT_FOR_DROPDOWN.APIkey}} />
                            }
                        ]}
                    />
                    <Form.Item<FieldType> label="Введите Client_ID" name="clientId">
                        <Input />
                    </Form.Item>
                    <Collapse
                        className="mb-6"
                        items={[
                            {
                                key: 'clientId',
                                label: 'Как получить Client ID?',
                                children: <p dangerouslySetInnerHTML={{__html: TEXT_FOR_DROPDOWN.ClientId}} />
                            }
                        ]}
                    />
                </div>
            );
        default:
            return null;
    }
});

export default MarketplaceForm;
