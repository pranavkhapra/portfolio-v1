import React from 'react';
import narutoPoster from '../images/narutooooo.jpg';
import haikyuPoster from '../images/haikyuu.jpg';
import demonSlayer from '../images/demonslayer.jpg';
import attackTitan from '../images/attackontitan.jpg';
import chainsawman from '../images/chainsawman_pp.jpg';
import jujutsuKaisen from '../images/jjk_poster.jpg';

export default function anime() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className=" space-y-2 md:space-y-5">
              <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight  dark:text-darkBackgroundYellow sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Anime
              </h1>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-darkText">
              Some of the anime that i don't mind watching back
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-scale-down object-center"
                  src={narutoPoster}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    English: Naruto
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: ナルト
                  </h1>
                  <p className="leading-relaxed">
                    Moments prior to Naruto Uzumaki's birth, a huge demon known
                    as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure,
                    the Hidden Leaf Village, and wreaked havoc. In order to put
                    an end to the Kyuubi's rampage, the leader of the village,
                    the Fourth Hokage, sacrificed his life and sealed the
                    monstrous beast inside the newborn Naruto. Now, Naruto is a
                    hyperactive and knuckle-headed ninja still living in
                    Konohagakure. Shunned because of the Kyuubi inside him,
                    Naruto struggles to find his place in the village, while his
                    burning desire to become the Hokage of Konohagakure leads
                    him not only to some great new friends, but also some deadly
                    foes. Although Naruto is older and sinister events loom on
                    the horizon, he has changed little in personality—still
                    rambunctious and childish—though he is now far more
                    confident and possesses an even greater determination to
                    protect his friends and home. Come whatever may, Naruto will
                    carry on with the fight for what is important to him, even
                    at the expense of his own body, in the continuation of the
                    saga about the boy who wishes to become Hokage.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-scale-down object-center"
                  src={attackTitan}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    English: Attack on Titan
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: 進撃の巨人
                  </h1>
                  <p className="leading-relaxed">
                    Centuries ago, mankind was slaughtered to near extinction by
                    monstrous humanoid creatures called titans, forcing humans
                    to hide in fear behind enormous concentric walls. What makes
                    these giants truly terrifying is that their taste for human
                    flesh is not born out of hunger but what appears to be out
                    of pleasure. To ensure their survival, the remnants of
                    humanity began living within defensive barriers, resulting
                    in one hundred years without a single titan encounter.
                    However, that fragile calm is soon shattered when a colossal
                    titan manages to breach the supposedly impregnable outer
                    wall, reigniting the fight for survival against the
                    man-eating abominations. After witnessing a horrific
                    personal loss at the hands of the invading creatures, Eren
                    Yeager dedicates his life to their eradication by enlisting
                    into the Survey Corps, an elite military unit that combats
                    the merciless humanoids outside the protection of the walls.
                    Based on Hajime Isayama's award-winning manga, Shingeki no
                    Kyojin follows Eren, along with his adopted sister Mikasa
                    Ackerman and his childhood friend Armin Arlert, as they join
                    the brutal war against the titans
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={demonSlayer}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Demon Slayer: Kimetsu no Yaiba
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: 鬼滅の刃
                  </h1>
                  <p className="leading-relaxed">
                    DEver since the death of his father, the burden of
                    supporting the family has fallen upon Tanjirou Kamado's
                    shoulders. Though living impoverished on a remote mountain,
                    the Kamado family are able to enjoy a relatively peaceful
                    and happy life. One day, Tanjirou decides to go down to the
                    local village to make a little money selling charcoal. On
                    his way back, night falls, forcing Tanjirou to take shelter
                    in the house of a strange man, who warns him of the
                    existence of flesh-eating demons that lurk in the woods at
                    night. When he finally arrives back home the next day, he is
                    met with a horrifying sight—his whole family has been
                    slaughtered. Worse still, the sole survivor is his sister
                    Nezuko, who has been turned into a bloodthirsty demon.
                    Consumed by rage and hatred, Tanjirou swears to avenge his
                    family and stay by his only remaining sibling. Alongside the
                    mysterious group calling themselves the Demon Slayer Corps,
                    Tanjirou will do whatever it takes to slay the demons and
                    protect the remnants of his beloved sister's humanity.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={haikyuPoster}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    English: Haikyu!!
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: ハイキュー!!
                  </h1>
                  <p className="leading-relaxed">
                    Inspired after watching a volleyball ace nicknamed "Little
                    Giant" in action, small-statured Shouyou Hinata revives the
                    volleyball club at his middle school. The newly-formed team
                    even makes it to a tournament; however, their first match
                    turns out to be their last when they are brutally squashed
                    by the "King of the Court," Tobio Kageyama. Hinata vows to
                    surpass Kageyama, and so after graduating from middle
                    school, he joins Karasuno High School's volleyball team—only
                    to find that his sworn rival, Kageyama, is now his teammate.
                    Thanks to his short height, Hinata struggles to find his
                    role on the team, even with his superior jumping power.
                    Surprisingly, Kageyama has his own problems that only Hinata
                    can help with, and learning to work together appears to be
                    the only way for the team to be successful. Based on
                    Haruichi Furudate's popular shounen manga of the same name,
                    Haikyuu!! is an exhilarating and emotional sports comedy
                    following two determined athletes as they attempt to patch a
                    heated rivalry in order to make their high school volleyball
                    team the best in Japan.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={chainsawman}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    English: Chainsaw Man
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: チェンソーマン
                  </h1>
                  <p className="leading-relaxed">
                    Denji has a simple dream—to live a happy and peaceful life,
                    spending time with a girl he likes. This is a far cry from
                    reality, however, as Denji is forced by the yakuza into
                    killing devils in order to pay off his crushing debts. Using
                    his pet devil Pochita as a weapon, he is ready to do
                    anything for a bit of cash. Unfortunately, he has outlived
                    his usefulness and is murdered by a devil in contract with
                    the yakuza. However, in an unexpected turn of events,
                    Pochita merges with Denji's dead body and grants him the
                    powers of a chainsaw devil. Now able to transform parts of
                    his body into chainsaws, a revived Denji uses his new
                    abilities to quickly and brutally dispatch his enemies.
                    Catching the eye of the official devil hunters who arrive at
                    the scene, he is offered work at the Public Safety Bureau as
                    one of them. Now with the means to face even the toughest of
                    enemies, Denji will stop at nothing to achieve his simple
                    teenage dreams.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={jujutsuKaisen}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Jujutsu Kaisen
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Japanese: 呪術廻戦
                  </h1>
                  <p className="leading-relaxed">
                    Idly indulging in baseless paranormal activities with the
                    Occult Club, high schooler Yuuji Itadori spends his days at
                    either the clubroom or the hospital, where he visits his
                    bedridden grandfather. However, this leisurely lifestyle
                    soon takes a turn for the strange when he unknowingly
                    encounters a cursed item. Triggering a chain of supernatural
                    occurrences, Yuuji finds himself suddenly thrust into the
                    world of Curses—dreadful beings formed from human malice and
                    negativity—after swallowing the said item, revealed to be a
                    finger belonging to the demon Sukuna Ryoumen, the "King of
                    Curses." Yuuji experiences first-hand the threat these
                    Curses pose to society as he discovers his own newfound
                    powers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
