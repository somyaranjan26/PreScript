import Lottie from 'react-lottie-player'

import DashboardJSON from '../assets/dashboard.json'

export const CTA = () => {
    return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block">Start your free trial today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                nec.
              </p>
              <a
                href="https://app.d1u3s8zp8q85j0.amplifyapp.com/"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="md:-mb-24 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h">
            <Lottie 
              className="h-3/4 transform translate-x-6 translate-y-6 rounded-lg bg-white object-cover object-left-top sm:translate-x-16 lg:translate-y-20"  
              animationData={DashboardJSON}
              background="transparent"  
              loop 
              play
              />
          </div>
        </div>
      </div>
    </div>
  )
}