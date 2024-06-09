import {Link} from 'react-router-dom';

import {HeaderDemo} from '_widgets/header-demo';

import AnalysisImg from './analysis.png';
import Laptop from './laptop.png';
import ManImg from './man.png';
import System from './system.png';

function DemoPage() {
    return (
        <div className="min-h-screen font-sans ">
            <HeaderDemo />

            <section className="flex justify-between px-40 py-20 text-left">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-light">
                        <span className=" text-pink-600">Тайкл</span> - работа с товарами на маркетплейсах
                    </h1>
                    <p className="mt-4 text-2xl text-gray-800">
                        Сервис для быстрого и удобного заведения, редактирования и дублирования параметров товаров с
                        маркетплейсов.
                    </p>
                    <div className="mt-8 space-x-4">
                        <Link to={'/auth'}>
                            <button className="rounded-md bg-pink-500 px-6 py-3 text-white hover:bg-pink-600">
                                Попробовать бесплатно
                            </button>
                        </Link>
                        <a href={'#features'}>
                            <button className="rounded-md bg-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-400">
                                Узнать больше
                            </button>
                        </a>
                    </div>
                </div>
                <img src={AnalysisImg} className=" w-[450px]" />
            </section>

            {/* Features Section */}

            <section id="features" className="bg-gray-50 px-40 py-20">
                <h2 className="text-left text-4xl font-light text-gray-800">Наши преимущества</h2>
                <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
                    <div className="flex items-center">
                        <img src={ManImg} alt="Наши преимущества" className="w-[540px]" />
                    </div>
                    <div>
                        <p className="text-2xl text-pink-600">
                            Создавайте и редактируйте товары на нескольких маркетплейсах через один сервис
                        </p>
                        <p className="mt-1 text-gray-600">
                            Создавая и редактируя товары в нашем сервисе, внесенные изменения будут мгновенно
                            отображаться на всех выбранных вами маркетплейсах.
                        </p>
                        <p className="mt-2 text-2xl text-pink-600">Узнавайте об изменении информации каждого товара</p>
                        <p className="mt-1 text-gray-600">
                            Сообщим вам, если информация о товаре не соответствует заданной вами и поможем устранить
                            проблему.
                        </p>
                        <p className="mt-2 text-2xl text-pink-600">Работайте с несколькими маркетплейсами</p>
                        <p className="mt-1 text-gray-600">
                            Заполняйте информацию о товаре один раз и выгружайте на несколько маркетплейсов всего за
                            один клик.
                        </p>
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <section className="bg-[#FFF0F6] px-40 py-20" id="demo">
                <img src={System} alt="Демо" className="w-full" />
            </section>

            {/* Statistics Section */}
            <section className="bg-gray-50 px-40 py-20" id="stats">
                <h2 className="text-left text-4xl font-light text-gray-800">
                    Статистика <span className="text-pink-600">Тайкл</span>{' '}
                </h2>
                <div className="flex items-center justify-between">
                    <div className="mt-8 space-y-4 text-2xl">
                        <div className="rounded-lg border border-pink-600 bg-white p-6 shadow-md">
                            <p className="flex flex-col gap-6 text-gray-700">
                                <span className="text-3xl font-bold text-pink-600">{`>1 часа`}</span>{' '}
                                <span>экономии времени ежедневно на задачах по заведению товаров на маркетплейсы</span>
                            </p>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div className="rounded-lg border border-pink-600 bg-white p-6 text-center shadow-md">
                                <p className="text-3xl font-bold text-pink-600">100+</p>
                                <p className="mt-2 text-gray-700">Довольных клиентов</p>
                            </div>
                            <div className="rounded-lg border border-pink-600 bg-white p-6 text-center shadow-md">
                                <p className="text-3xl font-bold text-pink-600">∞ товаров</p>
                                <p className="mt-2 text-gray-700">Безлимит на товары</p>
                            </div>
                            <div className="rounded-lg border border-pink-600 bg-white p-6 text-center shadow-md">
                                <p className="text-3xl font-bold text-pink-600">∞ магазинов</p>
                                <p className="mt-2 text-gray-700">Безлимит на магазины</p>
                            </div>
                        </div>
                    </div>

                    <img src={Laptop} className=" h-[412px] w-[443px] flex-[0] shrink-0" />
                </div>
            </section>

            <footer className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4 text-center">
                    <p className="text-gray-600">&copy; 2023 Тайкл</p>
                </div>
            </footer>
        </div>
    );
}

export default DemoPage;
