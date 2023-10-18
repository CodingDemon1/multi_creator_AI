import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function PageContent() {
  return (
    <div className="flex flex-col items-center gap-7 mt-12">
      <div className="border">
        <span className="border bg-[#d0f8ab] rounded-full text-[#4ca30d] p-1 px-3">
          25+ AI powered tools
        </span>
      </div>
      <div className="flex flex-row justify-between gap-2 border border-[#ff6154] w-[15]rem] rounded-lg px-4 py-1">
        <div className="flex flex-col justify-center">
          <AiOutlineCheckCircle className="w-6 h-6" />
        </div>
        <div className="flex flex-col text-[#ff6154]">
          <span className="  text-left text-sm">PRODUCT HUNT</span>
          <span className="  font-semibold text-lg">#1 Product of the day</span>
        </div>
      </div>
      <div className="text-6xl font-bold">Meet Highperformr AI Tools</div>
      <div className=" text-2xl break-word w-[65rem]">
        Amp up your social presence and workflows, from social media to product
        launches. Built for PMs, designers, marketers, creators—to navigate 25
        essential use-cases
      </div>
      <div className="flex flex-row gap-4">
        <div className="p-3 px-8 border rounded-lg shadow-md text-opacity-25">Explore all free tools</div>
        <div className="p-3 px-8 border bg-[#4ca30d] text-white rounded-lg">Create your X (Twitter) Bio Now</div>
      </div>
      <div className="mt-10">
        <iframe
          title="youtube"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/1BvTmfwLZLg"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-4xl mt-5">Pick your tool, Be a Highperformr.</div>
    </div>
  );
}

export default PageContent;
