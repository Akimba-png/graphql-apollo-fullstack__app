import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { UserItem } from '../../user-item/user-item';
import { type User } from '../../models/user';

const users: User[] = [
  {
    id: '0',
    name: 'test',
    email: 'test@test.ru',
    password: 'test password',
  },
  {
    id: '1',
    name: 'proba',
    email: 'proba@proba.ru',
    password: 'proba password',
  },
];

const updateButtonHandler = () => {
  console.log('click');
};

function UserList(): JSX.Element {
  return (
    <Container>
      <Card
        sx={{
          width: '60%',
          marginInline: 'auto',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CardHeader component="h5" title="User`s list" />
          <Button
            onClick={updateButtonHandler}
            variant="outlined"
            type="button"
            sx={{
              mr: '5px',
            }}
          >
            Update users
          </Button>
        </Box>
        <Stack>
          {!users.length ? (
            <Typography variant="h6" component="h3">
              There is no users loaded
            </Typography>
          ) : (
            users.map((user) => <UserItem user={user} key={user.id} />)
          )}
        </Stack>
      </Card>
    </Container>
  );
}

export { UserList };
