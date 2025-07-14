import React from "react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <main className="m-h-[screen] w-screen bg-[#48233C] text-[#D4E4BC]">
      {/* Header Section */}
      {/* <header className="mx-auto flex items-center justify-between bg-[#96ACB7] px-[170px]">
        <div className="py-3 text-[2.2rem] font-semibold tracking-[3px]">
          <a href="/">Taskly</a>
        </div>
        <nav className="me-[20px] space-x-15">
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <Link to="/signin">Login</Link>
        </nav>
      </header> */}
      <section className="min-h-[500px]">
        {/* Hero Section */}
        <div className="mx-auto max-w-[1330px] pt-[70px] text-center">
          <div className="text-[5vw] font-light uppercase">
            <p>Stay on tack,</p>
            <p>One task at a time</p>
          </div>
          <div className="mt-2 text-base opacity-75 sm:text-lg">
            <p>
              A minimalist task tracker built to simply your workflow and boost
              your fucos.
            </p>
          </div>
          {/* Button */}
          <div className="mx-auto mt-10 flex flex-col content-center justify-center gap-5 px-10 text-lg font-semibold md:flex-row">
            <button className="cursor-pointer rounded-xl border-1 border-[#96ACB7] px-6 py-2 hover:bg-[#D4E4BC] hover:text-[#48233C]">
              See How It Works
            </button>
            <button className="group relative cursor-pointer overflow-hidden rounded-xl border-1 border-[#96ACB7] bg-[#36558F] before:absolute before:inset-0 before:z-[-1] before:bg-[#36558F] before:transition-transform before:duration-300 before:ease-in-out after:absolute after:inset-0 after:z-[-2] after:bg-[#D4E4BC] hover:-translate-y-0.5 hover:bg-[#D4E4BC] hover:text-[#48233C] hover:shadow-lg hover:shadow-gray-600/30 hover:before:-translate-x-full">
              <Link to="/signin" className="inline-flex px-6 py-2">
                Get Started
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="mt-2 -mr-1 ml-4 stroke-white stroke-2 group-hover:stroke-[#48233C]"
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
              </Link>
            </button>
          </div>
        </div>
      </section>
      {/* section for current overview of the system  */}
      <section className="relative">
        <div className="mx-auto flex max-w-3xl flex-row">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
      </section>
      {/* About section */}
      <section id="about" className="item-center mt-20 flex justify-center">
        <div className="">
          <h6 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What are we about?
          </h6>
        </div>
      </section>
      {/* How-it-works section */}
    </main>
  )
}
