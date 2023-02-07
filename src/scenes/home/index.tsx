import { PageTypes } from '@/components/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from '@/components/actionButton';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: PageTypes) => void,
}

const Home = ({ setSelectedPage }: Props) => {
    const isLargeScreen = useMediaQuery('(min-width:1060px)');

    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full'>
            <motion.div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
                onViewportEnter={() => setSelectedPage(PageTypes.Home)}>
                {/*right part*/}
                <div className='w-5/6 items-center justify-center'>
                    {/*logo and text */}
                    <motion.div className='mt-20 md:basis-3/5 md:-mt-20'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <div className='z-10 relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img src={HomePageText} alt='homepagetext' />
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.</p>
                    </motion.div>
                    {/*button and link */}
                    <motion.div className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                            className='font-bold text-primary-500 underline hover:text-secondary-500 hover:cursor-pointer'
                            onClick={() => setSelectedPage(PageTypes.ContactUs)}
                            href={`#${PageTypes.OurClasses}`}>Learn More
                        </AnchorLink>
                    </motion.div>
                </div>

                {/*left image*/}
                <div className='flex basis-3/5 justify-center md:mt-16 md:ml-40 md:justify-items-end'>
                    <img src={HomePageGraphic} alt='homepagegraphic' className='max-w-none' />
                </div>
            </motion.div>

            {/*sponsors */}
            {isLargeScreen && (
                <div className='h-[100px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 justify-between items-center gap-8'>
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img alt="forbes-sponsor" src={SponsorForbes} />
                            <img alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Home;