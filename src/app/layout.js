import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deep Blue Diving Club",
  description: "The diving club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
