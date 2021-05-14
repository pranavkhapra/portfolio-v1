import React from 'react';

import narutoFirstPoster from '../images/naruttooo.png';
import narutoSecondPoster from '../images/narutoo.jpg';
import chainsawmanFirst from '../images/chainsawman.jpg';
import chainsawmanSecond from '../images/chainsawman1.jpg';
import haikyuFirst from '../images/haikyuu.jpg';
import haikyuSecond from '../images/haikyuuu.jpg';
import jujutsuKaisenFirst from '../images/jjk_poster.jpg';
import jujutsuKaisenSecond from '../images/jujutsukaisen.jpg';
import demonSlayerFirst from '../images/demonslayer.jpg';
import demonSlayerSecond from '../images/demonslayer.jpeg';
import silentVoiceFirst from '../images/silentvoice.jpeg';
import silentVoiceSecond from '../images/silentvoice.jpg';
import aotFirst from '../images/aot1.jpg';
import aotSecond from '../images/aot2.jpg';

export default function anime() {
  return (
    <>
      <section className="container mx-auto p-20 md:py-30 px-0 md:p-20 md:px-10">
        <div className="space-y-2 md:space-y-5">
          <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight dark:text-darkBackgroundYellow sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Anime
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-700 dark:text-darkText ">
            The collections of some of my fav. anime
          </p>
        </div>
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={narutoSecondPoster} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={narutoFirstPoster}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/20/Naruto"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500 dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Naruto
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: ナルト
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={chainsawmanSecond} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={chainsawmanFirst}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/manga/116778/Chainsaw_Man"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500   dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Chainsaw Man
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: チェンソーマン
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={haikyuFirst} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={haikyuSecond}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/20583/Haikyuu"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500  dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Haikyu!!
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: ハイキュー!!
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={jujutsuKaisenFirst} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={jujutsuKaisenSecond}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/40748/Jujutsu_Kaisen_TV"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500  dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Jujutsu Kaisen
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: 呪術廻戦
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={demonSlayerFirst} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={demonSlayerSecond}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500  dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Demon Slayer: Kimetsu no Yaiba
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: 鬼滅の刃
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={aotFirst} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={aotSecond}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500   dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: Attack on Titan
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: 進撃の巨人
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <img className="absolute" src={silentVoiceFirst} alt="" />
              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={silentVoiceSecond}
                alt=""
              />
            </div>
            <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a
                target="_blank"
                href="https://myanimelist.net/anime/28851/Koe_no_Katachi"
                rel="noreferrer"
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <ul className="mt-6 font-semibold text-gray-500  dark:text-darkBackgroundYellow">
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                English: A Silent Voice
              </li>
              <li className="inline mr-3 pb-1 border-b-2 border-green-500 dark:border-darkBackgroundPink">
                Japanese: 聲の形
              </li>
            </ul>
            <p className="mt-6  text-xl leading-relaxed text-gray-700 dark:text-darkText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              aliquid atque officia? Earum dolores voluptatibus reiciendis,
              excepturi corporis corrupti eaque!
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
        </section>
      </section>
    </>
  );
}
