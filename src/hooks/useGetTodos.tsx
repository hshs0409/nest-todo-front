import { gql, useQuery } from "@apollo/client";
import { todosQuery } from "../__generated__/todosQuery";

const GET_TODOS_QUERY = gql`
  query todosQuery {
    todos(input: $input) {
      totalPages
      totalResults
      ok
      error
      todos {
        description
        name
        isDone
      }
    }
  }
`;

export const useGetTodos = () => {
  return useQuery<todosQuery>(GET_TODOS_QUERY);
};
