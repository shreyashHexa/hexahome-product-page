import React, { useRef, useState, useEffect } from "react";

const LinkPage = ({ propertyOptions }) => {  // Accept propertyOptions as props
  const scrollRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

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
    <section className="px-4 py-8 bg-white sm:px-8 lg:px-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-left md:text-2xl">
          Property Options in Noida
        </h3>
      </div>

      <div id="subheading" className="flex flex-col items-start">
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
          <button onClick={() => scroll("left")} className="text-gray-500 hover:text-sky-400">
            ⬅
          </button>
          <button
            onClick={() => scroll("right")}
            className={`text-gray-500 hover:text-sky-400 ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isAtEnd}
          >
            ➡
          </button>
        </div>

        {/* Divider line */}
        <div className="w-full mb-4 border-b border-gray-300" />

        {/* Subheading Sections in a Horizontal Scrollable Container */}
        <div className="overflow-x-auto" ref={scrollRef}>
          <div className="flex gap-4 min-w-[600px] md:min-w-[800px]">
            {propertyOptions.map((option, index) => (
              <div key={index} id={option.id} className="flex flex-col flex-shrink-0 w-full max-w-xs p-2">
                {option.list.map((item, idx) => (
                  <a key={idx} className="text-sm md:text-base hover:text-sky-400">
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
