import React from "react";

function App() {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <header>
        <div className="flex flex-row justify-center p-4 w-full leading-non">
          <nav className="flex p-4 bg-white rounded-full text-black shadow-sm">
            <ul className="space-x-6 flex items-center list-none text-lg font-medium">
              <li>
                <a
                  href=""
                  className="hover:bg-transition hover:bg-gradient-to-r hover:text-transparent hover:from-fuchsia-400 hover:to-purple-700 hover:bg-clip-text"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-transition hover:bg-gradient-to-r hover:text-transparent hover:from-fuchsia-400 hover:to-purple-700 hover:bg-clip-text"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-transition hover:bg-gradient-to-r hover:text-transparent hover:from-fuchsia-400 hover:to-purple-700 hover:bg-clip-text"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:bg-transition hover:bg-gradient-to-r hover:text-transparent hover:from-fuchsia-400 hover:to-purple-700 hover:bg-clip-text"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="max-w-6xl mx-auto">
        <section className="py-20">
          <h1 className="text-5xl font-bold">Hi!</h1>
          <h1 className="text-6xl font-bold">
            You can call me{" "}
            <span className="transition-colors bg-gradient-to-r from-fuchsia-400 to-purple-700 bg-clip-text text-transparent">
              Nugra
            </span>
          </h1>
          <p className="text-2xl font-normal mt-4 max-w-4xl mb-4">
            I'm a Software Engineer eager to learn new things and love writing
            codes. My specialities is developing web apps.
          </p>
          <button className="p-3 mb-4 font-semibold text-xl leading-none bg-gray-400 text-white border rounded-md hover:scale-105 border-gray-500 focus:border-4 focus:border-blue-300">
            Learn more about me
          </button>
          <div className="flex space-x-4">
            <a href="#" target="_blank">
              Resume
            </a>
            <a href="https://github.com/nugrazurus" target="_blank">
              github
            </a>
          </div>
        </section>
        <section className="py-20 leading-none">
          <h1 className="font-bold text-4xl transition-colors bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p>Some projects that I've done</p>
          <ul className="mt-4 grid grid-cols-3 gap-4">
            <li className="border rounded-xl hover:scale-105">
              <a href="" className="flex flex-col h-full items-start p-4">
                <h4 className="text-xl font-semibold">Magang MBKM</h4>
                <p className="text-sm">
                  Applying MBKM Program in each faculty in Tanjungpura
                  University
                </p>
                <p className="text-sm font-semibold text-fuchsia-900">
                  Tech stack: Laravel, MySQL
                </p>
                <img src="" alt="" />
              </a>
            </li>
            <li className="border rounded-xl hover:scale-105">
              <a href="" className="flex flex-col h-full items-start p-4">
                <h4 className="text-xl font-semibold">Portal MBKM</h4>
                <p className="text-sm">
                  Portal for students inbound in Tanjungpura University
                </p>
                <p className="text-sm font-semibold text-fuchsia-900">
                  Tech stack: Laravel, MySQL
                </p>
                <img src="" alt="" />
              </a>
            </li>
            <li className="border rounded-xl hover:scale-105">
              <a href="" className="flex flex-col h-full items-start p-4">
                <h4 className="text-xl font-semibold">Kuliah Untan</h4>
                <p className="text-sm">
                  Lecturer video of some major in Tanjungpura University
                </p>
                <p className="text-sm font-semibold text-fuchsia-900">
                  Tech stack: Laravel, MySQL
                </p>
                <img src="" alt="" />
              </a>
            </li>
          </ul>
          <button className="mt-4 p-4 rounded-lg border border-gray-400 hover:scale-105 focus:border-4 focus:border-blue-300">
            See more projects
          </button>
        </section>
        <footer className="mt-6">
          <main className="flex flex-col items-center border-t pt-6">
            <div>
              <p className="text-center font-medium">Reach me out</p>
              <div className="flex justify-center space-x-6">
                <a href="">Email</a>
                <a href="">LinkedIn</a>
                <a href="">Github</a>
              </div>
              <p>© Nugra Zurus Pratama {new Date().getFullYear()}</p>
            </div>
          </main>
        </footer>
      </div>
    </div>
  );
}

export default App;
