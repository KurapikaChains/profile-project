"use client";
import React, {useTransition, useState} from 'react';
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from 'process';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>Sorsogon State University</li>
            </ul>
        ),
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Telecall Laguna</li>
            </ul>
        ),
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/Desktop.png" width={500} height={500}/>
            <div>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                I am a dynamic full stack web developer, blending creativity with technical finesse to craft captivating digital experiences. With expertise spanning both front-end and back-end development, I bring ideas to life with precision and innovation. My collaborative spirit and commitment to excellence make me a valuable asset in any project, driving forward with passion and proficiency. 
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")}  
                        active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certification")} 
                        active={tab === "certification"}
                    >
                        {" "}
                        Certification{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab) .content}</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;