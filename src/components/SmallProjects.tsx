import { FC } from "react";
import { allDataType } from "../shared/types";

interface SmallProjectsProps {
  projects: allDataType["smallProjects"];
}

const SmallProjects: FC<SmallProjectsProps> = ({ projects }) => {
  return (
    <div className="flex justify-center mx-[5vw] mt-16">
      <div className="w-full max-w-[1100px]">
        <h1 className="text-4xl text-center">Places I have worked</h1>
        <p className="mt-4 mb-10 text-gray-400 text-lg text-center">{``}</p>


        <div
          data-scroll
          data-scroll-speed="1"
          className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]"
        >

            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:bg-slate-900 p-3 transition duration-300"
              key={1}
            >
              <img
                className="h-[40px] w-[40px] my-1 object-cover"
                src={"/usaf.png"}
                alt=""
              />
              <div>
                <h1>U.S. Air Force</h1>
                <p className="text-gray-400">{"Cyber Operations Officer, Software Engineer"}</p>
              </div>
            </a>

            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:bg-slate-900 p-3 transition duration-300"
              key={1}
            >
              <img
                className="h-[40px] w-[40px] my-1 object-cover"
                src={"/bubblein_logo.png"}
                alt=""
              />
              <div>
                <h1>Bubble In</h1>
                <p className="text-gray-400">{"Software Developer"}</p>
              </div>
            </a>

            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:bg-slate-900 p-3 transition duration-300"
              key={1}
            >
              <img
                className="h-[40px] w-[40px] my-1 object-cover"
                src={"/csusb.png"}
                alt=""
              />
              <div>
                <h1>California State University, San Bernardino</h1>
                <p className="text-gray-400">{"Instructional Associate, Software Engineering"}</p>
              </div>
            </a>


        </div>
      </div>
    </div>



  );
};

export default SmallProjects;
