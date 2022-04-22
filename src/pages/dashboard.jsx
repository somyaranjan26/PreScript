import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  SortAscendingIcon,
  // StarIcon,
} from '@heroicons/react/solid'

import {
    HomeIcon,
    MenuAlt1Icon,
    UserCircleIcon as UserCircleIconOutline,
    ViewListIcon,
    XIcon,
  } from '@heroicons/react/outline'


import Logo from '../assets/logo.png'

const navigation = [
  { name: 'New Note', href: '#', current: true },
]

const SideNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: ViewListIcon, current: true },
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
    { name: 'Settings', href: '/setting', icon: UserCircleIconOutline, current: false },
  ]

const support = [
    { id: 1, name: 'About us', href: '/aboutus' },
    { id: 2, name: 'Contact us', href: '/contactus' },
    { id: 3, name: 'Terms & Condition', href: '/terms' }
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const projects = [
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 90,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 60,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 80,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 93,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 93,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 93,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 93,
  },
  {
    name: 'Lorem ipsum',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'consectetur adipiscing elit sed do eiusmod tempor...',
    tech: 'Laravel',
    lastDeploy: 'April 8, 2022, 2:33 p.m.',
    score: 93,
  },
  // More projects...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const Dashboard = () => {
  return (
    <>
      <div className="relative min-h-full flex flex-col">
        {/* Navbar */}
        <Disclosure as="nav" className="flex-shrink-0 bg-white fixed w-full z-10 border-b border-gray-200 drop-shadow-md">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  {/* Logo section */}
                  <div className="flex items-center px-2 lg:px-0 xl:w-64">
                    <div className="flex flex-shrink-0 flex-row">
                      <img
                        className=" h-10 sm:h-12 w-auto"
                        src={Logo}
                        alt="PreScript"
                      />
                      <span className="self-center font-logo text-xl sm:text-2xl font-medium  text-blue-800">PreScript</span>
                    </div>
                  </div>

                  {/* Search section */}
                  <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="w-full px-2 lg:px-6">
                      <label htmlFor="search" className="sr-only">
                        Search projects
                      </label>
                      <div className="relative text-indigo-200 focus-within:text-gray-400">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-200 bg-opacity-25 text-gray-100 placeholder-gray-400 focus:outline-gray-400 focus:bg-gray-50 focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                          placeholder="Search projects"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* Links section */}
                  <div className="hidden lg:block lg:w-80">
                    <div className="flex items-center justify-end">
                      <div className="flex">
                          <a
                            href="/app"
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-800"
                          >
                            New Note
                          </a>
                      </div>
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-4 relative flex-shrink-0">
                        <div>
                          <Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 z-10">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-white bg-indigo-800'
                          : 'text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-800">
                  <div className="px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto pt-10 xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white pt-10 xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-64 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 xl:block xl:space-y-8">

                    <div className="flex flex-row justify-between">
                            {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900">Debbie Lewis</div>
                          <a href="/" className="group flex items-center space-x-2.5">
                            <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
                              debbielewis
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Action buttons */}
                      <button
                        type="button"
                        className="xl:hidden inline-flex items-center justify-center mb-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                        >
                            New Note
                      </button>
                    </div>
                      
                      <div className="hidden xl:flex flex-1 flex-col overflow-y-auto ">
                        <nav className="flex-1 px-2 py-4">
                            <div className="space-y-1">

                            <button
                                type="button"
                                className="w-full inline-flex items-center justify-center mb-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                >
                                New Project
                            </button>

                            <div className="hidden lg:block">

                            </div>
                            {SideNavigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                <item.icon
                                    className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-600 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                                </a>
                            ))}
                            </div>
                            <div className="mt-10">
                            <p className="px-3 text-xs font-semibold text-gray-800 uppercase tracking-wider">Support</p>
                            <div className="mt-2 space-y-1">
                                {support.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-white hover:bg-indigo-700"
                                >
                                    <span className="truncate">{item.name}</span>
                                </a>
                                ))}
                            </div>
                            </div>
                        </nav>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="bg-white lg:min-w-0 lg:flex-1 xl:border-r xl:border-l xl:border-gray-200">
              <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                <div className="flex items-center">
                  <h1 className="flex-1 text-lg font-medium">Paitent Notes</h1>
                  <Menu as="div" className="relative">
                    <Menu.Button className="z-1 w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <SortAscendingIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      Sort
                      <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Name
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Date modified
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Date created
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
              <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                {projects.map((project) => (
                  <li
                    key={project.repo}
                    className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                  >
                    <div className="flex items-center justify-between space-x-4">
                      {/* Repo name and link */}
                      <div className="min-w-0 space-y-3">
                        <div className="flex items-center space-x-3">
                          <span
                            className={classNames(
                              project.active ? 'bg-green-100' : 'bg-gray-100',
                              'h-4 w-4 rounded-full flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span
                              className={classNames(
                                project.active ? 'bg-green-400' : 'bg-gray-400',
                                'h-2 w-2 rounded-full'
                              )}
                            />
                          </span>

                          <span className="block">
                            <h2 className="text-sm font-medium">
                              <a href={project.href}>
                                <span className="absolute inset-0" aria-hidden="true" />
                                {project.name}{' '}
                                <span className="sr-only">{project.active ? 'Running' : 'Not running'}</span>
                              </a>
                            </h2>
                          </span>
                        </div>
                        <a href={project.repoHref} className="relative group flex items-center space-x-2.5">
                          <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                            {project.repo}
                          </span>
                        </a>
                      </div>
                      <div className="sm:hidden">
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      {/* Repo meta info */}
                      <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                        <p className="flex items-center space-x-4">
                          <a
                            href={project.siteHref}
                            className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                          >
                            Score:
                          </a>
                          <p className="flex text-green-600 text-sm space-x-2">{project.score}%</p>
                        </p>
                        <p className="flex text-gray-500 text-sm space-x-2">
                          <span>Created At: {project.lastDeploy}</span>r
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}