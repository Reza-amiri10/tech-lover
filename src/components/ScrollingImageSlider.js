import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CustomSlider from "./CustomSlider";
import images from "./images";

// ✅ Hook for responsive breakpoint
const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsmobile] = useState(window.innerWidth < maxWidth);

  useEffect(() => {
    const handler = () => setIsmobile(window.innerWidth < maxWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [maxWidth]);

  return isMobile;
};

export default function ScrollingImageSlider() {
  const isMobile = useIsMobile(768);

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F0F8FB",
        transition: "all 0.3s ease",
      }}
    >
      {isMobile ? (
        // 📱 Mobile: Click to go next
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      ) : (
        // 🖥️ Desktop: Auto scrolling
        <motion.div
          style={{
            display: "flex",
            gap: 80,
            alignItems: "center",
          }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {images.concat(images).map((src, i) => (
            <motion.img
              key={i}
              src={src.imgURL}
              alt={src.imgAlt}
              style={{
                borderRadius: 10,
                width: "40%",
                maxWidth: 400,
                padding: 100,
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 0, scale: 1.08, zIndex: 1000 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
