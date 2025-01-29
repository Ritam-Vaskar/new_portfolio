"use client";
import React from "react";
import { motion } from "framer-motion";
import EducationCard from "../components/EducationCard";


const Education = () => {
  const educationData = [
    {
      institution: "Harvard University",
      degree: "Master of Computer Science",
      duration: "2020 - 2022",
      location: "Cambridge, MA",
      grade: "3.8 GPA",
      gradePercentage: 95,
      description: "Specialized in Artificial Intelligence and Machine Learning. Led research projects in Natural Language Processing.",
    },
    {
      institution: "MIT",
      degree: "Bachelor of Computer Science",
      duration: "2016 - 2020",
      location: "Cambridge, MA",
      grade: "3.9 GPA",
      gradePercentage: 98,
      description: "Major in Computer Science with minor in Mathematics. Active member of the Robotics Club.",
    },
    {
      institution: "Stanford High School",
      degree: "High School Diploma",
      duration: "2012 - 2016",
      location: "Palo Alto, CA",
      grade: "4.0 GPA",
      gradePercentage: 100,
      description: "Valedictorian, President of Computer Science Club, Math Team Captain.",
    },
  ];

  const floatingAnimation = {
    animate: {
      y: ["0px", "-20px", "0px"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotatingAnimation = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full py-12 px-4 overflow-hidden flex flex-col items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-lg"
          variants={rotatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 left-10 w-16 h-16 rounded-full bg-purple-500/30 blur-sm"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-indigo-500/30 blur-sm"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-pink-500/30 blur-sm"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-500">Education</span> Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the path of continuous learning and academic excellence
          </p>
          <motion.div
            className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative flex">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
          />

          {/* Education Cards */}
          <div className="ml-10 space-y-16 w-full ">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.5, backgroundColor: "#6366f1" }}
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-purple-500/50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

                {/* Card Container */}
                <div className="grid grid-cols-1 md:ml-8">
                  <EducationCard data={edu} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
