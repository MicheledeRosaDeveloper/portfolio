import experience from "../data/experience";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <>
      <div className="m-4 " id="work">
        <h1 className="text-3xl font-bold text-center">
          Esperienze Lavorative
        </h1>
        <ul className=" flex space-x-4 m-4 justify-center timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experience.map((exp, index) => (
            <TimelineItem
              year={exp.year}
              title={exp.title}
              details={exp.details}
              index={index}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Timeline;
