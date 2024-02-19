import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../graphql/queries';
import { UserItem } from '../../user-item/user-item';
import { type User } from '../../models/user';


const updateButtonHandler = () => {
  console.log('click');
};

function UserList(): JSX.Element {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return (
      <Container>
        <Typography variant='h6'component='h3'>
          User's data is loading
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant='h6'component='h3'>
          Something wrong happened while loading
        </Typography>
      </Container>
    );
  }

  const users: User[] = data.getUsers;
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
