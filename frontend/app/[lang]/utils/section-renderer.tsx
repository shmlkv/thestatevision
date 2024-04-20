import Email from "../../../components/Email";
import Features from "../../../components/Features";
import Hero from "../../../components/Hero";
import Pricing from "../../../components/Pricing";
import RichText from "../../../components/RichText";
import Testimonials from "../../../components/Testimonials";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero  key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.rich-text":
      return (
        <div className="max-w-[800px] flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <RichText key={index} data={{ body: section.content }} />
        </div>
      );
    default:
      return null;
  }
}
