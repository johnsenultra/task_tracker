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
        <div className="justify-cente flex w-full items-center p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create your account
              </h2>
              <p className="tex-gray-600 mt-2">
                Join Taskly to to make your progress
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="mt-1 block rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black focus:outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
