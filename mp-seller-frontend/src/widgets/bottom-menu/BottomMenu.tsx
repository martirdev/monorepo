import {ExclamationCircleOutlined} from '@ant-design/icons';
import {Button, Divider, Modal} from 'antd';
import {useCallback, useMemo} from 'react';

import {BottomMenuPropsType, ItemsType} from './types';

const BottomMenu: BottomMenuPropsType = ({selectedRowKeys, onCancel}) => {
    const [modal, contextHolder] = Modal.useModal();

    const handleCancel = useCallback(() => {
        console.log('Модальное окно было закрыто без выполнения действий');
    }, []);

    const confirm = useMemo(() => {
        modal.confirm({
            title: 'Вы уверены, что хотите удалить карточку товара?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Продолжить',
            cancelText: 'Отменить',
            onOk() {
                console.log(
                    `кликнули кнопку продолжить удаление этих ${selectedRowKeys.length} элементов: ${selectedRowKeys
                        .map((rowKey, index) => {
                            return `${index + 1}. ${rowKey}`;
                        })
                        .join('\n')}`
                );
            },
            onCancel: handleCancel
        });
    }, [handleCancel]);

    const items: ItemsType = useMemo(() => {
        return [
            {
                label: <Button onClick={onCancel}>Отменить</Button>,
                key: 'cancel',
                title: 'Отменить выделение'
            },
            {
                label: (
                    <Button type="primary" danger onClick={confirm}>
                        Удалить
                    </Button>
                ),
                key: 'delete',
                title: 'Удалить выбранные элементы таблицы'
            }
        ];
    }, [onCancel, confirm]);

    return (
        <div className="w-full">
            <Divider className="m-0" />
            <div className="flex justify-end gap-2 py-2 pr-2">
                {items.map(item => (
                    <div key={item.key} title={item.title}>
                        {item.label}
                    </div>
                ))}
            </div>
            {contextHolder}
        </div>
    );
};

export {BottomMenu};
