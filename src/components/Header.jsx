import { useState } from "react"
import { Outlet, Link } from "react-router-dom"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <main>
      <header className="sticky top-0 z-50 border bg-[#96ACB7] text-[#D4E4BC] transition-all duration-300">
        {/* Header Section */}
        <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-8">
          <div className="py-3 text-[2.2rem] font-semibold tracking-[3px]">
            <Link to="/">Taskly</Link>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="top-0 z-50 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-gray-800 hover:bg-[#85999F] focus:ring-[#D4E4BC] focus:outline-none md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open Main Menu</span>
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-8"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19,5 L5,19 M19,19 L5,5"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-8"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} absolute top-full right-0 left-0 w-full bg-[#96ACB7] md:static md:block md:w-auto`}
          >
            <div className="flex flex-col space-y-4 p-4 md:flex-row md:items-center md:space-y-0 md:space-x-8 md:p-0">
              <a href="#how-it-works" className="hover:text-[#D4E4BC]/80">
                How It Works
              </a>
              <a href="#about" className="hover:text-[#D4E4BC]/80">
                About
              </a>
              <button className="rounded-lg bg-[#48233C] px-3 py-2 hover:bg-[#48233C]/90">
                <Link to="/signup" className="font-medium">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </main>
  )
}
