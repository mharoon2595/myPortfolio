import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
const activeContext = dynamic(
  () => import("@/context/sectionSelectionContext"),
  { ssr: false }
);

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ onClick, fromHeader, setCurrent, current }) => {
  const items = ["Home", "About", "Projects", "Contact"];
  const { activeSection, setLastClick } = useActiveContext();

  return (
    <>
      {fromHeader ? (
        <div className="flex justify-between w-full px-5 mx-14 my-auto">
          {items.map((item) => (
            <div key={item}>
              <Link
                href={`/#${item}`}
                className="relative text-gray-600 hover:text-gray-950 p-2"
                onClick={() => {
                  setCurrent(item);
                  setLastClick(Date.now());
                }}
              >
                {item}
                {(current === item || activeSection === item) && (
                  <motion.span
                    className="bg-gray-300 rounded-xl absolute inset-0 -z-10"
                    layoutId="current"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          className="text-white text-2xl absolute w-full h-full flex flex-col items-center justify-center gap-5"
          variants={variants}
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onClick();
                setCurrent(item);
              }}
            >
              <Link
                href={`/#${item}`}
                className={`${
                  activeSection === item ? "animate-pulse" : "text-white"
                }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Links;
