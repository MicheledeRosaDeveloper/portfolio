interface ProjectItemProps {
    title: string;
    imgUrl: string;
    link: string;
}

const ProjectItem = ({title, imgUrl, link}: ProjectItemProps) => {
    return (
        <>
         <div className="border border-black b-2 ">
            <a href={link}>
                <img src={imgUrl} alt = {title} />
                <h2>{title}</h2>
            </a>
         </div>
        </>
    );
}

export default ProjectItem;
