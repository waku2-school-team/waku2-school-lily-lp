// src/components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string;
}

const timelineData: TimelineEntry[] = [
  { title: "2018", content: "何か書いてね", image: "/images/yurichan.png" },
  { title: "2019", content: "何か書いてね", image: "/images/yurichan.png" },
  { title: "2023", content: "プログラミングを始める。", image: "/images/prof.png" },
  { title: "2024", content: "TOYPROで地域No.1✨", image: "/images/waku2ロゴ.png" },
  { title: "2025", content: "がんばりーや♪", image: "/images/waku2engineer-prof.jpg" },
];

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center py-20 px-4 md:px-32 w-full max-w-full mx-auto bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Lily's Journey</h2>
      
      {/* タイムラインの中央線 */}
      <div className="relative w-full max-w-7xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full my-12 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 md:w-72 md:h-72 flex-shrink-0">
              <Image 
                src={event.image} 
                width={288} 
                height={288} 
                alt={event.title} 
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="relative bg-white shadow-lg rounded-lg p-10 w-full md:w-3/5 lg:w-2/5">
              <span className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-pink-300 rounded-full border-4 border-white"></span>
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-600 font-semibold">{event.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

