import { observer, useLocalObservable } from "mobx-react-lite";
import { mainStore } from "../store/index";
import { useState } from "react"

const Search = observer(() => {

    const { term, setTerm } = useLocalObservable(() => mainStore);

    const [activeState, setActiveState] = useState(true)

    const toggle = () => {
        setActiveState(activeState => !activeState)
    }

    return (
        <div className="relative">

            <label htmlFor="num" onClick={toggle} className="flex items-center group cursor-pointer hover:bg-white p-3 rounded-[30px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-[12px]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#ADBFDF" className="group-hover:fill-[#002CFB]" />
                </svg>
                <input
                    id="num"
                    className="outline-none hover:bg-white bg-white/0 placeholder:not-italic placeholder:font-normal placeholder:text-sm placeholder:text-[#5E7793]"
                    type="text"
                    placeholder='Поиск по звонкам'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} />

            </label>
            <span className={`${activeState ? 'hidden' : 'block'} absolute not-italic font-normal text-[12px] text-gray-600 ml-[20px]`} >*вводить без "+"</span>
        </div>
    );
});

export default Search;