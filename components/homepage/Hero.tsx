import { Icon } from "@iconify/react";
import { PrimaryButton } from "../Button";

export default function Hero() {
  return (
    <section className="overflow-hidden relative pt-16 lg:pt-40 pb-36 lg:bg-[url('/blur_hero.png')] bg-no-repeat bg-center-top">
      <div className="px-4 mx-auto text-center max-w-7xl md:px-8">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h1">
          Creating User-Friendly and Captivating Websites
        </h1>
        <p className="max-w-sm mx-auto mt-6 text-base font-normal text-black/80">
          Hi, I&#39;m Bert, a Front-End Developer dedicated to transforming
          ideas into captivating digital solutions.
        </p>
        <div className="flex justify-center mt-6 lg:mt-14">
          <PrimaryButton href="/portfolio" icon="formkit:arrowright">
            View Portfolio
          </PrimaryButton>
        </div>
        <p className="mt-20 text-sm text-black/70 lg:mt-28">Check Out My</p>
        <div className="flex gap-4 mx-auto mt-6 lg:gap-6 lg:mt-10 w-fit">
          <a
            href="https://github.com/bertfarol"
            target="_blank"
            className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
          >
            <Icon
              icon="ri:github-fill"
              className="duration-300 h-7 w-7 group-hover:text-accent-blue"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/efarol/"
            className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
          >
            <Icon
              icon="uil:linkedin"
              className="duration-300 h-7 w-7 group-hover:text-accent-blue"
            />
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/efarolcamp7bd0"
            className="bg-[#F6F6F6] rounded-full h-[58px] w-[58px] lg:h-[74px] lg:w-[74px] flex items-center justify-center group"
          >
            <Icon
              icon="ant-design:behance-square-outlined"
              className="duration-300 h-7 w-7 group-hover:text-accent-blue"
            />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full position">
        <div className="flex justify-center max-w-screen-xl mx-auto lg:justify-between">
          <div className="hidden lg:flex gap-14">
            <Icon
              icon="devicon:css3"
              className="h-[60px] w-[60px] hero-icon01"
            />
            <Icon
              icon="skill-icons:figma-light"
              className="h-[60px] w-[60px] hero-icon02"
            />
            <Icon
              icon="vscode-icons:file-type-html"
              className="h-[60px] w-[60px] hero-icon03"
            />
            <Icon
              icon="devicon:tailwindcss"
              className="h-[60px] w-[60px] hero-icon04"
            />
          </div>
          <div className="flex gap-11 md:gap-14">
            <Icon
              icon="skill-icons:react-dark"
              className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon03"
            />
            <Icon
              icon="devicon:vscode"
              className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon04"
            />
            <Icon
              icon="logos:javascript"
              className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon01"
            />
            <Icon
              icon="devicon:nextjs"
              className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px] hero-icon02"
            />
          </div>
        </div>
      </div>
    </section>
  );
}