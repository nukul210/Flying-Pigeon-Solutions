import { pricing } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { FaYoutube } from "react-icons/fa";
const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Prepare Smarter, Succeed Faster with Flying Pigeon."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {pricing.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transition-transform duration-300 hover:scale-105 hover:translate-y-[-5px]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                  <a
                      href="https://www.youtube.com/@internetpadhai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 pointer-events-auto" // Adjust styling as needed
                    >
                      <FaYoutube
                        className="text-red-600 "
                        style={{ fontSize: "2.4rem", marginRight: "7rem" }}
                      />
                      Explore more
                    </a>
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
