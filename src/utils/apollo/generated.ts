import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: string;
};

/** イベント申し込み管理テーブル */
export type Applications = {
  __typename?: 'Applications';
  applyId: Scalars['uuid'];
  applyTimestamp: Scalars['timestamptz'];
  deletedFlag: Scalars['Boolean'];
  eventId: Scalars['uuid'];
  insertedAt: Scalars['timestamptz'];
  projectOwnerId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  walletAddress: Scalars['String'];
};

/** aggregated selection of "applications" */
export type ApplicationsAggregate = {
  __typename?: 'ApplicationsAggregate';
  aggregate?: Maybe<ApplicationsAggregateFields>;
  nodes: Array<Applications>;
};

/** aggregate fields of "applications" */
export type ApplicationsAggregateFields = {
  __typename?: 'ApplicationsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ApplicationsMaxFields>;
  min?: Maybe<ApplicationsMinFields>;
};


/** aggregate fields of "applications" */
export type ApplicationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type ApplicationsBoolExp = {
  _and?: InputMaybe<Array<ApplicationsBoolExp>>;
  _not?: InputMaybe<ApplicationsBoolExp>;
  _or?: InputMaybe<Array<ApplicationsBoolExp>>;
  applyId?: InputMaybe<UuidComparisonExp>;
  applyTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  deletedFlag?: InputMaybe<BooleanComparisonExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  insertedAt?: InputMaybe<TimestamptzComparisonExp>;
  projectOwnerId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  walletAddress?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "applications" */
export enum ApplicationsConstraint {
  /** unique or primary key constraint on columns "apply_id" */
  APPLICATIONS_PKEY = 'applications_pkey'
}

/** input type for inserting data into table "applications" */
export type ApplicationsInsertInput = {
  applyId?: InputMaybe<Scalars['uuid']>;
  applyTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ApplicationsMaxFields = {
  __typename?: 'ApplicationsMaxFields';
  applyId?: Maybe<Scalars['uuid']>;
  applyTimestamp?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  insertedAt?: Maybe<Scalars['timestamptz']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ApplicationsMinFields = {
  __typename?: 'ApplicationsMinFields';
  applyId?: Maybe<Scalars['uuid']>;
  applyTimestamp?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  insertedAt?: Maybe<Scalars['timestamptz']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "applications" */
export type ApplicationsMutationResponse = {
  __typename?: 'ApplicationsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** on_conflict condition type for table "applications" */
export type ApplicationsOnConflict = {
  constraint: ApplicationsConstraint;
  update_columns?: Array<ApplicationsUpdateColumn>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** Ordering options when selecting data from "applications". */
export type ApplicationsOrderBy = {
  applyId?: InputMaybe<OrderBy>;
  applyTimestamp?: InputMaybe<OrderBy>;
  deletedFlag?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  insertedAt?: InputMaybe<OrderBy>;
  projectOwnerId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  walletAddress?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: applications */
export type ApplicationsPkColumnsInput = {
  applyId: Scalars['uuid'];
};

/** select columns of table "applications" */
export enum ApplicationsSelectColumn {
  /** column name */
  APPLYID = 'applyId',
  /** column name */
  APPLYTIMESTAMP = 'applyTimestamp',
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  EVENTID = 'eventId',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WALLETADDRESS = 'walletAddress'
}

/** input type for updating data in table "applications" */
export type ApplicationsSetInput = {
  applyId?: InputMaybe<Scalars['uuid']>;
  applyTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "applications" */
export type ApplicationsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationsStreamCursorValueInput = {
  applyId?: InputMaybe<Scalars['uuid']>;
  applyTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** update columns of table "applications" */
export enum ApplicationsUpdateColumn {
  /** column name */
  APPLYID = 'applyId',
  /** column name */
  APPLYTIMESTAMP = 'applyTimestamp',
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  EVENTID = 'eventId',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WALLETADDRESS = 'walletAddress'
}

export type ApplicationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApplicationsSetInput>;
  /** filter the rows which have to be updated */
  where: ApplicationsBoolExp;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** イベント管理テーブル */
export type Events = {
  __typename?: 'Events';
  deadlineTimestamp: Scalars['timestamptz'];
  deletedFlag: Scalars['Boolean'];
  description: Scalars['String'];
  eventDate: Scalars['timestamptz'];
  eventId: Scalars['uuid'];
  eventName: Scalars['String'];
  insertedAt: Scalars['timestamptz'];
  maxApplicationsNumber: Scalars['Int'];
  organizerName: Scalars['String'];
  projectOwnerId: Scalars['uuid'];
  status: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "events" */
export type EventsAggregate = {
  __typename?: 'EventsAggregate';
  aggregate?: Maybe<EventsAggregateFields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type EventsAggregateFields = {
  __typename?: 'EventsAggregateFields';
  avg?: Maybe<EventsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<EventsMaxFields>;
  min?: Maybe<EventsMinFields>;
  stddev?: Maybe<EventsStddevFields>;
  stddevPop?: Maybe<EventsStddevPopFields>;
  stddevSamp?: Maybe<EventsStddevSampFields>;
  sum?: Maybe<EventsSumFields>;
  varPop?: Maybe<EventsVarPopFields>;
  varSamp?: Maybe<EventsVarSampFields>;
  variance?: Maybe<EventsVarianceFields>;
};


/** aggregate fields of "events" */
export type EventsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type EventsAvgFields = {
  __typename?: 'EventsAvgFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type EventsBoolExp = {
  _and?: InputMaybe<Array<EventsBoolExp>>;
  _not?: InputMaybe<EventsBoolExp>;
  _or?: InputMaybe<Array<EventsBoolExp>>;
  deadlineTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  deletedFlag?: InputMaybe<BooleanComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  eventDate?: InputMaybe<TimestamptzComparisonExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  eventName?: InputMaybe<StringComparisonExp>;
  insertedAt?: InputMaybe<TimestamptzComparisonExp>;
  maxApplicationsNumber?: InputMaybe<IntComparisonExp>;
  organizerName?: InputMaybe<StringComparisonExp>;
  projectOwnerId?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "events" */
export enum EventsConstraint {
  /** unique or primary key constraint on columns "event_id" */
  EVENTS_PKEY = 'events_pkey'
}

/** input type for incrementing numeric columns in table "events" */
export type EventsIncInput = {
  maxApplicationsNumber?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "events" */
export type EventsInsertInput = {
  deadlineTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  eventDate?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  eventName?: InputMaybe<Scalars['String']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  maxApplicationsNumber?: InputMaybe<Scalars['Int']>;
  organizerName?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type EventsMaxFields = {
  __typename?: 'EventsMaxFields';
  deadlineTimestamp?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  eventName?: Maybe<Scalars['String']>;
  insertedAt?: Maybe<Scalars['timestamptz']>;
  maxApplicationsNumber?: Maybe<Scalars['Int']>;
  organizerName?: Maybe<Scalars['String']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type EventsMinFields = {
  __typename?: 'EventsMinFields';
  deadlineTimestamp?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  eventName?: Maybe<Scalars['String']>;
  insertedAt?: Maybe<Scalars['timestamptz']>;
  maxApplicationsNumber?: Maybe<Scalars['Int']>;
  organizerName?: Maybe<Scalars['String']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "events" */
export type EventsMutationResponse = {
  __typename?: 'EventsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** on_conflict condition type for table "events" */
export type EventsOnConflict = {
  constraint: EventsConstraint;
  update_columns?: Array<EventsUpdateColumn>;
  where?: InputMaybe<EventsBoolExp>;
};

/** Ordering options when selecting data from "events". */
export type EventsOrderBy = {
  deadlineTimestamp?: InputMaybe<OrderBy>;
  deletedFlag?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  eventDate?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  eventName?: InputMaybe<OrderBy>;
  insertedAt?: InputMaybe<OrderBy>;
  maxApplicationsNumber?: InputMaybe<OrderBy>;
  organizerName?: InputMaybe<OrderBy>;
  projectOwnerId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: events */
export type EventsPkColumnsInput = {
  eventId: Scalars['uuid'];
};

/** select columns of table "events" */
export enum EventsSelectColumn {
  /** column name */
  DEADLINETIMESTAMP = 'deadlineTimestamp',
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  EVENTDATE = 'eventDate',
  /** column name */
  EVENTID = 'eventId',
  /** column name */
  EVENTNAME = 'eventName',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  MAXAPPLICATIONSNUMBER = 'maxApplicationsNumber',
  /** column name */
  ORGANIZERNAME = 'organizerName',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "events" */
export type EventsSetInput = {
  deadlineTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  eventDate?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  eventName?: InputMaybe<Scalars['String']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  maxApplicationsNumber?: InputMaybe<Scalars['Int']>;
  organizerName?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type EventsStddevFields = {
  __typename?: 'EventsStddevFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type EventsStddevPopFields = {
  __typename?: 'EventsStddev_popFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type EventsStddevSampFields = {
  __typename?: 'EventsStddev_sampFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "events" */
export type EventsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventsStreamCursorValueInput = {
  deadlineTimestamp?: InputMaybe<Scalars['timestamptz']>;
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  eventDate?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  eventName?: InputMaybe<Scalars['String']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  maxApplicationsNumber?: InputMaybe<Scalars['Int']>;
  organizerName?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type EventsSumFields = {
  __typename?: 'EventsSumFields';
  maxApplicationsNumber?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** update columns of table "events" */
export enum EventsUpdateColumn {
  /** column name */
  DEADLINETIMESTAMP = 'deadlineTimestamp',
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  EVENTDATE = 'eventDate',
  /** column name */
  EVENTID = 'eventId',
  /** column name */
  EVENTNAME = 'eventName',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  MAXAPPLICATIONSNUMBER = 'maxApplicationsNumber',
  /** column name */
  ORGANIZERNAME = 'organizerName',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type EventsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventsSetInput>;
  /** filter the rows which have to be updated */
  where: EventsBoolExp;
};

/** aggregate var_pop on columns */
export type EventsVarPopFields = {
  __typename?: 'EventsVar_popFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type EventsVarSampFields = {
  __typename?: 'EventsVar_sampFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type EventsVarianceFields = {
  __typename?: 'EventsVarianceFields';
  maxApplicationsNumber?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'ASC',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  DESC = 'DESC',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'DESC_NULLS_LAST'
}

/** ODK・企業マスターテーブル */
export type ProjectOwners = {
  __typename?: 'ProjectOwners';
  deletedFlag: Scalars['Boolean'];
  insertedAt: Scalars['timestamptz'];
  mail: Scalars['String'];
  projectOwnerId: Scalars['uuid'];
  projectOwnerName: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "project_owners" */
export type ProjectOwnersAggregate = {
  __typename?: 'ProjectOwnersAggregate';
  aggregate?: Maybe<ProjectOwnersAggregateFields>;
  nodes: Array<ProjectOwners>;
};

/** aggregate fields of "project_owners" */
export type ProjectOwnersAggregateFields = {
  __typename?: 'ProjectOwnersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ProjectOwnersMaxFields>;
  min?: Maybe<ProjectOwnersMinFields>;
};


/** aggregate fields of "project_owners" */
export type ProjectOwnersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectOwnersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_owners". All fields are combined with a logical 'AND'. */
export type ProjectOwnersBoolExp = {
  _and?: InputMaybe<Array<ProjectOwnersBoolExp>>;
  _not?: InputMaybe<ProjectOwnersBoolExp>;
  _or?: InputMaybe<Array<ProjectOwnersBoolExp>>;
  deletedFlag?: InputMaybe<BooleanComparisonExp>;
  insertedAt?: InputMaybe<TimestamptzComparisonExp>;
  mail?: InputMaybe<StringComparisonExp>;
  projectOwnerId?: InputMaybe<UuidComparisonExp>;
  projectOwnerName?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "project_owners" */
export enum ProjectOwnersConstraint {
  /** unique or primary key constraint on columns "project_owner_id" */
  PROJECT_OWNERS_PKEY = 'project_owners_pkey'
}

/** input type for inserting data into table "project_owners" */
export type ProjectOwnersInsertInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  projectOwnerName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProjectOwnersMaxFields = {
  __typename?: 'ProjectOwnersMaxFields';
  insertedAt?: Maybe<Scalars['timestamptz']>;
  mail?: Maybe<Scalars['String']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  projectOwnerName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ProjectOwnersMinFields = {
  __typename?: 'ProjectOwnersMinFields';
  insertedAt?: Maybe<Scalars['timestamptz']>;
  mail?: Maybe<Scalars['String']>;
  projectOwnerId?: Maybe<Scalars['uuid']>;
  projectOwnerName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project_owners" */
export type ProjectOwnersMutationResponse = {
  __typename?: 'ProjectOwnersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectOwners>;
};

/** on_conflict condition type for table "project_owners" */
export type ProjectOwnersOnConflict = {
  constraint: ProjectOwnersConstraint;
  update_columns?: Array<ProjectOwnersUpdateColumn>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};

/** Ordering options when selecting data from "project_owners". */
export type ProjectOwnersOrderBy = {
  deletedFlag?: InputMaybe<OrderBy>;
  insertedAt?: InputMaybe<OrderBy>;
  mail?: InputMaybe<OrderBy>;
  projectOwnerId?: InputMaybe<OrderBy>;
  projectOwnerName?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_owners */
export type ProjectOwnersPkColumnsInput = {
  projectOwnerId: Scalars['uuid'];
};

/** select columns of table "project_owners" */
export enum ProjectOwnersSelectColumn {
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  MAIL = 'mail',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  PROJECTOWNERNAME = 'projectOwnerName',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

/** input type for updating data in table "project_owners" */
export type ProjectOwnersSetInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  projectOwnerName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "project_owners" */
export type ProjectOwnersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProjectOwnersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectOwnersStreamCursorValueInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  mail?: InputMaybe<Scalars['String']>;
  projectOwnerId?: InputMaybe<Scalars['uuid']>;
  projectOwnerName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "project_owners" */
export enum ProjectOwnersUpdateColumn {
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  MAIL = 'mail',
  /** column name */
  PROJECTOWNERID = 'projectOwnerId',
  /** column name */
  PROJECTOWNERNAME = 'projectOwnerName',
  /** column name */
  UPDATEDAT = 'updatedAt'
}

export type ProjectOwnersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectOwnersSetInput>;
  /** filter the rows which have to be updated */
  where: ProjectOwnersBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** ユーザ管理テーブル */
export type Users = {
  __typename?: 'Users';
  deletedFlag: Scalars['Boolean'];
  insertedAt: Scalars['timestamptz'];
  profileImageUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  walletAddress: Scalars['String'];
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  deletedFlag?: InputMaybe<BooleanComparisonExp>;
  insertedAt?: InputMaybe<TimestamptzComparisonExp>;
  profileImageUrl?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  walletAddress?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "wallet_address" */
  USERS_PKEY = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  profileImageUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  insertedAt?: Maybe<Scalars['timestamptz']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  insertedAt?: Maybe<Scalars['timestamptz']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  deletedFlag?: InputMaybe<OrderBy>;
  insertedAt?: InputMaybe<OrderBy>;
  profileImageUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  walletAddress?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  walletAddress: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  PROFILEIMAGEURL = 'profileImageUrl',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WALLETADDRESS = 'walletAddress'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  profileImageUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  deletedFlag?: InputMaybe<Scalars['Boolean']>;
  insertedAt?: InputMaybe<Scalars['timestamptz']>;
  profileImageUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  DELETEDFLAG = 'deletedFlag',
  /** column name */
  INSERTEDAT = 'insertedAt',
  /** column name */
  PROFILEIMAGEURL = 'profileImageUrl',
  /** column name */
  UPDATEDAT = 'updatedAt',
  /** column name */
  WALLETADDRESS = 'walletAddress'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "applications" */
  deleteApplications?: Maybe<ApplicationsMutationResponse>;
  /** delete single row from the table: "applications" */
  deleteApplicationsByPk?: Maybe<Applications>;
  /** delete data from the table: "events" */
  deleteEvents?: Maybe<EventsMutationResponse>;
  /** delete single row from the table: "events" */
  deleteEventsByPk?: Maybe<Events>;
  /** delete data from the table: "project_owners" */
  deleteProjectOwners?: Maybe<ProjectOwnersMutationResponse>;
  /** delete single row from the table: "project_owners" */
  deleteProjectOwnersByPk?: Maybe<ProjectOwners>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** insert data into the table: "applications" */
  insertApplications?: Maybe<ApplicationsMutationResponse>;
  /** insert a single row into the table: "applications" */
  insertApplicationsOne?: Maybe<Applications>;
  /** insert data into the table: "events" */
  insertEvents?: Maybe<EventsMutationResponse>;
  /** insert a single row into the table: "events" */
  insertEventsOne?: Maybe<Events>;
  /** insert data into the table: "project_owners" */
  insertProjectOwners?: Maybe<ProjectOwnersMutationResponse>;
  /** insert a single row into the table: "project_owners" */
  insertProjectOwnersOne?: Maybe<ProjectOwners>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** update data of the table: "applications" */
  updateApplications?: Maybe<ApplicationsMutationResponse>;
  /** update single row of the table: "applications" */
  updateApplicationsByPk?: Maybe<Applications>;
  /** update multiples rows of table: "applications" */
  updateApplicationsMany?: Maybe<Array<Maybe<ApplicationsMutationResponse>>>;
  /** update data of the table: "events" */
  updateEvents?: Maybe<EventsMutationResponse>;
  /** update single row of the table: "events" */
  updateEventsByPk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  updateEventsMany?: Maybe<Array<Maybe<EventsMutationResponse>>>;
  /** update data of the table: "project_owners" */
  updateProjectOwners?: Maybe<ProjectOwnersMutationResponse>;
  /** update single row of the table: "project_owners" */
  updateProjectOwnersByPk?: Maybe<ProjectOwners>;
  /** update multiples rows of table: "project_owners" */
  updateProjectOwnersMany?: Maybe<Array<Maybe<ProjectOwnersMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteApplicationsArgs = {
  where: ApplicationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteApplicationsByPkArgs = {
  applyId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteEventsArgs = {
  where: EventsBoolExp;
};


/** mutation root */
export type MutationRootDeleteEventsByPkArgs = {
  eventId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteProjectOwnersArgs = {
  where: ProjectOwnersBoolExp;
};


/** mutation root */
export type MutationRootDeleteProjectOwnersByPkArgs = {
  projectOwnerId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  walletAddress: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertApplicationsArgs = {
  objects: Array<ApplicationsInsertInput>;
  onConflict?: InputMaybe<ApplicationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertApplicationsOneArgs = {
  object: ApplicationsInsertInput;
  onConflict?: InputMaybe<ApplicationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertEventsArgs = {
  objects: Array<EventsInsertInput>;
  onConflict?: InputMaybe<EventsOnConflict>;
};


/** mutation root */
export type MutationRootInsertEventsOneArgs = {
  object: EventsInsertInput;
  onConflict?: InputMaybe<EventsOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectOwnersArgs = {
  objects: Array<ProjectOwnersInsertInput>;
  onConflict?: InputMaybe<ProjectOwnersOnConflict>;
};


/** mutation root */
export type MutationRootInsertProjectOwnersOneArgs = {
  object: ProjectOwnersInsertInput;
  onConflict?: InputMaybe<ProjectOwnersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateApplicationsArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  where: ApplicationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateApplicationsByPkArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  pk_columns: ApplicationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateApplicationsManyArgs = {
  updates: Array<ApplicationsUpdates>;
};


/** mutation root */
export type MutationRootUpdateEventsArgs = {
  _inc?: InputMaybe<EventsIncInput>;
  _set?: InputMaybe<EventsSetInput>;
  where: EventsBoolExp;
};


/** mutation root */
export type MutationRootUpdateEventsByPkArgs = {
  _inc?: InputMaybe<EventsIncInput>;
  _set?: InputMaybe<EventsSetInput>;
  pk_columns: EventsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateEventsManyArgs = {
  updates: Array<EventsUpdates>;
};


/** mutation root */
export type MutationRootUpdateProjectOwnersArgs = {
  _set?: InputMaybe<ProjectOwnersSetInput>;
  where: ProjectOwnersBoolExp;
};


/** mutation root */
export type MutationRootUpdateProjectOwnersByPkArgs = {
  _set?: InputMaybe<ProjectOwnersSetInput>;
  pk_columns: ProjectOwnersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateProjectOwnersManyArgs = {
  updates: Array<ProjectOwnersUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  eventsAggregate: EventsAggregate;
  /** fetch data from the table: "events" using primary key columns */
  eventsByPk?: Maybe<Events>;
  /** fetch data from the table: "project_owners" */
  projectOwners: Array<ProjectOwners>;
  /** fetch aggregated fields from the table: "project_owners" */
  projectOwnersAggregate: ProjectOwnersAggregate;
  /** fetch data from the table: "project_owners" using primary key columns */
  projectOwnersByPk?: Maybe<ProjectOwners>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};


export type QueryRootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type QueryRootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type QueryRootApplicationsByPkArgs = {
  applyId: Scalars['uuid'];
};


export type QueryRootEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type QueryRootEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type QueryRootEventsByPkArgs = {
  eventId: Scalars['uuid'];
};


export type QueryRootProjectOwnersArgs = {
  distinctOn?: InputMaybe<Array<ProjectOwnersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOwnersOrderBy>>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};


export type QueryRootProjectOwnersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectOwnersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOwnersOrderBy>>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};


export type QueryRootProjectOwnersByPkArgs = {
  projectOwnerId: Scalars['uuid'];
};


export type QueryRootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  walletAddress: Scalars['String'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "applications" */
  applications: Array<Applications>;
  /** fetch aggregated fields from the table: "applications" */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** fetch data from the table in a streaming manner: "applications" */
  applicationsStream: Array<Applications>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  eventsAggregate: EventsAggregate;
  /** fetch data from the table: "events" using primary key columns */
  eventsByPk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  eventsStream: Array<Events>;
  /** fetch data from the table: "project_owners" */
  projectOwners: Array<ProjectOwners>;
  /** fetch aggregated fields from the table: "project_owners" */
  projectOwnersAggregate: ProjectOwnersAggregate;
  /** fetch data from the table: "project_owners" using primary key columns */
  projectOwnersByPk?: Maybe<ProjectOwners>;
  /** fetch data from the table in a streaming manner: "project_owners" */
  projectOwnersStream: Array<ProjectOwners>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};


export type SubscriptionRootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type SubscriptionRootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type SubscriptionRootApplicationsByPkArgs = {
  applyId: Scalars['uuid'];
};


export type SubscriptionRootApplicationsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ApplicationsStreamCursorInput>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type SubscriptionRootEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type SubscriptionRootEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type SubscriptionRootEventsByPkArgs = {
  eventId: Scalars['uuid'];
};


export type SubscriptionRootEventsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<EventsStreamCursorInput>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type SubscriptionRootProjectOwnersArgs = {
  distinctOn?: InputMaybe<Array<ProjectOwnersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOwnersOrderBy>>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};


export type SubscriptionRootProjectOwnersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectOwnersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectOwnersOrderBy>>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};


export type SubscriptionRootProjectOwnersByPkArgs = {
  projectOwnerId: Scalars['uuid'];
};


export type SubscriptionRootProjectOwnersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<ProjectOwnersStreamCursorInput>>;
  where?: InputMaybe<ProjectOwnersBoolExp>;
};


export type SubscriptionRootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  walletAddress: Scalars['String'];
};


export type SubscriptionRootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type UserGetEventListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGetEventListQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'Events', eventId: string, eventName: string }> };


export const UserGetEventListDocument = gql`
    query UserGetEventList {
  events {
    eventId
    eventName
  }
}
    `;

/**
 * __useUserGetEventListQuery__
 *
 * To run a query within a React component, call `useUserGetEventListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGetEventListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGetEventListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGetEventListQuery(baseOptions?: Apollo.QueryHookOptions<UserGetEventListQuery, UserGetEventListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserGetEventListQuery, UserGetEventListQueryVariables>(UserGetEventListDocument, options);
      }
export function useUserGetEventListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGetEventListQuery, UserGetEventListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserGetEventListQuery, UserGetEventListQueryVariables>(UserGetEventListDocument, options);
        }
export type UserGetEventListQueryHookResult = ReturnType<typeof useUserGetEventListQuery>;
export type UserGetEventListLazyQueryHookResult = ReturnType<typeof useUserGetEventListLazyQuery>;
export type UserGetEventListQueryResult = Apollo.QueryResult<UserGetEventListQuery, UserGetEventListQueryVariables>;