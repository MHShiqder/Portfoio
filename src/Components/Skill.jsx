
import SectionTittle from './shared/SectionTittle';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiGit,
    SiFigma,
    SiPostman,
} from "react-icons/si";
import { FaMobileScreenButton } from "react-icons/fa6";

const techItems = [
    { icon: <SiHtml5 size={40} />, title: "html", subtitle: "Markup Language" },
    { icon: <SiCss3 size={40} />, title: "css", subtitle: "Styling Language" },
    { icon: <SiJavascript size={40} />, title: "javascript", subtitle: "Dynamic Scripts" },
    { icon: <SiReact size={40} />, title: "react js", subtitle: "UI Library" },
    { icon: <SiNodedotjs size={40} />, title: "nodejs", subtitle: "Server Runtime" },
    { icon: <SiExpress size={40} />, title: "expressjs", subtitle: "Backend Framework" },
    { icon: <SiTailwindcss size={40} />, title: "tailwindcss", subtitle: "Utility CSS" },
    { icon: <SiMongodb size={40} />, title: "mongodb", subtitle: "NoSQL Database" },
    { icon: <SiGit size={40} />, title: "git", subtitle: "Version Control" },
    { icon: <SiFigma size={40} />, title: "figma", subtitle: "UI Design" },
    { icon: <SiPostman size={40} />, title: "postman", subtitle: "API Testing" },
    { icon: <FaMobileScreenButton size={40} />, title: "responsive", subtitle: "Mobile-first design" },
];

const Skill = () => {
    return (
        <div id='skill' className='bg-graph-paper bg-accent'>
            <div className="section-container">
                <SectionTittle head={"My Skills"} tittle1={"Technical"} tittle2={"Expertise"} subTittle={"I've worked with a variety of technologies and frameworks to create stunning digital experiences."} color={"primary"} />
                <div className='pt-14 pb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10'>

                    {techItems.map((item, index) => (
                        <div key={index} className="bg-accent shadow-[15px_15px_20px_rgba(0,0,0,0.22),-15px_-1px_20px_rgba(0,0,0,0.22)] rounded-xl p-6 flex flex-col items-center text-center border border-gray-500/20">
                            <div className="text-primary py-6">{item.icon}</div>
                            <h3 className="text-white text-lg font-semibold capitalize pb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;