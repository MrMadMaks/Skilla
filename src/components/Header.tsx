import search from "../assets/search.svg";
import avatar from "../assets/avatar.webp";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-white grid-in-header shadow-[0_4px_5px_0_rgb(233,237,243)] z-40">
            <div className="flex items-center min-[1720px]:max-w-[1440px] max-w-[1200px]">
                <span className="not-italic font-normal text-[15px] text-gray-500 min-[1720px]:mr-[86px] mr-12">
                    Среда, 13 окт
                </span>
                <div className="min-[1720px]:mr-[56px] mr-10">
                    <span className="not-italic font-normal text-sm text-gray-900 mb-[7px]">
                        Новые звонки
                        <span className="text-[#00A775]"> 20 из 30 шт</span>
                    </span>
                    <div className="flex w-[156px] h-[6px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div className="flex flex-col justify-center overflow-hidden bg-[#28A879] text-xs text-white text-center w-[68px]"></div>
                    </div>
                </div>
                <div className="min-[1720px]:mr-[56px] mr-10">
                    <span className="not-italic font-normal text-sm text-gray-900 mb-[7px]">
                        Качество разговоров<span className="text-[#FFB800]"> 40%</span>
                    </span>
                    <div className="flex w-[156px] h-[6px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div className="flex flex-col justify-center overflow-hidden bg-[#FFB800] text-xs text-white text-center w-[68px]"></div>
                    </div>
                </div>
                <div className="min-[1720px]:mr-[245px] mr-[119px]">
                    <span className="not-italic font-normal text-sm text-gray-900 mb-[7px]">
                        Конверсия в заказ<span className="text-[#EA1A4F]"> 67%</span>
                    </span>
                    <div className="flex w-[156px] h-[6px] bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div className="flex flex-col justify-center overflow-hidden bg-[#EA1A4F] text-xs text-white text-center w-[68px]"></div>
                    </div>
                </div>
                <img
                    src={search}
                    className="min-[1720px]:mr-[64px] mr-5 cursor-pointer"
                    alt="search"
                />
                <div className="flex items-center group min-[1720px]:mr=[46px] mr-5">
                    <span className="not-italic font-normal text-[14px] text-gray-500 mr-[10px]">
                        ИП Сидорова Александра Михайловна
                    </span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" className="ml-2 h-5 w-5 group-hover:fill-[#002CFB] " />
                    </svg>
                </div>
                <div className="flex items-center cursor-pointer group">
                    <img src={avatar} className="mr-[10px]" alt="avatar" />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" className="ml-2 h-5 w-5 group-hover:fill-[#002CFB]" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;