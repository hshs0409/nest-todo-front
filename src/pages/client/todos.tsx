import { gql, useMutation } from "@apollo/client";
import React from "react";
import {
  deleteTodoMutation,
  deleteTodoMutationVariables,
} from "../../__generated__/deleteTodoMutation";

const CREATE_TODO_MUTATION = gql`
  mutation createTodoMutation($createTodoInput: CreateTodoInput!) {
    createTodo(input: $createTodoInput) {
      ok
      error
    }
  }
`;
const EDIT_TODO_MUTATION = gql`
  mutation editTodoMutation($editTodoInput: EditTodoInput!) {
    editTodo(input: $editTodoInput) {
      ok
      error
    }
  }
`;
const DELETE_TODO_MUTATION = gql`
  mutation deleteTodoMutation($deleteTodoInput: DeleteTodoInput!) {
    deleteTodo(input: $deleteTodoInput) {
      ok
      error
    }
  }
`;

interface ITodoFormProps {
  name: string;
  description: string;
  isDone?: boolean;
}

export const Todos = () => {
  const onCompleted = () => {};
  const [deleteMutation, { loading }] = useMutation<
    deleteTodoMutation,
    deleteTodoMutationVariables
  >(DELETE_TODO_MUTATION, { onCompleted });
  return <h1>Todos</h1>;
};
