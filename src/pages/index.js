import React from "react";
import { SocialIcon } from "react-social-icons";
import { Helmet } from "react-helmet-async";
import config from "../data/config";
import { ProjectShowcase } from '../components/ProjectShowcase';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white px-4 py-24">
      <Helmet>
        <title>{config.defaultTitle}</title>
        <meta
          name="description"
          content={config.defaultDescription}
        />
      </Helmet>

      <h1 className="text-xl font-medium text-gray-800 leading-8 m-0">
        Tim Upchurch
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        <em>On the internet!</em>
      </p>

      <div className="flex gap-2 mt-4">
        {config.social.map((social) => (
          <SocialIcon
            key={social.url}
            url={social.url}
            style={{ height: "32px", width: "32px" }}
          />
        ))}
      </div>

      <p className="text-sm mt-4">
        <a
          href="resume.pdf"
          className="text-sky-400 hover:text-sky-600 hover:underline"
        >
          View resume
        </a>
      </p>
      
      <div className="w-full mx-auto max-w-md grid grid-cols-1 gap-6 mt-8">
        <hr className="w-full" />
      </div>
      
      <div className="mt-8">
        <ProjectShowcase />
      </div>
    </div>
  );
};

export default IndexPage;
