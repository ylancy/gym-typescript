import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/actionButton";
import { PageTypes } from "@/components/types";

type Props = {
    isTopOfPage: boolean,
    selectedPage: PageTypes,
    setSelectedPage: (value: PageTypes) => void
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isLargeScreen = useMediaQuery('(min-width:1060px)');
    const bgColor = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

    return (
        <nav className={`${flexBetween} ${bgColor} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} w-5/6 mx-auto gap-16`}>
                <img src={Logo} alt='logo' />
                {isLargeScreen ? (
                    <div className={`${flexBetween} gap-20`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>) : (
                    <button className="h-6 w-6 text-gray-400"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}><Bars3Icon />
                    </button>
                )}

                {!isLargeScreen && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                        <div className="flex justify-end p-3">
                            <button className='h-6 w-6 text-gray-400' onClick={() => setIsMenuToggled(!isMenuToggled)}><XMarkIcon /></button>
                        </div>
                        <div className='flex flex-col gap-10 text-xl bg-primary-100'>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </div>

        </nav >
    )
}

export default Navbar