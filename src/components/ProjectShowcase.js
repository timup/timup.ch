import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ProjectCard } from './ProjectCard'

export const ProjectShowcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        nodes {
          url
          title
          description
        }
      }
    }
  `)

  const projects = data.allProjectsYaml.nodes

  return (
    <div className="mx-auto max-w-md grid grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  )
}
