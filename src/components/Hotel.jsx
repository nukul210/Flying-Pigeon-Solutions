import { hotels } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hotel = () => {
  return (
    <Section id="hotels">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Hotels" />

        <div className="flex flex-wrap gap-10 mb-10">
          {hotels.map((item) => (
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
                  <a
                    href={item.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto"
                  >
                    <div className="flex items-center">
                      <FaMapMarkerAlt
                        className="mr-1"
                        style={{ fontSize: "1.5rem" , marginRight:"1.5rem"}}
                      />
                      <span>Location</span>
                    </div>
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-40">
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

export default Hotel;
