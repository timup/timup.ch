import React from "react";
import OgImage from "./OgImage";

export const ProjectCard = ({ title, description, url, og_url }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <OgImage url={og_url || url} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-sm mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-600 hover:underline"
          >
            View project
          </a>
        </p>
      </div>
    </div>
  );
};
