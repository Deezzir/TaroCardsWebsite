import React from "react";
import { TextReg } from "../../../../common/text/text-reg";
import { motion } from "framer-motion";
import { BUY_LINK } from "../../../../common/urls";

import { useEffect, useState } from "react";

const imageArray = Array.from({ length: 77 }, (_, i) => {
  return `./cards/cardio_${i}.webp`;
});

export const Block4 = () => {
  const [count, setCount] = useState(0);
  const onBuy = () => {
    window.open(BUY_LINK, "_blank");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];

  return (
    <div className="w-full min-h-screen bg-black justify-center align-middle items-center flex flex-col relative">
      <motion.div
        className={
          "w-11/12 md:w-9/12 max-w-screen-2x flex flex-col md:flex-row p-8 gap-4"
        }
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{ once: true }}
      >
        <div className="w-full md:w-8/12 flex p-4 flex-col gap-4 text-white  justify-around">
          <TextReg
            customClass={"text-[#00BCF8] "}
            text="Coin Distribution:
We are launching the coin on pump.fun to ensure transparency for the community. There will be a significant developer buy and burn, along with technical solutions for better coin spread.
"
          />
          <div className="flex flex-col gap-8 my-auto items-start">
            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"• 40% initial developer buy and burn"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"• 10% free airdrop"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left"}
              text={"• 10% post-Raydium developer buy and burn"}
            />

            <TextReg
              customClass={"text-[#00BCF8] text-left md:mb-0 mb-8"}
              text={"• 5% team allocation"}
            />
            <TextReg
              customClass={"text-[#00BCF8] text-left md:mb-0 mb-8"}
              text={"• 35% in circulation"}
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex justify-center flex-col gap-4 md:gap-16 md:flex-row">
              <img
                onClick={onBuy}
                className=" md:w-4/12 cursor-pointer"
                src="./block4/buy.jpg"
                alt="buy"
              />
              {/* <img
                onClick={onPlay}
                className="md:h-20 md:w-6/12 cursor-pointer"
                src="./block4/play.jpg"
                alt="play"
              /> */}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 flex p-4 justify-center items-center text-white">
          <img className="md:h-[50vh] fade" src={image} alt="card" />
        </div>
      </motion.div>
    </div>
  );
};
