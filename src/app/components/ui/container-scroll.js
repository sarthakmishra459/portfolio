"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
    users,
    titleComponent,
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            className="h-[30rem]  md:h-[30rem] w-full m-3  flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-10 md:py-40 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card
                    rotate={rotate}
                    translate={translate}
                    scale={scale}
                    users={users}
                />
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
    rotate,
    scale,
    translate,
    users,
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate, // rotate in X-axis
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className=" -mt-12 mx-auto h-[13rem] md:h-[18rem] w-full border-4 border-[#B7AB98] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
            <div className="  h-full w-full rounded-2xl overflow-hidden ">
                {users.map((user, idx) => (
                    <motion.div
                        key={`user-${idx}`}
                        className="bg-white w-full rounded-md cursor-pointer relative"

                        whileHover={{
                            boxShadow:
                                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                        }}
                    >
                        <img
                            src={user.image}
                            className=" h-full w-full object-cover   "
                            alt="thumbnail"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};