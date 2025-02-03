import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiNotion, SiGithub } from "react-icons/si";
import { TbHomeLink } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SocialMediaIcons = ({ github, notion,live }) => {
  return (
    <div className="flex gap-4">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:scale-105">
                <TbHomeLink className="text-white text-3xl " />
              </TooltipTrigger>
              <TooltipContent className="text-paper p-1 border-none bg-transparent">
                Live
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      )}
      <a href={github} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center hover:scale-105">
              <SiGithub className="text-white text-3xl " />
            </TooltipTrigger>
            <TooltipContent className=" text-paper p-1 border-none bg-transparent">
              Github
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
      <a href={notion} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:scale-105">
              <SiNotion className="text-white text-3xl " />
            </TooltipTrigger>
            <TooltipContent className="text-paper p-1 border-none bg-transparent">
              Notion
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
