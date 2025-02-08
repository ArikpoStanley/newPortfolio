"use client"
import Portfolio from "@/pages/Portfolio";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
    <Toaster />
    <Portfolio />
    </>
  )
}
