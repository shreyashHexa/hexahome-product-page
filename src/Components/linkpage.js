import React, { useRef, useState, useEffect } from "react";

const LinkPage = ({ propertyOptions }) => {
  const scrollRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Adjust scroll amount
      scrollRef.current.scrollBy({
        top: 0,
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
      checkScrollPosition();
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const handleScroll = () => checkScrollPosition();
    const currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="px-6 py-8 text-black bg-white sm:px-8 lg:px-16">
      <div className="flex items-center justify-between px-2 mb-6">
        <h3 className="text-xl font-bold text-left md:text-2xl">
          Property Options in Noida
        </h3>
      </div>

      <div id="subheading" className="flex flex-col items-start px-2">
        {/* Links for Navigation */}
        <div className="flex flex-wrap gap-4 mb-4">
          <a href="#rent" className="text-base font-medium hover:text-sky-400 hover:underline">
            Rent
          </a>
          <a href="#buy" className="text-base font-medium hover:text-sky-400 hover:underline">
            Buy
          </a>
          <a href="#projects" className="text-base font-medium hover:text-sky-400 hover:underline">
            Projects
          </a>
          <a href="#plots" className="text-base font-medium hover:text-sky-400 hover:underline">
            Plots/Land
          </a>
          <a href="#pg" className="text-base font-medium hover:text-sky-400 hover:underline">
            PG/Hostel
          </a>
          <a href="#co-living" className="text-base font-medium hover:text-sky-400 hover:underline">
            Co-Living
          </a>
        </div>

        {/* Scroll Arrows */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className={`text-gray-500 hover:text-sky-400 ${isAtStart ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Scroll Left"
          >
            ⬅
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className={`text-gray-500 hover:text-sky-400 ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Scroll Right"
          >
            ➡
          </button>
        </div>

        {/* Divider line */}
        <div className="w-full mb-4 border-b border-gray-300" />

        {/* Subheading Sections in a Horizontal Scrollable Container */}
        <div className="w-full overflow-x-scroll" ref={scrollRef}>
          <div className="flex gap-4  w-max min-w-full md:min-w-[80%] lg:min-w-[60%]">
            {propertyOptions.map((option, index) => (
              <div
                key={index}
                id={option.id}
                className=" flex flex-col gap-4 md:gap-2 sm:gap-2 flex-shrink-0 w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] p-2"
              >
                {option.list.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item}`}
                    className="text-sm sm:text-base md:text-lg hover:text-sky-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LinkPage);
