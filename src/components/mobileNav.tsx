"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"
import { MdContacts } from "react-icons/md"
import Link from "next/link"
import { MdWorkspacesFilled, MdMiscellaneousServices,MdReviews } from "react-icons/md";

const navVariants = {
  hidden: { y: 100, opacity: 0 },  // start below screen
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const MobileNav = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-row fixed bottom-0 right-0 left-0 z-[1000] justify-around
                 shadow-lg py-4 rounded-4xl backdrop-blur-md bg-white/60 mx-4 my-3 text-black"
    >
      <Link href="/"><FaHome size={22} /></Link>
      <Link href="#how-it-works"><MdWorkspacesFilled size={22} /></Link>
      <Link href="#download-app"><GrProjects size={22} /></Link>
      <Link href="#services"><MdMiscellaneousServices size={22} /></Link>
      <Link href="#reviews"><MdReviews size={22} /></Link>
    </motion.div>
  )
}

export default MobileNav
