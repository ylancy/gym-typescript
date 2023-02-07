import AnchorLink from "react-anchor-link-smooth-scroll";
import { PageTypes } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: PageTypes) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink className="bg-secondary-500 rounded-md py-1 px-2 hover:bg-primary-500 hover:text-white px-5 py-2"
            onClick={() => setSelectedPage(PageTypes.ContactUs)}
            href={`#${PageTypes.ContactUs}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton