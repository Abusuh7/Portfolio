"use client";

import { useState, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Pages and Components
import Project from "./components/projects";
import AboutMe from "./components/aboutme";
import Framework from "./components/frameworks";
import Languages from "./components/languages";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Create refs for each section
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);

  // Function to handle scrolling to a section
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.name === "About Me") scrollToSection(aboutMeRef);
                  else if (item.name === "Projects")
                    scrollToSection(projectRef);
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.name === "About Me")
                          scrollToSection(aboutMeRef);
                        else if (item.name === "Projects")
                          scrollToSection(projectRef);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to my Web Development Portofolio!
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              I'm Abdullah Suhail, a passionate web developer based in Srilanka.
              Here, you'll get a glimpse of my journey in the world of web
              development, where creativity meets functionality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {/* About Me Section */}
      <div ref={aboutMeRef} className="bg-gray-50">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl mb-2 font-bold text-gray-900 sm:text-1xl">
              My Skills
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              What I Do
            </h2>
            <p className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              I'm not just a developer; I'm a digital dreamweaver.<br></br>{" "}
              Crafting immersive online experiences is not just a job but my
              calling. Discover below how I can help you.
            </p>
          </div>
          <div className="mt-28">
            <AboutMe />
          </div>
        </div>
      </div>
      {/* Projects Done */}
      <div ref={projectRef} className="bg-gray-50">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              My Projects
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:text-xl/8">
              Here are some of the projects I've worked on recently. Want to see
              more?{" "}
              <a href="#" className="font-medium text-indigo-600">
                View all projects
              </a>
            </p>
          </div>
          <div className="mt-8">
            <Project />
          </div>
        </div>
      </div>

      {/* Frameworks Used */}
      <div className="bg-gray-50">
        <div className="relative isolate px-6 pt-10 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Frameworks I've Used
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:text-xl/8">
              I've worked with a variety of frameworks and libraries to bring
              your projects to life. Here are some of the tools I use.
            </p>
          </div>
          <div className="mt-8">
            <Framework />
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="bg-gray-50"> 
            <Languages />
      </div>
    </div>
  );
}
