import { PageTypes } from '@/components/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    page: string,
    selectedPage: string,
    setSelectedPage: (value: PageTypes) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const pageName = page.toLowerCase().replace(/ /g, '') as PageTypes;

    return (
        <AnchorLink className={`${pageName === selectedPage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${pageName}`}
            onClick={() => setSelectedPage(pageName)}>
            {page}
        </AnchorLink>
    )
}

export default Link