import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Summary",
  description: "",
};

export default function RootLayout({ children }) {
  return (
      <>
        {children}
      </>
  );
}