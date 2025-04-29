import TemplateBlog from "@/components/layout/templateBlog";
import SlightFlip from "@/components/magicui/slightFlip";
import AnimatedBorder from "@/components/ui/animateBorder";
import GradientText from "@/components/ui/gradientText";
import Link from "next/link";

const MvcPage = () => {
  return (
    <div>
      <TemplateBlog>
        <SlightFlip
          className="text-4xl font-bold tracking-[-0.1em] md:text-1xl text-slate-800 stroke-white"
          word="MVC PHP"
        />
        <AnimatedBorder className="mt-10">
          <div className="flex gap-3 items-center mb-6">
            <GradientText text="*" variant="neon" />
            <GradientText
              text="Pre requisite : html, css, php fundamental, php OOP"
              variant="neon"
            />
          </div>
          <Link
            href="/learn/php/mvc/intro"
            className="flex gap-3 font-bold items-center"
          >
            <span> - </span>
            <h3 className="hover:text-transparent hover:bg-clip-text hover:font-bold hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
              Introduce
            </h3>
          </Link>
        </AnimatedBorder>
      </TemplateBlog>
    </div>
  );
};
export default MvcPage;
