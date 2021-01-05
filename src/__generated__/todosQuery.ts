/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: todosQuery
// ====================================================

export interface todosQuery_todos_todos {
  __typename: "Todo";
  description: string;
  name: string;
  isDone: boolean;
}

export interface todosQuery_todos {
  __typename: "TodosOutput";
  totalPages: number | null;
  totalResults: number | null;
  ok: boolean;
  error: string | null;
  todos: todosQuery_todos_todos[] | null;
}

export interface todosQuery {
  todos: todosQuery_todos;
}
