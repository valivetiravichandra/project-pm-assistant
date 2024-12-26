import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Project PM Assistant
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Your intelligent project management companion. Streamline your workflow, manage tasks efficiently, and boost productivity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Login <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Task Management</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Organize and track your projects with intuitive task management tools.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Collaboration</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Work seamlessly with your team members in real-time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics & Insights</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Make data-driven decisions with powerful analytics tools.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}