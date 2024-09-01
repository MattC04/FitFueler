/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCreateUser = /* GraphQL */ `subscription OnCreateCreateUser(
  $filter: ModelSubscriptionCreateUserFilterInput
) {
  onCreateCreateUser(filter: $filter) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCreateUserSubscriptionVariables,
  APITypes.OnCreateCreateUserSubscription
>;
export const onUpdateCreateUser = /* GraphQL */ `subscription OnUpdateCreateUser(
  $filter: ModelSubscriptionCreateUserFilterInput
) {
  onUpdateCreateUser(filter: $filter) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCreateUserSubscriptionVariables,
  APITypes.OnUpdateCreateUserSubscription
>;
export const onDeleteCreateUser = /* GraphQL */ `subscription OnDeleteCreateUser(
  $filter: ModelSubscriptionCreateUserFilterInput
) {
  onDeleteCreateUser(filter: $filter) {
    id
    email
    password
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCreateUserSubscriptionVariables,
  APITypes.OnDeleteCreateUserSubscription
>;
