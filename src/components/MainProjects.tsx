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

      <div    //https://github.com/PKief/vscode-material-icon-theme  <-THEME ICONS
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
                  src="/SharkSafeAI.png"//Project Image
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{"SharkSafeAI - Embedded Aerial System"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Users have the flexibility to attach the ESP32-CAM to their privately owned drone or a comparable device, enabling manual flight over the designated observation area. This area is surveyed for silhouettes resembling that of a shark beneath the water."}
              <br></br>
              <br></br>
              {"Emphasizing lightweight construction, affordability, and minimal computing resource requirements, these design considerations are crucial for ensuring that the system is not only accessible to the aver- age consumer but also practical to design and implement."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Farduino.svg&w=50&h=50" width="35" height="35" alt="Arduino"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fdrawio.svg&w=50&h=50" width="35" height="35" alt="draw.io"/>
            <p>  </p>
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={"./SharkSafeAI_Embedded_Aerial_System.pdf"}// Host paper on site f/ download link "./SharkSafeAI_Embedded_Aerial_System.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
              >
                <BiLinkExternal size={25} />
                <span> Download Paper </span>
              </a>
            </div>
          </div>
        </div>


      
        <div
          key={2}
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
            <h1 className="text-3xl">{"Bubble In - Mobile Application"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Bubble In, available on both IOS and Android, is a mobile application equipped with anti-cheating features. This application is structured with two distinct code bases, tailored to the specific requirements of IOS and Android platforms. The incorporation of anti-cheating mechanisms enhances the integrity and reliability of the application, ensuring a secure environment for users."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fswift.svg&w=50&h=50" width="35" height="35" alt="swift"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" alt="java"/>
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fapplescript.svg&w=50&h=50" width="35" height="35" alt="apple"/>
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
          key={1}
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
              {"The Bubble In web server, hosted on the cloud, is constructed using a LEMP stack. The website's frontend serves as a Learning Management System (LMS) designed for faculty use. This cloud-based server provides a robust and efficient platform for managing educational content and facilitating faculty interactions."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fphp.svg&w=50&h=50" width="35" height="35" alt="php"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fnginx.svg&w=50&h=50" width="35" height="35" alt="nginx"/>
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fhtml.svg&w=50&h=50" width="35" height="35" alt="html"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjavascript.svg&w=50&h=50" width="35" height="35" alt="js"/>
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
          key={2}
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
            <h1 className="text-3xl">{"SOS - Mobile Application"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Introduced in 2016, SOS (Save Our Souls) is a mobile application tailored for both iOS and Android platforms. This app incorporates a personalized ArcGIS map, delivering accurate location data during reported events. The seamless integration of technology and design in SOS establishes a dependable and effective tool for users encountering emergencies."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ffirebase.svg&w=50&h=50" width="35" height="35" alt="FB"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fswift.svg&w=50&h=50" width="35" height="35" alt="swift"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" alt="java"/>
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fapplescript.svg&w=50&h=50" width="35" height="35" alt="apple"/>
            <p> </p>
            <img src="/android.png" width="35" height="35" alt="android"/>
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>



      
        <div
          key={1}
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
              {"SOS Web Server is a straightforward implementation featuring HTML and JS, serving as a repository for alerts reported by users and monitored by emergency services. This minimalist web server facilitates the documentation and tracking of critical alerts, ensuring a streamlined and effective communication channel between users and emergency services."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Ffirebase.svg&w=50&h=50" width="35" height="35" alt="FB"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fhtml.svg&w=50&h=50" width="35" height="35" alt="html"/>
            <p> </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjavascript.svg&w=50&h=50" width="35" height="35" alt="js"/>
            <p>  </p>
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fcss.svg&w=50&h=50" width="35" height="35" alt="css"/>
            <p> </p>
            <img src="/android.png" width="35" height="35" alt="android"/>
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>



        <div
          key={2}
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
            <h1 className="text-3xl">{"Hospice Router - Android Application"}</h1>
            <p className="text-[20px] text-justify my-3">
              {"Hospice Router is a purpose-built app tailored for hospice care. Upon establishing a new organization, users gain the ability to seamlessly populate a comprehensive database with patient or customer information, accessible to authorized personnel within the organization. Following the registration of a new user under the organization's name, they gain access to a comprehensive list of all available patients or customers. Through a simple click, users can effortlessly navigate to the designated locations, streamlining and optimizing the hospice care workflow."}
            </p>

            <div className="flex gap-[5px]">
            <img src="https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2Fjava.svg&w=50&h=50" width="35" height="35" alt="java"/>
            <p> </p>
            <img src="/android.png" width="35" height="35" alt="android"/>
            </div>

            <div className="flex mt-[25px] gap-[20px]">
            </div>
          </div>
        </div>


    </>  
  );
};

export default MainProjects;
