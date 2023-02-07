import Title from '@/components/title';
import { PageTypes } from '@/components/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (value: PageTypes) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const { register, trigger, formState: { errors } } = useForm();
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-10`;
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id='contactus' className='mx-auto w-5/6'>
            <motion.div onViewportEnter={() => setSelectedPage(PageTypes.ContactUs)}>
                {/*header */}
                <motion.div
                    className='mt-20 md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <Title><span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE</Title>
                    <p className='my-5'>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                </motion.div>

                {/*form */}
                <div className='mt-10 md:flex gap-8 justify-between'>
                    <form
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/wenhui.yim@gmail.com"
                        method="POST"
                        target='_blank'
                        className='basis-1/2'>
                        <input
                            className={inputStyles}
                            type='text'
                            placeholder='NAME'
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })} />
                        {errors.name && (
                            <p className='mt-1 text-primary-500s'>
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                            </p>
                        )}

                        <input
                            className={inputStyles}
                            type='text'
                            placeholder='EMAIL'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                        {errors.email && (
                            <p className='mt-1 text-primary-500s'>
                                {errors.email.type === 'required' && 'This field is required.'}
                                {errors.email.type === 'pattern' && 'Invalid email address.'}
                            </p>
                        )}

                        <textarea
                            className={inputStyles}
                            placeholder='MESSAGE'
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })} />
                        {errors.message && (
                            <p className='mt-1 text-primary-500s'>
                                {errors.message.type === 'required' && 'This field is required.'}
                                {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                            </p>
                        )}

                        <button type='submit'
                            className='mt-5 rounded-lg px-20 py-3 bg-secondary-500 hover:text-white transition duration-500 font-bold'>
                            SUBMIT
                        </button>

                    </form>

                    {/*graphic */}
                    <div className='relative mt-10 items-center justify-center'>
                        <div className='before:absolute md:before:content-evolvetext before:z-[-1] before:-bottom-20 before:-left-80'>
                            <img src={ContactUsPageGraphic} alt='contactuspagegraphic' className='max-w-none w-full' />
                        </div>
                    </div>

                </div>


            </motion.div>

        </section>
    )
}

export default ContactUs;