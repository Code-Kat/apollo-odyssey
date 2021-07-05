const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's author"
    author: Author!
    "the track's main image that will be displayed in the track card"
    thumbnail: String
    "the track's approx lenth to complete in minutes"
    length: Int
    "the number od modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    "Author's picture url"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
`;

module.exports = typeDefs;
