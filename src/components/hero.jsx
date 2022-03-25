import Lottie from 'react-lottie-player'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  InformationCircleIcon,
  MenuIcon,
  ShieldCheckIcon,
  PhoneIcon,
  XIcon,
} from '@heroicons/react/outline'

import Logo from '../assets/logo.png'
import LottieJson from '../assets/lottieFiles.json'

const features = [
  {
    name: 'About',
    href: '/about',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: PhoneIcon,
  },
  { 
    name: 'Terms & Conditions', 
    href: '/', 
    description: "Your customers' data will be safe and secure.", 
    icon: ShieldCheckIcon },
]


export const Hero = () => {
  return (
    <div className="relative bg-gray-50">
      <Popover className="bg-white shadow fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className='flex'>
                <img
                  className="w-auto h-10 sm:h-12"
                  src={Logo}
                  alt="Prescript"
                />
              <span className="self-center font-logo text-xl sm:text-2xl font-medium  text-blue-800">PreScript</span>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="/signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                  <a href="/" className='flex'>
                    <img
                      className="w-auto h-10"
                      src={Logo}
                      alt="Prescript"
                    />
                    <span className="self-center font-logo text-lg sm:text-3xl font-medium  text-blue-800">PreScript</span>
                  </a>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer? 
                    {" "}
                    <a href="/" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-32 pb-20 text-center lg:py-72 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Score Clinical </span>{' '}
              <span className="block text-blue-600 xl:inline">Patient Notes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://coming-soon.d1u3s8zp8q85j0.amplifyapp.com/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://coming-soon.d1u3s8zp8q85j0.amplifyapp.com/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full pb-20 h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">

          <Lottie 
              className="inset-0 w-full xl:w-2/3 h-full object-cover"  
              animationData={LottieJson}
              background="transparent" 
              loop 
              play
              />
        </div>
      </main>
    </div>
  )
}
