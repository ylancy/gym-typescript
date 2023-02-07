import { PageTypes, ClassType } from "@/components/types";
import Title from "@/components/title";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from './ourclasses'

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: PageTypes) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="bg-primary-100 py-40 w-full" >
            <motion.div onViewportEnter={() => setSelectedPage(PageTypes.OurClasses)}>
                <div className="mx-auto w-5/6">
                    {/*title & des */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <Title>OUR CLASSES</Title>
                        <p className="py-5 md:w-3/5">Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.</p>
                    </motion.div>
                    {/*graphic and desc */}
                    <div className="w-full h-[353px] overflow-x-auto overflow-y-hidden mt-10">
                        <div className="w-[2800px] whitespace-nowrap">
                            {classes.map((value: ClassType, index) => (
                                <Class
                                    key={`${value.name}-${index}`}
                                    name={value.name}
                                    description={value.description}
                                    image={value.image}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </motion.div>
        </section >
    )
}

export default OurClasses;