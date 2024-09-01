/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCreateUser = /* GraphQL */ `mutation CreateCreateUser(
  $input: CreateCreateUserInput!
  $condition: ModelCreateUserConditionInput
) {
  createCreateUser(input: $input, condition: $condition) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCreateUserMutationVariables,
  APITypes.CreateCreateUserMutation
>;
export const updateCreateUser = /* GraphQL */ `mutation UpdateCreateUser(
  $input: UpdateCreateUserInput!
  $condition: ModelCreateUserConditionInput
) {
  updateCreateUser(input: $input, condition: $condition) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCreateUserMutationVariables,
  APITypes.UpdateCreateUserMutation
>;
export const deleteCreateUser = /* GraphQL */ `mutation DeleteCreateUser(
  $input: DeleteCreateUserInput!
  $condition: ModelCreateUserConditionInput
) {
  deleteCreateUser(input: $input, condition: $condition) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCreateUserMutationVariables,
  APITypes.DeleteCreateUserMutation
>;
