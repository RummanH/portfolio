import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact", "testimonials"].map(
        (item, i) => (
          <a
            href={`#${item}`}
            key={item + i}
            className="app__navigation-dot"
            style={
              active === item
                ? { backgroundColor: "#313BAC", fontSize: ".000000001px" }
                : { fontSize: ".0000000001px" }
            }
          >
            o
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
