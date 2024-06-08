import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import type {FormProps} from 'antd';
import {Button, Form, Input, notification} from 'antd';
import {useNavigate} from 'react-router-dom';

import LoginImage from './login_page.png';

const LOGIN_CREDENTIALS = {
    username: 'admin',
    password: 'password123'
};

const Login = () => {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    type FieldType = {
        username: string;
        password: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = function (values) {
        if (values.username === LOGIN_CREDENTIALS.username && values.password === LOGIN_CREDENTIALS.password) {
            api.success({
                message: 'Успешно',
                description: 'Добро пожаловать!'
            });
            login(true);
        } else {
            api.error({
                message: 'Ошибка',
                description: 'Неудачный вход в систему, проверьте заполненные поля'
            });
        }
    };

    const login = isLogged => {
        if (isLogged) {
            navigate('/');
        } else navigate('/places');
    };

    return (
        <>
            {contextHolder}
            <div className=" -m-1 flex h-full w-full justify-between bg-[#FFF0F6]">
                <div className="relative flex flex-1 items-center justify-center">
                    <Button
                        icon={<ArrowLeftOutlined />}
                        className="absolute left-1 top-1"
                        size="large"
                        onClick={() => {
                            login(false);
                        }}
                    >
                        Назад
                    </Button>
                    <img src={LoginImage} className="aspect-square w-[480px]" />
                </div>
                <div className="flex w-1/2 items-center justify-center rounded-3xl bg-white">
                    <div className="flex w-1/2 flex-col items-center justify-between">
                        <p className=" flex w-full justify-center text-3xl font-bold">Вход</p>
                        <div className="flex flex-col justify-center">
                            <Form
                                name="basic"
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                                initialValues={{remember: true}}
                                onFinish={onFinish}
                                autoComplete="off"
                                style={{width: 700}}
                            >
                                <Form.Item<FieldType>
                                    label="Логин"
                                    name="username"
                                    rules={[{required: true, message: 'Пожалуйста, введите логин'}]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label="Пароль"
                                    name="password"
                                    rules={[{required: true, message: 'Пожалуйста, введите пароль'}]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item className="flex justify-center">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        icon={<ArrowRightOutlined />}
                                        size="large"
                                    />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
