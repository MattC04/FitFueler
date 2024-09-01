/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCreateUserInput = {
  id?: string | null,
  email: string,
  password?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCreateUserConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCreateUserConditionInput | null > | null,
  or?: Array< ModelCreateUserConditionInput | null > | null,
  not?: ModelCreateUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreateUser = {
  __typename: "CreateUser",
  id: string,
  email: string,
  password?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateCreateUserInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCreateUserInput = {
  id: string,
};

export type ModelCreateUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCreateUserFilterInput | null > | null,
  or?: Array< ModelCreateUserFilterInput | null > | null,
  not?: ModelCreateUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCreateUserConnection = {
  __typename: "ModelCreateUserConnection",
  items:  Array<CreateUser | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCreateUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCreateUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionCreateUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCreateUserMutationVariables = {
  input: CreateCreateUserInput,
  condition?: ModelCreateUserConditionInput | null,
};

export type CreateCreateUserMutation = {
  createCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateCreateUserMutationVariables = {
  input: UpdateCreateUserInput,
  condition?: ModelCreateUserConditionInput | null,
};

export type UpdateCreateUserMutation = {
  updateCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteCreateUserMutationVariables = {
  input: DeleteCreateUserInput,
  condition?: ModelCreateUserConditionInput | null,
};

export type DeleteCreateUserMutation = {
  deleteCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetCreateUserQueryVariables = {
  id: string,
};

export type GetCreateUserQuery = {
  getCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListCreateUsersQueryVariables = {
  filter?: ModelCreateUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCreateUsersQuery = {
  listCreateUsers?:  {
    __typename: "ModelCreateUserConnection",
    items:  Array< {
      __typename: "CreateUser",
      id: string,
      email: string,
      password?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionCreateUserFilterInput | null,
};

export type OnCreateCreateUserSubscription = {
  onCreateCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionCreateUserFilterInput | null,
};

export type OnUpdateCreateUserSubscription = {
  onUpdateCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionCreateUserFilterInput | null,
};

export type OnDeleteCreateUserSubscription = {
  onDeleteCreateUser?:  {
    __typename: "CreateUser",
    id: string,
    email: string,
    password?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
