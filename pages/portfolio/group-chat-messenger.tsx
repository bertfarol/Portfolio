import { PrimaryButton } from "@/components/Button";
import Layout from "@/components/Layout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function GroupChatMessenger() {
  return (
    <Layout
      title="Twitter Clone App"
      description=" I developed this Twitter clone web application not merely as a replication of the existing platform, but rather as a means to gain a deeper understanding of its development process while showcasing my skills and knowledge in Next.js."
      image="/twitterclone-ogimage.jpg"
    >
      <main>
        <section className="pb-8 lg:pb-36">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <ul className="flex gap-1 py-10 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-accent-blue">
                  Home
                </Link>{" "}
                /
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent-blue">
                  Portfolio
                </Link>{" "}
                /
              </li>
              <li className="text-slate-500">Group Chat Messenger</li>
            </ul>

            <div className="max-w-4xl">
              <p className="text-accent-blue">Web Application</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-h2">
                Group Chat Messenger
              </h1>
              <p className="mt-4 relative after:content-[''] after:absolute after:left-0 after:top-2.5 after:bg-black lg:after:h-[2px] after:w-7 lg:pl-[57px] text-black/80">
                Promote communication and interaction among multiple users in a
                single conversation.
              </p>
            </div>
            <div className="max-w-4xl mt-6 text-base md:mt-12 md:text-lg">
              <p className="leading-relaxed">
                I developed this Group Chat Messenger web application to offer
                users a seamless and efficient way to connect and communicate
                with your friends and loved ones. With this application, you can
                bring all your friends together in a single chat space.
              </p>
              <div className="flex mt-6 lg:mt-14">
                <PrimaryButton
                  href="https://group-chat-messenger.vercel.app/"
                  icon="formkit:arrowright"
                  target="_blank"
                >
                  View Group Chat Messenger
                </PrimaryButton>
              </div>
              <div className="mt-8 lg:mt-16">
                <p className="text-sm text-slate-500">Technologies:</p>
                <ul className="flex flex-wrap gap-6 mt-2 text-base">
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:react" className="w-6 h-6" />
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:firebase" className="w-6 h-6" />
                    <span>Firebase Authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="logos:firebase" className="w-6 h-6" />
                    <span>Firestore Database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="devicon:tailwindcss" className="w-8 h-6" />
                    <span>tailwindcss</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-500">Hosting platform:</p>
                <div className="flex items-center gap-2 mt-2 text-base">
                  <Icon icon="devicon:vercel" className="w-6 h-6" />
                  <span>Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-36 bg-[#092152]">
          <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
            {/* contianer */}
            <div id="home">
              <h2 className="text-3xl font-semibold lg:mt-0 xl:text-h3">
                Group Chat Messenger
              </h2>
              <div className="mt-8">
                <Image
                  src="/portfolio/realtime-group-chat/group-chat-login.png"
                  width="1920"
                  height="947"
                  alt="Group Chat Messenger"
                />
              </div>
            </div>

            {/* end**contianer */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
