import { FC } from 'react';

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
        src="/avatar.png"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Chaz Hampton, I am a software engineer currently residing
          in Las Vegas, Nevada. My journey into software development began at
          the age of 13, where I started crafting tools and scripts. Over the
          years, I have excelled in numerous projects, collaborated within
          diverse team environments, and played a pivotal role in developing
          robust backend solutions during my tenure in the U.S. Air Force.
          <br></br>
          <br></br>
          My passion lies in addressing real-world challenges through the
          creation of impactful and innovative products. I possess comprehensive
          expertise in full-stack web development, but have also found a calling
          in mobile development.
          <br></br>
          <br></br>
          Beyond the code, I find fulfillment in leisurely activities such as
          gaming on my PS5, listening to music, kayaking, and just spending time
          with friends. I am committed to leveraging my extensive skill set and
          experiences to contribute to the ever-evolving landscape of software
          engineering.
        </p>
      </div>
    </div>
  );
};

export default Who;
