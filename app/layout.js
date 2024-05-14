import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SectionContextProvider } from "@/context/sectionSelectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haroon | Personal Portfolio",
  description: "A full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative min-h-[200vh]`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <SectionContextProvider>
        <Header />
        {children}
        </SectionContextProvider>
      </body>
    </html>
  );
}
