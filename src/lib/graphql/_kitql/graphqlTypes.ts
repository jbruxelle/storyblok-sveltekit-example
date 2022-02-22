import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  content_string?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type LayoutComponent = {
  __typename?: 'LayoutComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['BlockScalar']>;
  header?: Maybe<Scalars['BlockScalar']>;
};

export type LayoutItem = {
  __typename?: 'LayoutItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<LayoutComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type LayoutItems = {
  __typename?: 'LayoutItems';
  items?: Maybe<Array<Maybe<LayoutItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']>;
  isFolder?: Maybe<Scalars['Boolean']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
  seo?: Maybe<Scalars['JsonScalar']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  LayoutItem?: Maybe<LayoutItem>;
  LayoutItems?: Maybe<LayoutItems>;
  Links?: Maybe<LinkEntries>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  RateLimit?: Maybe<RateLimit>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};


export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']>;
  dimension?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
};


export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLayoutItemArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLayoutItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']>;
  starts_with?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  language?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']>;
  by_uuids?: InputMaybe<Scalars['String']>;
  by_uuids_ordered?: InputMaybe<Scalars['String']>;
  excluding_fields?: InputMaybe<Scalars['String']>;
  excluding_ids?: InputMaybe<Scalars['String']>;
  excluding_slugs?: InputMaybe<Scalars['String']>;
  fallback_lang?: InputMaybe<Scalars['String']>;
  filter_query?: InputMaybe<Scalars['JsonScalar']>;
  first_published_at_gt?: InputMaybe<Scalars['String']>;
  first_published_at_lt?: InputMaybe<Scalars['String']>;
  from_release?: InputMaybe<Scalars['String']>;
  is_startpage?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  published_at_gt?: InputMaybe<Scalars['String']>;
  published_at_lt?: InputMaybe<Scalars['String']>;
  resolve_links?: InputMaybe<Scalars['String']>;
  resolve_relations?: InputMaybe<Scalars['String']>;
  search_term?: InputMaybe<Scalars['String']>;
  sort_by?: InputMaybe<Scalars['String']>;
  starts_with?: InputMaybe<Scalars['String']>;
  with_tag?: InputMaybe<Scalars['String']>;
};


export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']>;
};

export type RateLimit = {
  __typename?: 'RateLimit';
  maxCost: Scalars['Int'];
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type LayoutDetailFragment = { __typename?: 'LayoutItem', content?: { __typename?: 'LayoutComponent', component?: string | null, header?: any | null, footer?: any | null } | null };

export type LayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQuery = { __typename?: 'QueryType', LayoutItem?: { __typename?: 'LayoutItem', content?: { __typename?: 'LayoutComponent', component?: string | null, header?: any | null, footer?: any | null } | null } | null };

export type PageFragment = { __typename?: 'PageItem', slug?: string | null, content?: { __typename?: 'PageComponent', body?: any | null } | null };

export const LayoutDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"footer"}}]}}]}}]} as unknown as DocumentNode<LayoutDetailFragment, unknown>;
export const PageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Page"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]} as unknown as DocumentNode<PageFragment, unknown>;
export const LayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LayoutItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"layout","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutDetail"}}]}}]}},...LayoutDetailFragmentDoc.definitions]} as unknown as DocumentNode<LayoutQuery, LayoutQueryVariables>;
export const LayoutDetail = gql`
    fragment LayoutDetail on LayoutItem {
  content {
    component
    header
    footer
  }
}
    `;
export const Page = gql`
    fragment Page on PageItem {
  slug
  content {
    body
  }
}
    `;
export const Layout = gql`
    query Layout {
  LayoutItem(id: "layout") {
    ...LayoutDetail
  }
}
    ${LayoutDetail}`;