import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = ({ projects }) => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20" id = "myworksection">My Work</h1>


      
        <div
          key={1}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            1 % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src="/BubbleIn_Mobile.png"//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"Bubble In - Mobile App"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Bubble In is a moblile application on IOS and Android with anti-cheating features. This application consists of two code bases, one for IOS and the other Android."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fswift.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" />
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fapplescript.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="/android.png" width="35" height="35" />
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={"https://apps.apple.com/us/app/bubble-in/id1481409695?ls=1"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> Link </span>
              </a>
            </div>
          </div>
        </div>
      

      

        <div
          key={2}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            2 % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src={"/BubbleIn_Site.png"}//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"Bubble In - Web Server"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Bubble In web server hosted on the cloud build with a LEMP stack. The frontend of the website functions as a LMS for faculty."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fphp.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fnginx.svg&w=50&h=50" width="35" height="35" />
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fhtml.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjavascript.svg&w=50&h=50" width="35" height="35" />
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={"https://bubblein.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> Link </span>
              </a>
            </div>
          </div>
        </div>
      
      

      
      
        <div
          key={1}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            1 % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src={"/sos.png" }//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"SOS - Mobile App"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Developed in 2016, SOS or Save Our Souls is a mobile application developed for IOS and Android. The mobile application utilizes a custom ArcGIS map to provide precise location data in reported events."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ffirebase.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fswift.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" />
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fapplescript.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="/android.png" width="35" height="35" />
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>



      
        <div
          key={2}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            2 % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src={"/sos_site.png" }//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"SOS - Web Server"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"A simple HTML, and JS web sever functioning as a record of alerts reported by users and monitored by emergency services."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ffirebase.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fhtml.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjavascript.svg&w=50&h=50" width="35" height="35" />
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fcss.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="/android.png" width="35" height="35" />
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>



        <div
          key={1}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            1 % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
              <div className="border-black border-[8px]">
                <img
                  className="w-full h-auto rounded-[12px]"
                  src={"/hospice.png" }//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"Hospice Router - Android app"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Hospice Router is an app designed to be used for hospice care. Once you create a new organization you are able to add new patients or customers to a database that is accessible by your organization's users. Once a new user has signed up under your new organization name, they will be shown a list of all available patients or customers which they will be able to click on and be routed to that location."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" />
            <p> </p>
            <img src="/android.png" width="35" height="35" />
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>


    </>  
  );
};

export default MainProjects;
