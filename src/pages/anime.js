import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

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
              <StaticImage
                className="absolute"
                src="../images/narutoo.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/naruttooo.png"
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
              Woooaah okay like this was the best anime or may be like the first
              anime i have watched yaa it hve plot holes and all but i reallly
              enjoy this one so much...the sound track made it super awesome
              also i am kinda want to try boruto because of this
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/chainsawman1.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/chainsawman.jpg"
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
              I am still reading it waiting for the mappa studio to publish
              it...a story that looks dumb as hell, with a protagonist who acts
              dumb as hell, with a goal that seems dumb as hell (touch some
              booooooooobs). But where Chainsaw Man gets you is that it
              anticipates your exhaustion with these tropes.
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/haikyuu.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/haikyuuu.jpg"
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
              Okay first of all when i watched the firt episodes i was like
              wth....how a sports anime hitting so hard and all...but yaa its
              super good with great character buildup's and evolution ....with
              goosebumps and thrills and yaa i know a bit of volleyball rules
              nowww......also those thigh looks kinda thicccccck
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>

          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/jjk_poster.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/jujutsukaisen.jpg"
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
              Yoooo i love it sooo much its basically Naruto with all the
              characters having great character development and a likeable
              trait... with great comedy and crying scenes and some good action
              and yaaaa not so long
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/demonslayer.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/demonslayer.jpeg"
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
              First of all i hate sword fights and all but man this one was
              great the animation was great and seriously i was shocked how
              great it was the character was great with the great comedy man its
              awesome you laugh so much and cry so much in this.....
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/aot2.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/aot1.jpg"
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
              Tatakae Tatakae ......still gives me goose bumps man this was
              awesome its like got but better story and better twists the way
              each character have some influence rather than just one protagnist
              with all characters fighting to get freedom ...and man the season
              4 was fire then i started the managa and i can't express the words
              it made me cry.....Ereeen Yeaaagerr
            </p>
            <p className="text-gray-400 mt-10 font-semibold">
              23rd March, 2021
            </p>
          </article>
          <article className="p-5 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div className="relative max-h-125 overflow-hidden">
              <StaticImage
                className="absolute"
                src="../images/silentvoice.jpg"
                alt=""
              />
              <StaticImage
                className="relative transform duration-500 group-hover:opacity-0"
                src="../images/silentvoice.jpeg"
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
              hszxxxeahdsdsdj ......oh my bad i think my eyes are blurry man ya
              this was also made me cry but like 7 times everytime i watched it
              i am just crying.....it made me realize ......!
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
