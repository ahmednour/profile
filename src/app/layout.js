import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Ahmed Nour",
  description: "Front-end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} antialiased`}>
        <Header/>
        <StairTransition/>
        <PageTransition>
           {children}
        </PageTransition>
      </body>
    </html>
  );
}
