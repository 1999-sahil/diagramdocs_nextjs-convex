"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { useEffect } from "react";

export default function Home() {

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log('--', user)
  }, [user]);
  
  return (
    <div className=''>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}
