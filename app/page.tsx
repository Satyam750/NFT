"use client";
import Image from "next/image";
import styled from "styled-components";
import Header from "./components/Header/Header";
import SectionLayout from "./components/SectionLayout";
import HorizontalWrapper from "./components/HorizontalWrapper";
import {cards} from "./utiles/cards"
import Cards from "./components/Cards";
import TextSection from "./components/TextSection";
import Fullpage from "./components/Fullpage";
import {motion, useScroll, useTransform} from "framer-motion"
import Footer from "./components/Footer";
import ZoomSection from "./components/ZoomSection";
import { useRef } from "react";
export default function Home() {

  const video = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );
  return (
    <>
      <Header />
   <MainStyled>
        <SectionLayout >
        <HorizontalWrapper height="40rem" direction={-2500}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Cards
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

         <Fullpage/>
             
         <SectionLayout>
          <HorizontalWrapper height="40rem" direction={2500}>
            <div className="cards" style={{ right: 0 }}>
              {cards.map((card, index) => {
                return (
                  <Cards
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <motion.div ref={video}
            className="video"
               style={{opacity,scale}}
          >
            <iframe
              src="https://www.youtube.com/embed/AX6OrbgS8lI?si=66ZODawJae548zFP"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>

        <SectionLayout>
          <ZoomSection/>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

   
   <Footer/>

   </MainStyled>

    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
