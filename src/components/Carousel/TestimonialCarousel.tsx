import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function TestimonialCarousel() {
  const array = [
    {
      name: "John Doe",
      designation: "Student",
      testimonialDescription:
        "Being a student, KBD DEEP has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework",
      keyWord:
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Doe",
      designation: "Freelancer",
      testimonialDescription:
        "KBD DEEP has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance",
      keyWord:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Merry Jane",
      designation: "Entrepreneur",
      testimonialDescription:
        "KBD DEEP's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
      keyWord:
        "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bob Smith",
      designation: "Creative Professional",
      testimonialDescription:
        "As a creative professional, KBD DEEP has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.",
      keyWord:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Eva Williams",
      designation: "Remote Worker",
      testimonialDescription:
        "KBD DEEP's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.",
      keyWord:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chris Brown",
      designation: "Parent",
      testimonialDescription:
        "Managing family schedules is no easy task, but KBD DEEP has made it seamless. From school activities to household chores, KBD DEEP keeps our family organized and on track.",
      keyWord:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Olivia Davis",
      designation: "Health Professional",
      testimonialDescription:
        "In the healthcare field, where time is crucial, KBD DEEP has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.",
      keyWord:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Liam Wilson",
      designation: "Researcher",
      testimonialDescription:
        "KBD DEEP's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals",
      keyWord:
        "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === array.length - 2 ? 0 : currentSlider + 1
      ),
    [array.length]
  );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider, nextSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="max-w-full min-w-[350px] h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50">
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-zinc-200 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-zinc-200 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <ChevronRight />
          </button>
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 100 : 50)
            }%)`,
          }}
        >
          {/* sliders */}
          {array.map((each, idx) => (
            <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
              <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-slate-800 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-gray-500">
                  {each?.testimonialDescription}
                </p>
                <a className="inline-flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    src={each.keyWord}
                    alt="carousel navigate ui"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {each.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {each?.designation}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
