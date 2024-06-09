import {CloseOutlined} from '@ant-design/icons';
import {Button, Drawer, Dropdown, Form, Segmented, Space} from 'antd';
import {memo, useCallback, useMemo, useState} from 'react';

import {trpc} from '_shared/api/trpc';

import GeneralInfoAboutProduct from './GeneralInfo';
import OzonInfo from './OzonInfo';
import YMinfo from './YMinfo';
import {AddNewProductSidebarType, GeneralFieldsType, OzonParamsRequest} from './types';

const MP_SERVICES = {
    ym: 'Яндекс.Маркет',
    ozon: 'Озон'
};
const MP_SERVICES_OPTIONS = Object.entries(MP_SERVICES).map(([key, label]) => ({key, label}));

const AddNewProductSidebar = memo<AddNewProductSidebarType>(function AddNewProductSidebar({onClose, open}) {
    const [form] = Form.useForm();
    const {mutate, isLoading} = trpc.createProduct.useMutation();
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [selectedForm, setSelectedFormOption] = useState('common');

    const itemsWithSelect = MP_SERVICES_OPTIONS.map(item => ({
        ...item,
        disabled: selected[item.key],
        onClick: ({key}) => {
            setSelected(prev => ({...prev, [key]: true}));
            setSelectedFormOption(key);
        }
    }));

    const deleteMPOption = useCallback(
        (value: string) => {
            setSelected(prev => {
                const nextValue = {...prev};
                delete nextValue[value];

                return nextValue;
            });
            if (selectedForm === value) {
                setSelectedFormOption('common');
            }
        },
        [selectedForm]
    );

    const segmentedOptions = useMemo(() => {
        const convertedOptions = Object.keys(selected).map(value => ({
            label: (
                <Space>
                    <CloseOutlined onClick={() => deleteMPOption(value)} />
                    {MP_SERVICES[value]}
                </Space>
            ),
            value
        }));
        return [{label: 'Общие ', value: 'common'}, ...convertedOptions];
    }, [selected, deleteMPOption]);

    const createProduct = (data: GeneralFieldsType) => {
        const newData = {
            ...data,
            ym: {
                place: data.ym.place,
                offerId: data.offer_id,
                name: data.name,
                category: data.ym.categoryName,
                marketCategoryId: data.ym.category,
                pictures: data.images,
                barcodes: data.barcode ? [data.barcode] : undefined,
                vendor: data.vendor,
                description: data.description,
                manufacturerCountries: data.geo_names,
                weightDimensions: {
                    length: data.depth,
                    width: data.width,
                    height: data.height,
                    weight: data.weight
                },
                tags: data.tags,
                parameterValues: [],
                basicPrice: {
                    value: Number(data.price),
                    currencyId: data.currency_code === 'RUB' ? ('RUR' as const) : data.currency_code,
                    discountBase: data.old_price ? Number(data.old_price) : undefined
                }
            },
            ozon: data.ozon.attributes
                ? {
                      ...data.ozon,
                      barcode: data.barcode,
                      color_image: data.color_image,
                      currency_code: data.currency_code,
                      depth: data.depth,
                      dimension_unit: data.dimension_unit,
                      geo_names: data.geo_names,
                      height: data.height,
                      image_group_id: data.image_group_id,
                      images: data.images,
                      images360: data.images360,
                      name: data.name,
                      offer_id: data.offer_id,
                      old_price: data.old_price,
                      price: data.price,
                      primary_image: data.primary_image,
                      service_type: data.service_type,
                      vat: data.vat,
                      weight: data.weight,
                      weight_unit: data.weight_unit,
                      width: data.width,
                      attributes: Object.entries(data.ozon.attributes).reduce<OzonParamsRequest>(
                          (acc, [id, {value, dictionary_value_id}]) => {
                              if (value) {
                                  acc.push({
                                      complex_id: 0,
                                      id: Number(id),
                                      values: [
                                          {
                                              dictionary_value_id,
                                              value
                                          }
                                      ]
                                  });
                              }

                              return acc;
                          },
                          []
                      )
                  }
                : undefined
        };

        mutate(newData);
    };

    return (
        <Drawer
            title="Создание товара"
            onClose={onClose}
            open={open}
            width={520}
            extra={
                <Dropdown
                    menu={{items: itemsWithSelect}}
                    placement="bottomRight"
                    disabled={MP_SERVICES_OPTIONS.length === Object.keys(selected).length}
                >
                    <Button>Добавить МП</Button>
                </Dropdown>
            }
        >
            <div className="flex flex-col gap-4">
                <Segmented
                    options={segmentedOptions}
                    onChange={value => setSelectedFormOption(value.toString())}
                    value={selectedForm}
                    block
                />
                <Form autoComplete="off" form={form} onFinish={createProduct} layout="vertical">
                    <div hidden={selectedForm !== 'common'}>
                        <GeneralInfoAboutProduct form={form} />
                    </div>
                    <div hidden={selectedForm !== 'ym'}>
                        <YMinfo form={form} />
                    </div>
                    <div hidden={selectedForm !== 'ozon'}>
                        <OzonInfo form={form} />
                    </div>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Сохранить
                    </Button>
                </Form>
            </div>
        </Drawer>
    );
});

export default AddNewProductSidebar;
