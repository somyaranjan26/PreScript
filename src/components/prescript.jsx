import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Logo from '../assets/logo.png'

import {
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIcon as UserCircleIconOutline,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ChatAltIcon,
  UserCircleIcon,
  CheckCircleIcon,
//   ExclamationCircleIcon,
//   ExclamationIcon,
} from '@heroicons/react/solid'

const navigation = [
  { name: 'PreScript', href: '/app', icon: ViewListIcon, current: true },
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Settings', href: '/setting', icon: UserCircleIconOutline, current: false },
]
const projects = [
  { id: 1, name: 'About us', href: '/aboutus' },
  { id: 2, name: 'Contact us', href: '/contactus' },
  { id: 3, name: 'Terms & Condition', href: '/terms' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Prescript = ({signOut, user}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [ title, setTitle] = useState([]);
  const [ note, setNote] = useState(null);

  const [ score, setScore] = useState(null);
  const [ date, setDate] = useState(null);
  const [ recommendations, setRecommendations] = useState({});

  const classes = ['xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200 max-h-screen', 'xl:col-span-3 max-h-screen']


  // const getFixedNotes = () => {
  //     const found = note.find(recommendations)
  // }

  const getRecommendationsContent = recommendations => {
    let content = []
    for (let i in recommendations) {
      content.push(
        <li key = {i}
            className="inline">
          <div
            className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
          >
            <div className="text-sm font-medium text-gray-900">{i.replace(/-/g, ' ')}</div>
          </div>{' '}
        </li>
      )

      // const getFixedNotes = () => {
        // const found = note.match(recommendations[i])
        // console.log(i + ": " + recommendations[i])
      // }

      // getFixedNotes()
    }
    return content
  };

  const HandleClick = () => {

    setRecommendations(null)
    setScore(null)
    setDate(null)

    if (title && note ) {
      const uploadNote = new FormData()
      uploadNote.append('User', "2")
      uploadNote.append('email', user.attributes.email)
      uploadNote.append('title', title)
      uploadNote.append('note', note)
  
      var requestOptions = {
        method: 'POST',
        mode: "cors",
        cache: "no-cache",
        body: uploadNote,
        redirect: "follow",
      }
      fetch('http://127.0.0.1:8000/api/', requestOptions)
          .then((res) =>  {
              return res.json()
          })
          .then((data) => { 
            
            var RecievedDate = new Date(data.created_At);
            RecievedDate = RecievedDate.toString();
            RecievedDate = RecievedDate.substring(0, RecievedDate.length - 33).replace(/ /g, ', ')

            setScore(data.score)
            setDate(RecievedDate)
            setRecommendations(data.recommendations)

          })
          .catch(error => console.log(error))
    } else {
      alert("Please Enter The Title!")
    }
  }

  return (
    <>
      <div className="min-h-full flex">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="PreScript"
                  />
                  <h1 className='text-xl ml-1.5 text-white font-medium'>PreScript</h1>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-10">
                      <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Projects</p>
                      <div className="mt-2 space-y-1">
                        {projects.map((project) => (
                          <a
                            key={project.id}
                            href={project.href}
                            className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md"
                          >
                            <span className="truncate">{project.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="PreScript"
              />
              <h1 className='text-xl ml-1.5 text-white font-medium'>PreScript</h1>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto bg-gray-800">
              <nav className="flex-1 px-2 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-10">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Support</p>
                  <div className="mt-2 space-y-1">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.href}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                      >
                        <span className="truncate">{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="lg:pl-64 flex flex-col w-0 flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <form className="w-full flex lg:ml-0" action="#" method="GET">
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p
                      className="flex items-center w-full h-full pl-8 pr-3 py-2 text-gray-900 text-md font-semibold"
                    >Hello, {user.attributes.name}</p>
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center lg:ml-6">
                <button onClick={signOut}
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-8 xl:py-10">
              <form 
                className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:grid xl:grid-cols-3"
              >
                <div className={
                    score 
                    ? classes[0]
                    : classes[1]
                }> 
                  <div>
                    <div>
                      <div className=" md:space-x-4 xl:border-b xl:pb-3">
                        <div className='flex flex-row justify-between'>
                          <input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="basis-5/6 text-2xl font-bold text-gray-900 focus:outline-none w-full" 
                            placeholder='Title here' 
                          />
                          <div className="basis-1/6 text-right">
                              <button 
                                type="button"
                                onClick={HandleClick}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              >
                                Upload
                              </button>
                            </div>
                        </div>
                      </div>

                      { score && 
                        <aside className="mt-8 xl:hidden">
                        <h2 className="sr-only">Score and Recommendation </h2>
                        <div className="space-y-5">
                            <div className="flex items-center space-x-2">
                              <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span className="text-gray-900 text-4xl font-medium">Score</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              <span className="text-green-700 text-md font-medium">{score}%</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span className="text-gray-900 text-sm font-medium">
                                Created on {date}
                              </span>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                        <div>
                            <h2 className="text-sm font-medium text-gray-500">Recommendations</h2>
                            <ul className="mt-2 leading-8">
                              {getRecommendationsContent(recommendations)}
                            </ul>
                          </div>
                        </div>
                      </aside>
                      }

                      <div className="py-3 xl:pt-6 xl:pb-0 h-[90vh]">
                        <h2 className="sr-only">Description</h2>
                        <div className="prose max-w-none h-full">
                            <textarea 
                              className='focus:outline-none w-full resize-y h-full' 
                              placeholder='Write your notes here' 
                              name="note" 
                              id="note" 
                              type="text"
                              value={note}
                              onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                { score && 
                  <aside className="hidden xl:block xl:pl-8">
                    <h2 className="sr-only">Score</h2>
                    <div className="space-y-5">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-900 text-4xl font-medium">Score</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span className="text-green-700 text-lg font-medium">{score}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-gray-900 text-sm font-medium">
                          Created on <time dateTime="2020-12-02">{date}</time>
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                      {/* <div>
                        <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                        <ul className="mt-3 space-y-3">
                          <li className="flex justify-start">
                            <a href="/" className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-5 w-5 rounded-full"
                                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">Recommendations</h2>
                        <ul className="mt-2 leading-8">
                            {getRecommendationsContent(recommendations)}
                        </ul>
                      </div>
                    </div>
                  </aside>
                }

              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
