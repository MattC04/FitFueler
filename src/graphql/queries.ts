/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCreateUser = /* GraphQL */ `query GetCreateUser($id: ID!) {
  getCreateUser(id: $id) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCreateUserQueryVariables,
  APITypes.GetCreateUserQuery
>;
export const listCreateUsers = /* GraphQL */ `query ListCreateUsers(
  $filter: ModelCreateUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreateUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      password
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCreateUsersQueryVariables,
  APITypes.ListCreateUsersQuery
>;
