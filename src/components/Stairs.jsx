import { motion } from "framer-motion";

const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
};
const Stairs = () => {
    const totalSteps = 6;
    return (
        <>
            {Array.from({ length: totalSteps }, (_, index) => (
                <motion.div
                    key={index}
                    className="w-full h-full bg-white relative"
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: (totalSteps - index - 1) * 0.1
                    }}
                />
            ))}
        </>
    );
};
export default Stairs;
