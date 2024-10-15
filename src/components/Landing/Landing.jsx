import React from "react"
 
function Landing() {
    
      return (
        <div className='absolute inset-0  h-[580px] min-h-screen' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}>
        <header>
                  <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                      <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                    
                          <li>
                              <a href="./Login" className="flex items-center text-black-200">
                                  Log In
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                              </a>
                          </li>
                      </ul>
                  </nav>
              </header>

              <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                  <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-brown font-bold text-4xl xl:text-4xl">
                     HAPPINESS IS A
                        <span style={{ color: '#F06B1F' }}> PIECE OF CAKE</span>

                      </h1>
                      <p className="text-black-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                             Effective cake shop management involves ensuring high-quality ingredients
                              and consistent recipes to delight customers. Streamlined operations and
                               inventory management help reduce waste and improve profitability.
                                Exceptional customer service and engaging marketing strategies are key
                                 to attracting and retaining clients. Regular staff training and maintenance
                                  of a clean, inviting environment also contribute to a successful and thriving cake shop.                   </p>
                      <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                          <a href="./Login" className="px-7 py-3 w-full bg-white text-black-800 text-center rounded-md shadow-md block sm:w-auto">
                              Get started
                          </a>
                      </div>
                  </div>
                  <div className="flex-1 text-center mt-3 lg:mt-0 lg:ml-2">
                      <img src="https://www.kindpng.com/picc/m/732-7329685_e-commerce-website-background-image-e-commerce-website.png" className="w-full mx-auto sm:w-11/12  lg:w-full" />
                  </div>
              </section>
          </div>
      )
  }
  
  export default Landing