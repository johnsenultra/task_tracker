import React from "react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <main className="m-h-[screen] w-screen bg-[#36558F] text-[#D4E4BC]">
      {/* Header Section */}
      <header className="mx-auto flex items-center justify-between bg-[#96ACB7] px-[170px]">
        <div className="py-3 text-[2.2rem] font-semibold tracking-[3px]">
          <p>Taskly</p>
        </div>
        <nav className="me-[20px] space-x-15">
          <Link>Features</Link>
          <Link>Demo</Link>
          <Link>Contact</Link>
        </nav>
      </header>
      <section className="min-h-[600px] bg-[#48233C]">
        {/* Hero Section */}
        <div className="mx-auto max-w-[1330px] pt-[70px] text-center">
          <div className="text-[5vw] font-light uppercase">
            <p>Stay on tack,</p>
            <p>One task at a time</p>
          </div>
          <div className="mt-2 text-2xl opacity-75">
            <p>
              A minimalist task tracker built to simply your workflow and boost
              your fucos.
            </p>
          </div>
          {/* Button */}
          <div className="group mt-20 inline-flex">
            <button className="relative inline-flex cursor-pointer overflow-hidden rounded-[9px] bg-[#36558F] px-9 py-3 text-[1.1rem] font-semibold before:absolute before:inset-0 before:z-[-1] before:bg-[#36558F] before:transition-transform before:duration-300 before:ease-in-out after:absolute after:inset-0 after:z-[-2] after:bg-[#D4E4BC] hover:-translate-y-0.5 hover:bg-[#D4E4BC] hover:text-[#48233C] hover:shadow-lg hover:shadow-gray-600/30 hover:before:-translate-x-full">
              Get Started
              <svg
                aria-hidden="true"
                viewBox="0 0 10 10"
                height="10"
                width="10"
                fill="none"
                className="mt-2 -mr-2 ml-4 stroke-white stroke-2 group-hover:stroke-[#48233C]"
              >
                <path
                  d="M0 5h7"
                  className="opacity-0 transition group-hover:opacity-100"
                ></path>
                <path
                  d="M1 1l4 4-4 4"
                  className="transition group-hover:translate-x-[3px]"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
