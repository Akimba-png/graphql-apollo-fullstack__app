import { UserForm } from '../user-form/user-form';
import { UserList } from '../user-list/user-list';

function MainScreen(): JSX.Element {
  return (
    <>
      <UserForm />
      <UserList />
    </>
  );
}

export { MainScreen };
