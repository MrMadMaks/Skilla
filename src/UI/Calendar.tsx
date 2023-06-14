import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { observer, useLocalObservable } from "mobx-react-lite";
import { mainStore } from "../store/index";

interface IFixDate {
    fixDate: string | undefined;
}

function RenderSwitch(props: IFixDate) {
    let period = ''
    switch (props.fixDate) {
        case '3d':
            period = '3 дня';
            break;
        case 'week':
            period = 'Неделя';
            break;
        case 'month':
            period = 'Месяц';
            break;
        case 'year':
            period = 'Год';
            break;
        default:
            period = '3 дня'
    }

    return <span className="hover:text-[#002CFB]">{period}</span>
}

const Calendar = observer(() => {

    const { fixDate, setFilterDate } = useLocalObservable(() => mainStore);

    return (
        <Menu as="div" className="relative inline-block text-left z-[20]">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-[#5E7793] group transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-center">
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className="mr-[21px] cursor-pointer" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z" fill="#ADBFDF" className="hover:fill-[#002CFB]" />
                        </svg>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="mr-[8px]" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" fill="#ADBFDF" className="hover:fill-[#002CFB]" />
                        </svg>
                        <RenderSwitch fixDate={fixDate} />
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className="ml-[21px] cursor-pointer" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z" fill="#ADBFDF" className="hover:fill-[#002CFB]" />
                        </svg>
                    </div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-[20] right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                    <div className=" ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => setFilterDate('3d')}
                                    className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#002CFB]'
                                        } group flex w-full items-center rounded-t-md px-2 py-2 text-sm focus:text-[#002CFB] `}
                                >
                                    3 дня
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => setFilterDate('week')}
                                    className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#899CB1]'
                                        } group flex w-full items-center px-2 py-2 text-sm`}
                                >
                                    Неделя
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => setFilterDate('month')}
                                    className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#899CB1]'
                                        } group flex w-full items-center px-2 py-2 text-sm`}
                                >
                                    Месяц
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => setFilterDate('year')}
                                    className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#899CB1]'
                                        } group flex w-full items-center  px-2 py-2 text-sm`}
                                >
                                    Год
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
});

export default Calendar;



