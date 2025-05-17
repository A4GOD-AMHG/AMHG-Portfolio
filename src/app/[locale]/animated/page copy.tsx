'use client'

import { useEffect } from "react";
// import { getTranslations, setRequestLocale } from "next-intl/server";

// type Props = {
//   params: Promise<{ locale: string }>;
// };

export default function HomePage() {
  // export default function HomePage({ params }: Props) {
  // const { locale } = params;
  // setRequestLocale(locale);

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    });

  }, [])

  // const t = await getTranslations('HomePage');

  return (
    <>
      <div className="text-container">
        Bubbles
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
    // <main className="flex flex-col backdrop:grayscale-75 items-center text-center justify-center w-full min-w-0 min-h-[calc(100dvh-2.75rem)] mx-auto max-w-7xl">
    //   <h1 className="text-4xl font-extrabold mb-2">{t('title')}</h1>

    //   <h2>{t.rich('description', {
    //     code: (chunks) => (<code className="text-gray-800 dark:text-white font-bold">{chunks}</code>)
    //   })}</h2>



    //   <button
    //     type="button"
    //     className="cursor-pointer hover:bg-hover-background active:bg-active-background rounded-md border border-button-border-color p-1.5 [transition:background_20ms_ease-in,_color_0.15s]"
    //   >{t('button')}</button>
    // </main>
  );
}