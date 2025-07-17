export default function Signin() {
  return (
    <main className="grow">
      <div className="flex min-h-screen">
        <div className="relative hidden w-1/2 items-center justify-center p-12 lg:flex">
          <div></div>
          <div></div>
          <div>
            <blockquote>
              The best way to predict the future is to create it
            </blockquote>
            <p>-Peter Drucker</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create your account
              </h2>
              <p className="tex-gray-600 mt-2">
                Join Taskly to to make your progress
              </p>
            </div>
            {/* Input fields */}
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="mt-1 block rounded-xl border border-gray-300 px-3 py-3 shadow-sm focus:border-black focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="mt-1 block rounded-xl border border-gray-300 px-3 py-3 shadow-sm focus:border-black focus:ring-black focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="•••••••••"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="term"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  name="terms"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  {" I agree to the "}
                  <a
                    href="#terms"
                    className="font-medium text-black hover:text-gray-800"
                  >
                    Terms of Service
                  </a>
                  {" And "}
                  <a
                    href="#policy"
                    className="font-medium text-black hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl border border-transparent bg-black px-4 py-3 font-medium text-white shadow-sm hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              >
                Create account
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Already have an account?
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div>
                <a href="/signup">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
