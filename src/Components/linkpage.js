import React, { useRef, useState, useEffect } from "react";

const LinkPage = () => {
  const scrollRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Change this value to adjust scroll amount
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
      // Check if we are at the end of the scrollable area
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Check scroll position on component mount and on every scroll
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
    <section className="px-8 py-12 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-left text-[20px] font-bold">Property Options in Noida</h3>
      </div>

      <div id="subheading" className="flex flex-col items-start">
        <div className="flex gap-6 mb-4">
          <a href="#rent" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            Rent
          </a>
          <a href="#buy" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            Buy
          </a>
          <a href="#projects" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            Projects
          </a>
          <a href="#plots" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            Plots/Land
          </a>
          <a href="#pg" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            PG/Hostel
          </a>
          <a href="#co-living" className="text-[16px] font-medium hover:text-sky-500 hover:underline">
            Co-Living
          </a>
        </div>

        {/* Arrows for moving tags */}
        <div className="flex justify-end px-16 mb-4">
          <button onClick={() => scroll("left")} className="text-gray-500 hover:text-sky-500">⬅</button>
          <button
            onClick={() => scroll("right")}
            className={`text-gray-500 hover:text-sky-500 ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isAtEnd} // Disable if at the end
          >
            ➡
          </button>
        </div>

        {/* Divider line */}
        <div className="w-full mb-4 border-b border-black" />

        {/* Subheading Sections in a Horizontal Scrollable Container */}
        <div className="overflow-hidden" ref={scrollRef} style={{ overflowX: 'auto' }}>
          <div className="flex gap-4">
            <div id="rent" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">Apartment in HSR Layout Noida</a>
              <a className="text-[16px] hover:text-sky-500">Apartment in HSR Layout Noida</a>
              <a className="text-[16px] hover:text-sky-500">Apartment in HSR Layout Noida</a>
              <a className="text-[16px] hover:text-sky-500">Apartment in HSR Layout Noida</a>
              <a className="text-[16px] hover:text-sky-500">Apartment in HSR Layout Noida</a>
            </div>
            <div id="buy" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">Apartments in Whitfield City, Bangalore</a>
              <a className="text-[16px] hover:text-sky-500">Apartments in Whitfield City, Bangalore</a>
              <a className="text-[16px] hover:text-sky-500">Apartments in Whitfield City, Bangalore</a>
              <a className="text-[16px] hover:text-sky-500">Apartments in Whitfield City, Bangalore</a>
            </div>
            <div id="projects" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">New Projects in Noida</a>
              <a className="text-[16px] hover:text-sky-500">New Projects in Noida</a>
              <a className="text-[16px] hover:text-sky-500">New Projects in Noida</a>
              <a className="text-[16px] hover:text-sky-500">New Projects in Noida</a>
              <a className="text-[16px] hover:text-sky-500">New Projects in Noida</a>
            </div>
            <div id="plots" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
              <a className="text-[16px] hover:text-sky-500">Plots available in Sector 150</a>
            </div>
            <div id="pg" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
              <a className="text-[16px] hover:text-sky-500">PG Options in Noida</a>
            </div>
            <div id="co-living" className="flex flex-col justify-between flex-shrink-0 w-1/4 p-2">
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
              <a className="text-[16px] hover:text-sky-500">Co-Living Spaces in Noida</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LinkPage);
