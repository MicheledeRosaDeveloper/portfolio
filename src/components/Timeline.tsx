import experience from '../data/experience';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <>
      <div className="m-auto ">
        <h1 className="text-2xl font-bold text-center">Esperienze Lavorative</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact ">
        {experience.map((exp,index)=> (
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
