import {Divider, Drawer, Form, Select, notification} from 'antd';
import {memo} from 'react';

import {trpc} from '_shared/api/trpc';

import FooterAddDrawer from './Footer';
import MarketplaceForm from './MarketplaceForm';
import {AddPlaceDrawerType, FieldType} from './types';

const options = [
    {value: 'ym', label: 'Яндекс.Маркет'},
    {value: 'ozon', label: 'ОЗОН'}
];

const AddPlaceDrawer = memo<AddPlaceDrawerType>(function AddPlaceDrawer({onClose, open, title}) {
    const [form] = Form.useForm<FieldType>();
    const [api, contextHolder] = notification.useNotification();
    const marketpaceValue = Form.useWatch('type', form);
    const {mutate, isLoading} = trpc.createMarketplaceKey.useMutation({
        onError: () => {
            api.error({
                message: 'Ошибка сервера',
                description: 'Проверьте правильность заполненых полей или обратитесь к администратору'
            });
        },
        onSuccess: () => {
            api.open({
                message: 'Успешно',
                description: 'Данные успешно добавлены'
            });
            form.resetFields();
            onClose();
        }
    });

    const onFinish = values => {
        mutate(values);
    };

    return (
        <>
            {contextHolder}
            <Drawer title={title} onClose={onClose} open={open} width={480}>
                <Form
                    form={form}
                    name="addPlace"
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    className="flex h-full flex-col justify-between"
                >
                    <div>
                        <Form.Item<FieldType> label="Выберите маркетплейс" name="type">
                            <Select placeholder="Выберите маркетплейс из предложенных" options={options} />
                        </Form.Item>
                        <MarketplaceForm selectedMarketplace={marketpaceValue} />
                    </div>

                    <div>
                        <Divider />
                        <FooterAddDrawer onClose={onClose} isLoading={isLoading} />
                    </div>
                </Form>
            </Drawer>
        </>
    );
});

export default AddPlaceDrawer;
