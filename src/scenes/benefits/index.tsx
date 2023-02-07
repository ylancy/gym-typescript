import { PageTypes } from "@/components/types";
import ActionButton from "@/components/actionButton";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Title from "@/components/title";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./benefit";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: PageTypes) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="py-20 min-h-full mx-auto w-5/6">
            <motion.div onViewportEnter={() => setSelectedPage(PageTypes.Benefits)}>
                {/*headers */}
                <motion.div className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <Title>MORE THAN JUST GYM</Title>
                    <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.</p>
                </motion.div>
                {/*benefits */}
                <motion.div className="md:flex gap-8 items-center mt-5 px-20 md:px-0">
                    {benefits.map((benefit) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/*graphic and desc */}
                <div className="md:flex items-center justify-between mt-16 gap-20 md:mt-28">
                    {/* graphic*/}
                    <div className="mx-auto flex basis-3/5 justify-center md:w-full">
                        <img src={BenefitsPageGraphic} alt='benefitspagegraphic' className="max-w-none" />
                    </div>

                    {/* desc*/}
                    <div>
                        {/*title */}
                        <div className="relative mt-20">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    <Title>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span></Title>
                                </motion.div>
                            </div>
                        </div>
                        {/*des */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className="mt-3"> Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.</p>
                            <p className="mt-3">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.</p>
                        </motion.div>
                        {/*button */}
                        <div className="mt-10">
                            <div className="relative z-10">
                                <div className="after:absolute after:content-sparkles after:z-[-1] after:-bottom-20 after:left-12 ">
                                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>

        </section>
    )
}

export default Benefits;