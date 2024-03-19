import {CloseOutlined} from '@ant-design/icons';
import {Drawer, Segmented, Select} from 'antd';
import {memo, useMemo, useState} from 'react';

import GeneralInfoAboutProduct from './GeneralInfo';
import OzonInfo from './OzonInfo';
import YMinfo from './YMinfo';
import {AddNewProductSidebarType, SelectedOptiontype} from './types';

const AddNewProductSidebar = memo<AddNewProductSidebarType>(function AddNewProductSidebar({onClose, open}) {
    const [mpOptions, setMPOptions] = useState([
        {label: 'Яндекс.Маркет', value: 'ym'},
        {label: 'Озон', value: 'ozon'}
    ]);

    const [formOption, setFormOption] = useState('common');

    const [segmentedOptions, setSegmentedOptions] = useState<SelectedOptiontype>([{label: 'Общие ', value: 'common'}]);

    const deleteMPOption = (value: string) => {
        // Находим выбранный элемент в segmentedOptions
        const selectedOption = segmentedOptions.find(option => option.value === value);

        // Удаляем выбранный элемент из segmentedOptions
        setSegmentedOptions(prevOptions => prevOptions.filter(option => option.value !== value));

        // Удаляем поле icon перед добавлением элемента обратно в MP_OPTIONS
        const {icon, ...selectedOptionWithoutIcon} = selectedOption;

        // Добавляем выбранный элемент обратно в MP_OPTIONS
        setMPOptions(prevOptions => [...prevOptions, selectedOptionWithoutIcon]);
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        // Находим выбранный элемент в MP_OPTIONS
        const selectedOption = mpOptions.find(option => option.value === value);

        // Добавляем поле icon к выбранному элементу
        const selectedOptionWithIcon = {...selectedOption, icon: <CloseOutlined />};

        // Добавляем выбранный элемент в segmentedOptions с полем icon
        setSegmentedOptions(prevOptions => [...prevOptions, selectedOptionWithIcon]);

        // Удаляем выбранный элемент из MP_OPTIONS
        setMPOptions(prevOptions => prevOptions.filter(option => option.value !== value));
    };

    const chooseFormToShow = useMemo(() => {
        switch (formOption) {
            case 'common':
                return <GeneralInfoAboutProduct />;
            case 'ym':
                return <YMinfo />;
            case 'ozon':
                return <OzonInfo />;
        }
    }, [formOption]);

    return (
        <Drawer
            title="Создание КТ"
            onClose={onClose}
            open={open}
            width={520}
            extra={
                <Select
                    placeholder="Добавить МП"
                    onChange={onChange}
                    options={mpOptions}
                    className="min-w-[144px]"
                    disabled={mpOptions.length === 0}
                />
            }
        >
            <div className="flex flex-col gap-4">
                <Segmented
                    options={segmentedOptions}
                    block
                    onChange={value => {
                        setFormOption(value.toString());
                    }}
                />
                {chooseFormToShow}
            </div>
        </Drawer>
    );
});

export default AddNewProductSidebar;
