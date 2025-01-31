import React from 'react';
import { FaGithub, FaLinkedin, FaSquareFacebook, FaX } from "react-icons/fa6";
import { useTypewriter } from 'react-simple-typewriter'
import HeroImage from "../assets/hasib-formal  compressed square-min.png"
import download from "../assets/download.png"
const HeroSection = () => {
    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Student', 'Learner'],
        loop: 0
    })
    return (
        <div id='home' className='flex flex-col-reverse md:flex-row w-11/12 mx-auto my-10 justify-center items-center md:items-start '>
            {/* hero section text parts  */}
            <div className='w-2/3 text-center md:text-start'>

                {/* title  */}
                <h3 className='text-2xl lg:text-6xl md:text-4xl font-bold text-black'>Hi, I am Hasibul Hasan</h3>
                <h3 className='text-2xl lg:text-6xl md:text-4xl font-bold text-sky-600 '><span>{text}</span><span className='animate-blink '>!</span></h3>
                {/* title details  */}
                <h4 className='text-xl mt-8 font-semibold md:w-4/5'>I am a Front-End Developer. I am currently seeking opportunity to apply my expertise as a Front-End Developer.</h4>

                {/* social icons  */}
                <div className='flex text-4xl my-10 gap-5'>
                    <a className='text-blue-700 hover:scale-125 hover:-translate-y-2 transition-all' target='_blank' href="https://www.facebook.com/hasibulhasan.plabon.5/"><FaSquareFacebook /></a>
                    <a className='text-blue-600 hover:scale-125 hover:-translate-y-2 transition-all' target='_blank' href="https://www.linkedin.com/in/hasibulhasanmec/"><FaLinkedin /></a>
                    <a className='text-slate-900 hover:scale-125 hover:-translate-y-2 transition-all' target='_blank' href="https://github.com/MHShiqder"><FaGithub /></a>
                    <a className='text-black hover:scale-125 hover:-translate-y-2 transition-all' target='_blank' href="https://x.com/HASIBUL83782278"><FaX /></a>

                </div>
                {/* resume download button  */}
                <div className='flex gap-5'>
                    <a href="/Resume(Md. Hasibul Hasan) bw.pdf" download="Hasibul Hasan's resume" className='btn btn-ghost bg-sky-600 text-lg font-semibold text-white'><img className='w-6' src={download} alt="" /> Download Resume</a>



                    <a href="/Resume(Md. Hasibul Hasan) bw.pdf" target='_blank'
                    rel="noopener noreferrer" className='btn btn-ghost bg-sky-400 text-lg font-semibold text-white'> View Resume</a>
                </div>

            </div>
            {/* hero section image part  */}
            <div className='w-1/3'>
                <img className='rounded-full border-8 border-sky-500' src={HeroImage} alt="owner image" />
            </div>
        </div>
    );
};

export default HeroSection;