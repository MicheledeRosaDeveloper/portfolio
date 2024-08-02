interface ProjectItemProps {
  title: string;
  imgUrl: string;
  link: string;
  description: string;
  stack: string[];
}

const ProjectItem = ({
  title,
  imgUrl,
  link,
  description,
  stack,
}: ProjectItemProps) => {
  console.log(imgUrl);
  return (
    <>
      <a href={link}>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={imgUrl} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              {stack.map((item, index) => (
                <div key={index} className="badge badge-outline">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectItem;
