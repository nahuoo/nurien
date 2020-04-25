import React from "react";

// core components
/* const handleClick = () =>
  document.getElementById("name").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
*/

function Wrapper
() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  
  return (
    
    <div></div>
    
  );
}

export default Wrapper;
