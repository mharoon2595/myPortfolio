import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SectionContextProvider } from "@/context/sectionSelectionContext";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Haroon | Personal Portfolio",
  description: "A full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body
        className={`bg-gray-50 text-gray-950 relative min-h-[200vh] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]  h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <SectionContextProvider>
          <Header />
          {children}
        </SectionContextProvider>
      </body>
    </html>
  );
}
