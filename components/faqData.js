/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Faq from "./Faq";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: "What is AliensOnEarth NFT's ?",
      answer: "The AliensOnEarth is a NFT collection of 10k pieces of art made on Aliens",
    },
    {
      id: 2,
      question: "How can I get Aliens NFT ?",
      answer:
        "You will be able to mint the AliensOnEarth NFT by minting the NFT from the MINT page of our official website.",
    },
    {
      id: 3,
      question: "How much will it cost to mint the NFT ?",
      answer:
        "Our AliensOnEarth NFT will be minted at 0.09 eth + gas fess . " },
    {
      id: 4,
      question: "How much NFT one user can mint from NFT collection ?",
      answer:
        "There will be a limit of 10 NFT per user. So one user can mint maximum 10 NFT's from the collection."
    },
    {
      id: 5,
      question: "What blockchain we are build on ?",
      answer:
        " We are build on ethereum blockchain using ERC 721 ."
    },
    {
      id: 6,
      question: "What is art ?",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-auto p-10 rounded-xl h-auto py-15 " id="faqs">
      <h1 className="text-white text-center text-3xl underline md:text-6xl">FAQ's</h1>
      {data.map((data) => {
        return (
          <Faq
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          />
        );
      })}
    </div>
  );
};
export default Accordion