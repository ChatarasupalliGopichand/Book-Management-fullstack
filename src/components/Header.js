import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Header() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.header style={fadeIn}>
      <h1>📚 Book Management Application</h1>
    </animated.header>
  );
}

export default Header;
