import {Divider, Drawer, Form, Select} from 'antd';
import {memo} from 'react';

import FooterAddDrawer from './Footer';
import MarketplaceForm from './MarketplaceForm';
import {AddPlaceDrawerType, FieldType} from './types';

const options = [
    {value: 'ym', label: 'Яндекс.Маркет'},
    {value: 'ozon', label: 'ОЗОН'}
];

const AddPlaceDrawer = memo<AddPlaceDrawerType>(function AddPlaceDrawer({onClose, open, title}) {
    const [form] = Form.useForm<FieldType>();
    const marketpaceValue = Form.useWatch('marketpace', form);

    //В момент перезда на бекендовскую ручку решить, нужно ли выносить из компонента onFinish и onFinishFailed!
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Drawer title={title} onClose={onClose} open={open} width={480}>
            <Form
                form={form}
                name="addPlace"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className="flex h-full flex-col justify-between"
            >
                <div>
                    <Form.Item<FieldType> label="Выберите маркетплейс" name="marketpace">
                        <Select placeholder="Выберите маркетплейс из предложенных" options={options} />
                    </Form.Item>
                    <MarketplaceForm selectedMarketplace={marketpaceValue} />
                </div>

                <div>
                    <Divider />
                    <FooterAddDrawer onClose={onClose} />
                </div>
            </Form>
        </Drawer>
    );
});

export default AddPlaceDrawer;
