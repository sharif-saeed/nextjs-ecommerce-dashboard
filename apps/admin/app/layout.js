import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saeed Sharifi Academy",
  description: "saeed-sharifi.ir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <Sidebar />
      <main>{children}</main>
    </body>
  </html>
  );
}
