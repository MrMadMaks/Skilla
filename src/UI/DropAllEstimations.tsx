import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { observer, useLocalObservable } from "mobx-react-lite";
import { mainStore } from "../store/index";


interface IallEstimations {
    allEstimations: string | undefined;
}

function RenderEstimations(props: IallEstimations) {
    let estimations = ''
    switch (props.allEstimations) {
        case 'allEstimations':
            estimations = 'Все оценки';
            break;
        case 'good':
            estimations = 'Хорошо';
            break;
        case 'bad':
            estimations = 'Плохо';
            break;
        default:
            estimations = 'Все оценки'
    }

    return <span className="hover:text-[#002CFB]">{estimations}</span>
}

const DropAllEstimations = observer(() => {

    const { allEstimations, setAllEstimations } = useLocalObservable(() => mainStore);

    const [activeState, setActiveState] = useState(false)

    const toggle = () => {
        setActiveState(activeState => !activeState)
    }

    return (
        <div className="flex justify-between min-[1720px]:max-w-[1440px] max-w-[1200px] w-ful m-auto">
            <Menu as="div" className="relative inline-block text-left z-[10]">
                <div>
                    <Menu.Button onClick={toggle} className="inline-flex w-full justify-center rounded-md text-sm font-medium text-[#5E7793] group hover:text-[#002CFB] transition-all duration-300 ease-in-out">
                        <RenderEstimations allEstimations={allEstimations} />

                        <ChevronDownIcon
                            className={`${activeState ? 'text-[#002CFB] transition-all duration-300 ease-in-out rotate-180' : 'text-[#ADBFDF]'} ml-2 h-5 w-5 group-hover:text-[#002CFB]`}
                            aria-hidden="true"
                        />
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
                    <Menu.Items onClick={toggle} className="absolute z-[10] right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className=" ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => setAllEstimations('allEstimations')}
                                        className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#002CFB]'
                                            } group flex w-full items-center rounded-t-md px-2 py-2 text-sm focus:text-[#002CFB] `}
                                    >
                                        Все оценки
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => setAllEstimations('good')}
                                        className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#899CB1]'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Хорошо
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => setAllEstimations('bad')}
                                        className={`${active ? 'bg-[#002CFB]/10 text-[#122945]' : 'text-[#899CB1]'
                                            } group flex w-full items-center px-2 py-2 text-sm`}
                                    >
                                        Плохо
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
});

export default DropAllEstimations;



