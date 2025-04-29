import TemplateBlog from "@/components/layout/templateBlog";
import AnimatedBorder from "@/components/ui/animateBorder";
import GradientText from "@/components/ui/gradientText";
import Link from "next/link";

const PhpPage = () => {
  return (
    <TemplateBlog>
      <div className="flex gap-4 justify-center">
        <Link href="/learn/php/fundamental">
          <AnimatedBorder className="mt-10 hover:scale-[.9] transition-all">
            <div className="flex gap-3 items-center justify-center">
              <GradientText text="Fundamental PHP" variant="neon" />
            </div>
          </AnimatedBorder>
        </Link>
        <Link href="/learn/php/mvc">
          <AnimatedBorder className="mt-10 hover:scale-[.9] transition-all">
            <div className="flex gap-3 items-center justify-center">
              <GradientText text="PHP MVC" variant="neon" />
            </div>
          </AnimatedBorder>
        </Link>
      </div>
    </TemplateBlog>
  );
};

export default PhpPage;
