const SkillIcon = () => {
  const skillIconPath = [
    "react",
    "angular",
    "html",
    "javascript",
    "css-3",
    "python",
    "spring",
    "mongodb",
    "java",
    "github",


  ];
  return (
    <div className="grid grid-cols-5 gap-10">
      {skillIconPath.map((fileName, index) => (
        <div key={index} className="w-16 h-16">
          <img src={`icon/${fileName}.svg`} alt={`Logo ${fileName}`} />
        </div>
      ))}
    </div>
  );
};

export default SkillIcon;
