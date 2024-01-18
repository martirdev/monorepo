import {PlusOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {Input} from 'antd';
import {useState} from 'react';

import AddPlaceDrawer from '_widgets/places/place-drawer';
import PlacesList from '_widgets/places/place-list';

const {Search} = Input;

const Places = function Places() {
    const [openAddDrawer, setOpenAddDrawer] = useState(false);

    const showAddDrawer = () => {
        setOpenAddDrawer(true);
    };

    const onClose = () => {
        setOpenAddDrawer(false);
    };

    return (
        <div className="mx-40 mt-16">
            <div className="mb-14 flex justify-between">
                <Search placeholder="здесь будет поиск, пока его нет :(" onSearch={() => {}} className="w-2/5" />
                <Button type="primary" icon={<PlusOutlined />} onClick={showAddDrawer}>
                    Добавить магазин
                </Button>
            </div>
            <PlacesList />

            <AddPlaceDrawer onClose={onClose} open={openAddDrawer} title={'Добавление магазина'} />
        </div>
    );
};

export default Places;
