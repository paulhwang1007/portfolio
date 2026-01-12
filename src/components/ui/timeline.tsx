"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -59% 0px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-5 pt-10 md:pt-24 gap-10"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 md:top-96 self-start md:col-span-1">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div
            className={`h-4 w-4 rounded-full border p-2 transition-all duration-300 ${
              isInView
                ? "bg-[#fbd9ae] border-[#fbd9ae] shadow-[0_0_15px_rgba(251,217,174,0.8)] scale-110"
                : "bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
            }`}
          />
        </div>
        <h3
          className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300 ${
            isInView ? "text-[#fbd9ae]" : "text-neutral-500 dark:text-neutral-500"
          }`}
        >
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-32 w-full md:col-span-4">
        <h3
          className={`md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300 ${
            isInView ? "text-[#fbd9ae]" : "text-neutral-500 dark:text-neutral-500"
          }`}
        >
          {item.title}
        </h3>
        {item.content}{" "}
      </div>
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans max-w-7xl mx-auto md:px-10"
      ref={containerRef}
    >
      <div className="max-w-full mx-auto pt-0 pb-20 px-4 md:px-8 lg:px-10">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Experience</h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-full mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <div
          className="absolute md:left-8 left-8 top-2 md:top-10 bottom-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_40px,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#fbd9ae] via-[#8c775b] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
