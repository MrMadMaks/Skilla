import logo from "../assets/logo.svg";
import result from "../assets/results.svg";
import callsSvg from "../assets/calls.svg";
import documents from "../assets/documents.svg";
import mail from "../assets/mail.svg";
import orders from "../assets/orders.svg";
import people from "../assets/people.svg";
import perm from "../assets/perm_identity_black.svg";
import brifcase from "../assets/briefcase-outline.svg";
import local_library from "../assets/local_library.svg";
import settings from "../assets/settings.svg";
import Button from "../UI/Button";
import add_btn from "../assets/add_btn.svg";
import pay_btn from "../assets/pay_btn.svg";

const Aside = () => {
    return (
        <aside className="bg-[#091336] grid-in-nav pt-[20px] pl-[12px]">
            <img src={logo} alt="logo" className="mb-[32px]" />
            <ul>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={result} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Итоги
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={orders} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Заказы
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={mail} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6 text-white/60">
                            Сообщения
                        </span>
                    </a>
                </li>
                <li className="bg-[#D8E4FB]/30 ml-[-12px] border-s-4 border-[#002CFB]">
                    <a href="#" className="flex pt-[15px] pb-[15px] p-[12px]">
                        <img src={callsSvg} alt="results" className="mr-[12px]" />
                        <span className='font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6 text-white after:content-[""] after:w-2 after:h-2 after:bg-[#FFD500] after:inline-block after:ml-[112px] after:rounded-full after:shadow-[0_3px_8px_0_rgba(237,218,1,0.5)] z-40'>
                            Звонки
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={people} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Контрагенты
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={documents} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Документы
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={perm} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Исполнители
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={brifcase} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Отчеты
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={local_library} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            База знаний
                        </span>
                    </a>
                </li>
                <li className="mb-[64px] sm:mb-10">
                    <a href="#" className="flex pt-[15px] pb-[15px]">
                        <img src={settings} alt="results" className="mr-[12px]" />
                        <span className="font-[SFProDisplay-Medium] not-italic font-medium text-base leading-6  text-white/60">
                            Настройки
                        </span>
                    </a>
                </li>
            </ul>
            <Button name="Добавить заказ"><img src={add_btn} alt="add order" /></Button>
            <Button name="Оплата" ><img src={pay_btn} className="ml-[23px]" alt="pay" /></Button>
        </aside>
    );
};

export default Aside;