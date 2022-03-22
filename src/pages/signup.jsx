import Logo from '../assets/logo.png'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  InformationCircleIcon,
  MenuIcon,
  ShieldCheckIcon,
  PhoneIcon,
  XIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'About',
    href: '/',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Contact',
    href: '/',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: PhoneIcon,
  },
  { 
    name: 'Terms & Conditions', 
    href: '/', 
    description: "Your customers' data will be safe and secure.", 
    icon: ShieldCheckIcon },
]


export const SignUp = () => {

return (
    <div className="relative max-w-screen-2xl mx-auto flex flex-col">
      <Popover className="bg-white shadow w-full z-10">
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
              <a href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="/"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact
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
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer? 
                    {" "}
                    <a href="/" className="text-blue-600 hover:text-blue-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>


        <div className="px-6 sm:px-14 py-8 md:px-40 md:py-8 lg:px-60 lg:py-10 xl:px-72 xl:py-14">

            <p className="text-2xl leading-6 font-medium text-gray-900">Account Registration</p>
            <form action="signup" method="post" className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personal Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Completion of all feilds is necessary.
                      </p>
                      {/* {% for m in messages %}
                        <p className="text-red-500 text-sm font-semibold"> {{m}}* </p>
                      {% endfor %} */}
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="first-name" id="first-name" autoComplete="given-name" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
              
                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="last-name" id="last-name" autoComplete="family-name" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>

                      {/* <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Organization / Hospital name
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="hospital_name" autoComplete="address" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
              
                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Designation
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="designation" autoComplete="designation" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div> */}
              
                      {/* <div className="sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Hospital address
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="address" id="address" autoComplete="address" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div> */}
              
                      <div className="sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <div className="mt-1">
                          <input type="text" required name="city" id="city" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
              
                      <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input type="text" name="region" id="region"  className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
              
                      <div className="sm:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <div className="mt-1">
                           <input type="text" name="country" id="country" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Account Credentials
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        You will use this to sign in to your account.
                      </p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email address
                            </label>
                            <div className="mt-1">
                              <input id="email" required name="email" type="email" autoComplete="email" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                              Password
                            </label>
                            <div className="mt-1">
                              <input type="password" required name="password" id="password" autoComplete="given-name" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>
                  
                          <div className="sm:col-span-3">
                            <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">
                              Confirm Password
                            </label>
                            <div className="mt-1">
                              <input type="password" required name="cpassword" id="cpassword" className="border px-1.5 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              
                <div className="pt-5">
                  <div className="grid grid-cols-6 justify-between">
                    <div className="col-span-4 md:py-2.5 mr-2">
                      <p className="text-xs leading-5 text-gray-500">
                        By signing up, you agree to our {' '}
                        <a href="/" className="font-medium text-gray-900 hover:underline">
                          Terms
                        </a>
                        {' '} and {' '}
                        <a href="/" className="font-medium text-gray-900 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                      <div className="col-span-2 flex justify-end">
                          <a href="/"><button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Sign up
                          </button></a>
                      </div>
                  </div>
                </div>
              </form>
        </div>
    </div>
)
}