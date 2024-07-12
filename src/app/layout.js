import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { CursorProvider } from "@/context/CursorContext";

const poppins = Lato({
  subsets: ["latin"],
  weight: ["100",  "300", "400", "700", "900"],
});

export const metadata = {
  title: "Mock.io",
  description: "Ai Powered Interview Prep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}  >
       <CursorProvider>
       <div className="w-[100%] h-screen bg-[#F1F0EE]">
        
          <Cursor/>
        <div className="" >
          <Navbar />
        </div>
          {children}
        </div>
       </CursorProvider>
      </body>
    </html>
  );
}
