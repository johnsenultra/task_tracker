import React from "react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <main className="mx-auto w-full bg-[#40376E] text-[#D4E4BC]">
      <header className="mx-auto flex max-w-[1330px] items-center justify-between">
        <div className="py-3 text-[35px] font-semibold tracking-[3px]">
          <p>Taskly</p>
        </div>
        <nav className="me-[20px] space-x-15">
          <Link>Features</Link>
          <Link>Demo</Link>
          <Link>Contact</Link>
        </nav>
      </header>
      <section className="max-h-[100%] bg-[#48233C]">
        <div className="mx-auto max-w-[1330px] pt-[70px] text-center">
          <div className="text-[5.5rem] font-light">
            <p>Stay on tack,</p>
            <p>One task at a time</p>
          </div>
          <div>
            <p>
              A minimalist tast tracker built to simply your workflow and boost
              your fucos.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
