import {createUser} from "./createUser";

interface stateMachineInterface {
  fn: Function;
  token: string;
}

const server = (type: string, payload: any) => {
  const stateMachine: stateMachineInterface[] = [
    { fn: createUser, token: "createUser" },
  ];

  stateMachine.map((state) => {
    if (state.token === type)  return state.fn(payload);
    return 500
  });
};

server('createUser', {email: 'proot', 'password': '123'})