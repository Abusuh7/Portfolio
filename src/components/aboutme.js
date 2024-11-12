import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const AboutMe = () => {
  return (
    <div className="container flex flex-wrap">
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
      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <RectangleGroupIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="Web Development"
        CardDescription="Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users."
      />

      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <FingerPrintIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="Mobile App Development"
        CardDescription="I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process."
      />

      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <SwatchIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="Technology Stack"
        CardDescription="I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native."
      />

      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <HashtagIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="Web Optimization"
        CardDescription="Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings."
      />

      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <EyeIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="User-Centric Design"
        CardDescription="My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey."
      />

      <SkillCard
        icon={
          <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center">
            <DocumentTextIcon className="w-6 h-6 text-white" />
          </div>
        }
        CardTitle="Testing and Quality Assurance"
        CardDescription="I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project."
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
  );
};

export default AboutMe;

const SkillCard = ({ icon, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded text-center">
            <div className="mb-4">{icon}</div>
            <h3 className="text-center">
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-black hover:text-primary dark:text-black sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color text-center dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
