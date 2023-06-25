import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function Layout({ children, title, description, image }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/e-icon-dark.svg" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}