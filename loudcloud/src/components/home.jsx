import React from "react";
import Background from '../jelly.jpg'
var sectionStyle = {
  backgroundImage: "url(" + { Background } + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const Home = () => {
  return (
    <div>
    <section style={sectionStyle }>
    </section>
      <h1>Welcome to Loudcloud Photo</h1>
      <p>
        Loudcloud Photo is a photo hosting site developed by Zachary Romano and
        Ethan Ruiz for their Web Development III course.
      </p>
      <p>
        If you'd like to examine the source code for Loudcloud, check out the
        Github repo{" "}
        <a href="https://github.com/elruizz/loudcloud">right here</a>.
      </p>
    </div>
  );
};

export default Home;
