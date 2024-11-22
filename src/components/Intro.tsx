import Skills from './Skills';
import SocialIcon from "./SocialIcon";

const Intro = () => {
  return (
<div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="img/pixarme.webp"
      className="max-w-md rounded-lg shadow-2xl" width={250} height={250} />
    <div className="m-10">
      <h1 className="text-5xl font-bold text-center" >Michele de Rosa</h1>
      <p className="py-10 w-4/6 m-auto">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <SocialIcon/>
    </div>
    </div>

</div>
  );
};

export default Intro;
