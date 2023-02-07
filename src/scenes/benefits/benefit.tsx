import { PageTypes } from '@/components/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: PageTypes) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div className='rounded-md border-2 border-gray-100 px-5 py-16 text-center mt-5'
            variants={childVariant}>
            <div className='flex justify-center'>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100'>{icon}</div>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-5'>{description}</p>
            <AnchorLink onClick={() => setSelectedPage(PageTypes.ContactUs)}
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 hover:cursor-pointer"
                href={`#${PageTypes.OurClasses}`}>
                Learn More
            </AnchorLink>
        </motion.div>
    )
}

export default Benefit;