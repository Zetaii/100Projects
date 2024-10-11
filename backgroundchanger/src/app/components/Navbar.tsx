"use client"
import React, { useState, useEffect } from "react"

const Navbar = () => {
  // // Step 1: State to track the theme
  // const [isDarkMode, setIsDarkMode] = useState(true)

  // // Step 2: Effect to apply the theme on component load
  // useEffect(() => {
  //   const root = window.document.documentElement
  //   if (isDarkMode) {
  //     root.classList.add("dark")
  //   } else {
  //     root.classList.remove("dark")
  //   }
  // }, [isDarkMode])

  // // Step 3: Function to toggle the theme
  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode)
  // }

  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <nav
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 to-gray-300 text-black"
      } shadow-lg sticky top-0 z-50`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-400">
            BrandName
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400">
            About
          </a>
          <a href="/services" className="hover:text-blue-400">
            Services
          </a>
          <a href="/blog" className="hover:text-blue-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Search Bar and CTA Button */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`rounded-full ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400`}
            />
            <span className="absolute right-3 top-2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>

          {/* Profile Icon / Dropdown */}
          <div className="relative">
            <button className="hover:text-blue-400">
              <i className="fas fa-user-circle text-2xl"></i>
            </button>
            {/* Add dropdown content here if needed */}
          </div>

          {/* Call to Action Button */}
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Log In
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
