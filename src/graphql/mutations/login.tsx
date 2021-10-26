import { useMutation, gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Login(
    $params: LoginUserInput!
  ) {
    loginUser(input:$params){
      user{
        email
        username
        id
        lists{
          id
          title
          tasks{
            id
            completed
            type
            description
          }
        }
      }
      token
    }
  }
`;

export interface AuthUser {
  email: string;
  username: string;
  token: string;
  id: string;
  lists: {
    id: number;
    title: string;
    tasks: {
      id: string;
      completed: boolean;
      type: string;
      description: string;
    }
  }
}

export interface LoginUserInput {
  login: {
    username: string,
    password: string
  }
}

export const LoginUser = (variables: LoginUserInput) => {
  return useMutation<AuthUser>(LOGIN_MUTATION, {
    variables: variables
  })
}

