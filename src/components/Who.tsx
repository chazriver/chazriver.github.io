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
          My name is Chaz Hampton and I&apos;m a
          mobile application developer in Las Vegas, Nevada.
          I began by developing tools and scripts when I was 13. Since then, I have created many projects,
          worked in small and large teams, and developed backend solutions
          while in the U.S. Air Force. I enjoy solving real world problems and creating useful products to help people.
          I also have full stack web dev experience, but mobile development is my passion!
          Besides coding, I also like gaming on my PS5, listening to music, Kayaking, and spending time with friends! 
        </p>
      </div>
    </div>
  );
};

export default Who;
