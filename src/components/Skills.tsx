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
        Technologies and Languages
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        
      </p>


      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
  
          <a
            key={1}
            href={"https://firebase.google.com/"}
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
            href={"https://www.java.com/en/"}
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
            href={"https://www.swift.org/"}
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
            href={"https://www.python.org/"}
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
            href={"https://isocpp.org/"}
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
            href={"https://www.php.net/"}
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
            href={"https://react.dev/"}
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
            href={"https://www.typescriptlang.org/"}
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
            href={"https://www.mysql.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fdatabase.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"MySQL"}</p>
          </a>

          <a
            key={1}
            href={"https://www.javascript.com/"}
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


          <a
            key={1}
            href={"https://www.nginx.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fnginx.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Nginx"}</p>
          </a>


          <a
            key={1}
            href={"https://nextjs.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fnext.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Next.js"}</p>
          </a>

          <a
            key={1}
            href={"https://kotlinlang.org/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fkotlin.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Kotlin"}</p>
          </a>



          <a
            key={1}
            href={"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fobjective-c.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Objective-C"}</p>
          </a>


          <a
            key={1}
            href={"https://go.dev/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fgo.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"Go"}</p>
          </a>


          <a
            key={1}
            href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fcsharp.svg&w=50&h=50"}
              alt=""
            />
            <p className="text-center">{"C#"}</p>
          </a>


      </div>
    </div>
  );
};

export default Skills;

