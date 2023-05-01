/*
import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        Technologies and languages that I use
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        
      </p>
      <div>

      </div>
    </div>
  );
};

export default Skills;


*/




 

import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I use
      </p>


      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
  
          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ffirebase.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Firebase"}</p>
          </a>


          <a
            key={2}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Java"}</p>
          </a>

          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fswift.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Swift"}</p>
          </a>


          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fpython.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Python"}</p>
          </a>


          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fcpp.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"C++"}</p>
          </a>


          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fphp.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"PHP"}</p>
          </a>


          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Freact.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"React"}</p>
          </a>


          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ftypescript.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Typescript"}</p>
          </a>

          <a
            key={1}
            href={"https://www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjavascript.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Javascript"}</p>
          </a>




      </div>
    </div>
  );
};

export default Skills;

