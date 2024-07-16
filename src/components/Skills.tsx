import SkillIcon from './SkillIcon';
const Skills = () => {
    return(<>
      <div className="p-10 max-w-4xl mx-auto rounded shadow-lg m-10 border">
        <h1 className="text-3xl font-bold text-center"> Skills</h1>
        <div className="flex space-x-4 m-4 justify-center">
            <SkillIcon/>
        </div>
        </div>
    </>)
}

export default Skills;