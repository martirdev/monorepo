import {Collapse, Form, Input} from 'antd';
import {memo} from 'react';

import {FieldType, MarketplaceFormType} from './types';

const TEXT_FOR_DROPDOWN = {
    APIkey: `Перейдите в личный кабинет Ozon Seller. Нажмите "Сгенерировать ключ", впишите название, выберите "Администратор" и нажмите "Сгенерировать". Скопируйте ключ и вставьте в форму.`,
    ClientId: 'Перейдите в личный кабинет Ozon Seller. Скопируйте Client ID и вставьте в форму.',
    token: 'Перейдите по ссылке. Подтвердите вход и скопируйте токен в форму'
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
                                children: <p>{TEXT_FOR_DROPDOWN.token}</p>
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
                                children: <p>{TEXT_FOR_DROPDOWN.APIkey}</p>
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
                                children: <p>{TEXT_FOR_DROPDOWN.ClientId}</p>
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
