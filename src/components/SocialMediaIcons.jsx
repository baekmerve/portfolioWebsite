import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiNotion, SiGithub } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SocialMediaIcons = ({ github, notion }) => {
  return (
    <div className="flex gap-4">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
              <SiGithub className="text-white text-3xl group-hover:text-cyan" />
            </TooltipTrigger>
            <TooltipContent className="rounded-2xl bg-white/50 text-paper p-1 border-none">
              Github
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>

      <a href={notion} target="_blank" rel="noopener noreferrer">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
              <SiNotion className="text-white text-3xl group-hover:text-cyan" />
            </TooltipTrigger>
            <TooltipContent className="rounded-2xl bg-white/50 text-paper p-1 border-none">
              Notion
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
