import { mainStore } from "../store/index";
import { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import call_in from "../assets/call_in.svg"
import call_out from "../assets/call_out.svg"
import { observer, useLocalObservable } from "mobx-react-lite";
import DropAllTypes from "../UI/DropAllTypes";
import DropAllEmployes from "../UI/DropAllEmployes";
import DropAllCalls from "../UI/DropAllCalls";
import DropAllEstimations from "../UI/DropAllEstimations";
import DropAllErrors from "../UI/DropAllErrors";
import Calendar from "../UI/Calendar";
import Search from "../UI/Search";

const Main = observer(() => {

    const { getCalls, searchNumber, calls, term } = useLocalObservable(() => mainStore);
    useEffect(() => {
        getCalls();
    }, []);




    return (
        <main className="bg-[#F1F4F9] grid-in-main pt-[20px] pb-[57px]">
            <div className="flex justify-end items-center min-[1720px]:max-w-[1440px] max-[1720px]:max-w-[1200px] m-auto mb-[20px]">
                <div className="flex gap-1 w-[145px] h-10 bg-white rounded-[48px] items-center justify-center mr-[48px]">
                    <span className="not-italic font-normal text-sm text-gray-500">
                        Баланс:
                    </span>
                    <span className="text-[#122945] font-semibold mr-[10px]">
                        272 р
                    </span>
                    <button type="button">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z"
                                fill="#005FF8"
                                className="cursor-pointer hover:fill-[#0024CB] transition-all duration-300 ease-in-out "
                            />
                        </svg>
                    </button>
                </div>
                <Calendar />
            </div>
            <div className="flex items-center justify-between min-[1720px]:max-w-[1440px] max-[1720px]:max-w-[1207px] m-auto">
                <Search />
                <div className="flex items-center justify-between gap-[32px]">
                    <div className="pt-[14px] pb-[14px]">
                        <DropAllTypes />
                    </div>
                    <div className="pt-[14px] pb-[14px]">
                        <DropAllEmployes />
                    </div>
                    <div className="pt-[14px] pb-[14px]">
                        <DropAllCalls />
                    </div>
                    <div className="pt-[14px] pb-[14px]">
                        <DropAllEstimations />
                    </div>
                    <div className="pt-[14px] pb-[14px] mr-[0]">
                        <DropAllErrors />
                    </div>
                </div>

            </div>

            <div className="flex justify-between max-w-[1240px] max-[1720px]:max-w-[1148px] max-[1720px]:pr-[26px] m-auto pt-[22px] pb-[22px] pr-[40px]">
                <div className="flex gap-8">
                    <span className="not-italic font-normal text-sm text-gray-500">Тип</span>
                    <span className="not-italic font-normal text-sm text-gray-500">Время</span>
                    <span className="not-italic font-normal text-sm text-gray-500">Сотрудник</span>
                    <span className="not-italic font-normal text-sm text-gray-500">Звонок</span>
                </div>

                <span className="not-italic font-normal text-sm text-gray-500">Источник</span>
                <span className="not-italic font-normal text-sm text-gray-500">Оценка</span>
                <span className="not-italic font-normal text-sm text-gray-500">Длительность</span>
            </div>
            <List
                height={700}
                itemCount={2000}
                itemSize={35}
                width={1240}
                itemData={searchNumber(calls, term)}
                className="m-auto min-[1720px]:max-w-[1440px] max-[1720px]:max-w-[1198px]"
            >
                {({ data }) => {
                    return data.map((el) => {
                        return (
                            <div key={el.id} className="flex justify-between items-center bg-white pt-[22px] pb-[22px] min-[1720px]:max-w-[1440px] max-[1720px]:max-w-[1198px] pl-[20px] pr-[36px] border-b-[2px] border-b-[solid]  border-b-[#EAF0FA] rounded-[8px]">
                                <div className="flex gap-8 items-center">
                                    <div  > {el.in_out === 1 ? <img src={call_in} alt="Входящий звонок" /> : <img src={call_out} alt="Исходящий звонок" />}</div>
                                    <div className="not-italic font-normal text-sm text-gray-900">{el.date.substring(11, 16)}</div>
                                    <img src={el.person_avatar} className="mr-[14px]" alt="person_avatar" />
                                    <div className="not-italic font-normal text-sm text-gray-900 mr-[22px]">{`+${el.partner_data.phone}`}</div>
                                </div>
                                <div className="not-italic font-normal text-sm text-gray-900" >{el.source ? el.source : 'Источник не указан :('}</div>
                                <div className="not-italic font-normal text-sm text-gray-900" >{el.estimation ? el.estimation : 'Оценка не поставлена :('}</div>
                                <div className="not-italic font-normal text-sm text-gray-900" >{el.time}:06</div>
                            </div>
                        );
                    });
                }}
            </List>
        </main>
    );
});


export default Main;





