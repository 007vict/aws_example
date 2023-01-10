/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      title
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
