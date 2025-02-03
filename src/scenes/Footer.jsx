import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 pt-10 ">
      <div className="flex-col justify-center items-center text-center ">
        <div className="flex-col justify-center items-center  ">
          <div className="flex  justify-center items-center gap-10">
            <p className="font-caveat font-semibold text-2xl ">
              MERVE BAEK
            </p>
            <SocialMediaIcons
              github={`https://github.com/baekmerve`}
              notion={"https://www.notion.so/3fc2723651e6407fb971b8fdfd8fe2d6"}
            />
          </div>

          <p className="font-caveat text-md mt-10">
            ©2025 BAEK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
