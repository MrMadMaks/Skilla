interface IButtonProps {
    name: string,
    children: React.ReactNode,
}

const Button = ({ name, children }: IButtonProps) => {
    return (
        <button
            type="button"
            className="flex items-center justify-end mb-[32px] not-italic font-medium text-base text-white w-48 h-12 bg-blue-600 rounded py-3 px-4 gap-2 border border-transparent hover:bg-[#0024CB] focus:bg-[#274BC8] transition-all duration-300 ease-in-out"
        >
            {name}
            {children}
        </button>
    );
};

export default Button;