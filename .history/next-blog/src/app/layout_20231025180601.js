import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextprovider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Public Land Nomad Blog",
  description:
    "Welcome to our bowhunting blog and app, your ultimate guides to the wild world of bowhunting. Explore hunting tips, gear reviews, and real-life adventures. Join our vibrant community of passionate bowhunters, where the thrill of the hunt comes alive. Start your journey with us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextprovider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextprovider>
      </body>
    </html>
  );
}
