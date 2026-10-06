/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  street: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AddressFieldsFragment = { street: string, zip: string };

export type UserFieldsFragment = { id: string, name: string, address: { street: string, zip: string } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { user: { id: string, name: string, address: { street: string, zip: string } | null } | null };

export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on Address {
  street
  zip
}
    ` as unknown as DocumentNode<AddressFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  name
  address {
    ...AddressFields
  }
}
    ` as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const GetUserDocument = gql`
    query GetUser {
  user {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}
${AddressFieldsFragmentDoc}` as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;