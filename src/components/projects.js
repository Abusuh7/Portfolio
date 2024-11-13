import React from "react";

const Project = () => {
  return (
    <>
      <section className="bg-inherit pb-10 pt-10 dark:bg-dark lg:pb-10 lg:pt-[50px]">
        <div className="container">
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
          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div> */}

          <div className="-mx-2 flex flex-wrap">
            <ProjectCard
              date="Oct 29, 2024"
              CardTitle="Early Detection of Leukemia Subtypes Using CNN and XAI (Novel Approach)"
              CardDescription="Developed a novel approach for early detection of leukemia subtypes using Convolutional Neural Networks (CNN) and Explainable AI (XAI) to improve diagnostic accuracy and interpretability."
              href={"/Portfolio/Project/1"}
              image="https://riskandinsurance.com/wp-content/uploads/2024/04/AI-in-Healthcare_1489956013_700x525.jpg"
            />
            <ProjectCard
              date="Sep 15, 2024"
              CardTitle="Dream Streamer -  Music Platform Using Vue.js, AWS, and MySQL"
              CardDescription="Developed a comprehensive music streaming platform similar to Spotify using Vue.js for the frontend, AWS services for hosting, storage, and deployment, and MySQL for the database management."
              href={"/Portfolio/project/2"}
              image="https://plus.unsplash.com/premium_photo-1663100749349-14687e320b5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <ProjectCard
              date="Aug 22, 2024"
              CardTitle="SYOS - A ERP System for Small Grocery Store Using JAVA and MySQL"
              CardDescription="Developed an ERP system tailored for small grocery stores using Java with no framework for the backend and MySQL for the database, streamlining inventory management, sales tracking, and reporting."
              href={"/Portfolio/project/3"}
              image="https://plus.unsplash.com/premium_photo-1683121143788-8c5d16f88218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <ProjectCard
              date="Dec 22, 2023"
              CardTitle="First Motors - A Car Dealership Website With CRM Build Using Laravel and MySQL"
              CardDescription="Built a car dealership website with an integrated Customer Relationship Management (CRM) system using Laravel for the backend and MySQL for the database, enhancing customer management and sales tracking."
              href={"/Portfolio/project/4"}
              image="https://images.unsplash.com/photo-1625773049545-fb23fc4f4538?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <ProjectCard
              date="Dec 22, 2023"
              CardTitle="Crafty Furniture - An E-commerce Mobile App Build Using Flutter(Dart) and MySQL"
              CardDescription="Developed an e-commerce mobile app for Crafty Furniture using Flutter (Dart) for the frontend and MySQL for the backend, enabling users to browse, search, and purchase furniture products with a seamless user experience."
              href={"/Portfolio/project/5"}
              image="https://images.unsplash.com/photo-1680503397107-475907e4f3e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
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
        </div>
      </section>
    </>
  );
};

export default Project;

const ProjectCard = ({ image, date, CardTitle, CardDescription, href }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-6 overflow-hidden rounded">
            <img src={image} alt="" className="w-full h-72" />
          </div>
          <div>
            {date && (
              <span className="mb-3 inline-block rounded bg-primary text-center text-xs font-semibold leading-loose text-black">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-black hover:text-primary dark:text-black sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            {/* Button to see details */}
            <div className="mt-4">
              <a
                href={href}
                className="text-white bg-gray-600 hover:bg-gray-700 dark:bg-primary dark:hover:bg-primary-dark py-2 px-4 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
