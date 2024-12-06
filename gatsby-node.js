exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ProjectsYaml implements Node {
      url: String!
      title: String!
      description: String!
    }
  `
  createTypes(typeDefs)
}