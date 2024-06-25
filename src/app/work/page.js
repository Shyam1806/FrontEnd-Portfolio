import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
const work = () => {
  return (
    <>
      <Header />
      <section className="projects">
        <div className="container">
          <div className="Projects-headline">
            <h2 className="pt-2 text-[22px] text-slate-600">PROJECTS</h2>
            <h1 className="pt-1 font-bold text-[52px]">My Projects</h1>
            <p className="pt-1  text-[19px]">Some things I've built with love, expertise and a pinch of <br /> magical ingredients. </p>
            <div className="projects-link-parent flex justify-between mt-8 flex-wrap">
              {/*  */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">To Do App</div>
                  <p class="text-gray-700 text-base">
                    To Do is a task management app to help you stay organized and manage your day-to-day.
                  </p>
                  <Link href="https://to-do-list-app-lyart.vercel.app/" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Portfolio App</div>
                  <p class="text-gray-700 text-base">
                    Web developer portfolio is a website that showcases a developer's past projects.A list or description of skills and services offered.
                  </p>
                  <Link href="https://shyam-frontend-portfolio.vercel.app/" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nextjs</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind css</span>

                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Covid 19 App</div>
                  <p class="text-gray-700 text-base">
                    Covid 19 App is a the process of identifying persons ("contacts") who may have been in contact with an infected individual.
                  </p>
                  <Link href="https://covid-19-tracker-app-js.netlify.app" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API Integration</span>

                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Dashboard App</div>
                  <p class="text-gray-700 text-base">
                    Dashboard App is Dashboard is a view that gives you an overview of all the activity related your app in terms of data collection and surveying activity.
                  </p>
                  <Link href="https://dashboard-minimal-version.netlify.app/" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap4</span>

                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Expenses Tracker App</div>
                  <p class="text-gray-700 text-base">
                  Expense Tracker App  that helps to keep an accurate record of your money inflow and outflow.
                  </p>
                  <Link href="#Upcoming" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reactjs</span>

                </div>
              </div>
              <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 ">
                <img class="w-full" src="/img/Project-common.png" alt="Project-snap" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Weather App</div>
                  <p class="text-gray-700 text-base">
                    Weather App is a will provide users with real-time weather information, forecasts, and other weather-related data.
                  </p>
                  <Link href="https://weather-client-lime.vercel.app" target='blank'>Visit Here</Link>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reactjs</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">API Integration</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Professional-works mt-8">
        <div className="container">
          <div className="professional-title">
            <h2 className="pt-2 text-[22px] text-slate-600">WORK</h2>
            <h1 className="pt-1 font-bold text-[52px]">My Experience</h1>
            <p className="pt-1  text-[19px]">A Quick Recap of where I've Worked </p>
            <div className="work-historyparent">
              <div className="work-history-freelancer mt-8 ml-8 p-6 bg-orange-50	">
                <h3 className="font-bold text-[19px]">Front End Developer Sep2023 - Till </h3>
                <h4>Freelancer</h4>
                <ul>
                  <li>
                    More than <span>4+ Websites have been completed</span> using Reactjs & Html.
                  </li>
                  <li>
                    1 Admin Panel For Ecommerce Dashboard have been completed using <span>Reactjs</span>
                  </li>
                  <li>
                    Worked on Ecommerce Website <span>Nextjs</span>
                  </li>

                </ul>
              </div>
              <div className="work-history mt-8 ml-8 p-6 bg-orange-50	">
                <h3 className="font-bold text-[19px]">Front End Developer May2021- Sep 2023 </h3>
                <h4>Thilash Services Private Limited</h4>
                <ul>
                  <li>
                    Created different components using <span>React</span> to render an element.
                  </li>
                  <li>
                    Responsible for <span>Third party API integration</span> like (ProveSource , Stripe
                    payment integration).
                  </li>
                  <li>
                    Worked on <span>Keycloak Authentication.</span>
                  </li>
                  <li>
                    Worked on converting the code from class based into function based.
                  </li>
                </ul>
              </div>
              <div className="work-history-1 mt-8 ml-8 p-6  bg-orange-50 mb-8">
                <h3 className="font-bold text-[19px]">Web Developer Intern Feb2021- May 2021 </h3>
                <h4>Thilash Services Private Limited</h4>
                <ul>
                  <li>
                    Worked on building a new <span>ECommerce website</span> from scratch using <span>Next.js.</span>
                  </li>
                  <li>
                    Worked on <span> Responsive</span> Website and <span>Wordpress</span> website.
                  </li>
                  <li>
                    More than 40+ websites have been created.
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  )
}

export default work