"use client";

import NextNavbar from "@/components/Navbar/Navbar";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeaderBar />
      <NextNavbar />
      {/* <Content /> */}
      <NewsLetter />
      <Footer />
    </main>
  );
}
