import React from 'react'
import OgImage from './OgImage'

export const ProjectCard = ({ title, description, url, og_url }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <OgImage url={og_url || url} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center px-4 py-2 text-sm text-blue-500 font-medium transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          View Project
        </a>
      </div>
    </div>
  )
}