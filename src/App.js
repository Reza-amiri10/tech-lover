import "./App.css";
import Navbar from "./Layout/Navbar";

import { motion } from "framer-motion";

const images = [
  "/images/mac.jpg",
  "/images/camera-phone.jpg",
  "/images/rise-5g.jpg",
  "/images/virtual-reality.jpg",
  "/images/watch.jpg",
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          maxHeight: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: " #F0F8FB",
          marginTop: 60,
          paddingTop: 50,
          paddingBottom: 50,
          transition: "all 0.3s ease",
        }}
      >
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
              src={src}
              alt={`slide-${i}`}
              style={{
                borderRadius: 10,
                width: "40%",
                maxWidth: 500,
              }}
              initial={{ rotate: -7 }}
              whileHover={{ rotate: 0, scale: 1.3, zIndex: 1000 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
