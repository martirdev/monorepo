import {CloseOutlined} from '@ant-design/icons';
import {Drawer, Segmented, Space} from 'antd';
import {Button, Dropdown} from 'antd';
import {memo, useCallback, useMemo, useState} from 'react';

import GeneralInfoAboutProduct from './GeneralInfo';
import OzonInfo from './OzonInfo';
import YMinfo from './YMinfo';
import {AddNewProductSidebarType} from './types';

const MP_SERVICES = {
    ym: 'Яндекс.Маркет',
    ozon: 'Озон'
};
const MP_SERVICES_OPTIONS = Object.entries(MP_SERVICES).map(([key, label]) => ({key, label}));

const AddNewProductSidebar = memo<AddNewProductSidebarType>(function AddNewProductSidebar({onClose, open}) {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    const [selectedForm, setSelectedFormOption] = useState('common');

    const itemsWithSelect = MP_SERVICES_OPTIONS.map(item => ({
        ...item,
        disabled: selected[item.key],
        onClick: ({key}) => {
            setSelected(prev => {
                return {...prev, [key]: true};
            });
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

    const formBySelectedService = useMemo(() => {
        switch (selectedForm) {
            case 'common':
                return <GeneralInfoAboutProduct />;
            case 'ym':
                return <YMinfo />;
            case 'ozon':
                return <OzonInfo />;
        }
    }, [selectedForm]);

    return (
        <Drawer
            title="Создание КТ"
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
                {formBySelectedService}
            </div>
        </Drawer>
    );
});

export default AddNewProductSidebar;
