import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        {'Greetings! I&apos;m Chaz Hampton, a software eningeer currently based in Las Vegas, Nevada. My journey into software development began at the age of 13, where I honed my skills by crafting tools and scripts. Over the years, I&apos;ve spearheaded numerous projects, collaborated in diverse team environments, and played a pivotal role in developing robust backend solutions during my tenure in the U.S. Air Force.'}
        <br></br>
        My passion lies in addressing real-world challenges through the creation of impactful and innovative products. While I possess comprehensive expertise in full-stack web development, my primary focus and dedication revolve around the intricate realm of mobile development.
        <br></br>
        Beyond the code, I find fulfillment in leisure activities such as gaming on my PS5, indulging in musical pursuits, navigating waters through kayaking, and fostering meaningful connections with friends. I am committed to leveraging my extensive skill set and experiences to contribute significantly to the ever-evolving landscape of mobile application development. 
        </p>
      </div>
    </div>
  );
};

export default Who;
