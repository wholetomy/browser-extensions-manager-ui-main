import LogoDark from '../../assets/images/logo-dark.svg';
import Logo from '../../assets/images/logo.svg';
import SunIcon from '../../assets/images/icon-sun.svg';
import MoonIcon from '../../assets/images/icon-moon.svg';

interface AtivarDarkModeProps {
    AtivarDarkMode: (valor: boolean) => void;
    isDarkMode: boolean;
}

export default function Navbar({ AtivarDarkMode, isDarkMode }: AtivarDarkModeProps) {
    return (
        <>
            <div className="p-2 bg-[#FCFDFF] dark:bg-[#1F2535] flex justify-between rounded-xl transition duration-200 ease-in-out shadow">
                {isDarkMode ? (
                    <img src={LogoDark} alt="logo" />
                ) : (
                    <img src={Logo} alt="logo" />
                )}

                <button
                    className='p-2 bg-[#EEEEEE] dark:bg-[#2F354B] rounded-xl hover:bg-[#C7C5C7] dark:hover:bg-[#525868] cursor-pointer transition duration-200 ease-in-out outline outline-[#EEEEEE] dark:outline-[#2F354B] focus:outline focus:outline-[#D76662] border border-[#FCFDFF] dark:border-[#1F2535] w-10.5 h-10.5 flex items-center justify-center'
                    onClick={() => AtivarDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? (
                        <img src={SunIcon} alt="sun icon" />
                    ) : (
                        <img src={MoonIcon} alt="sun icon" />
                    )}
                </button>

            </div>
        </>
    )
}
