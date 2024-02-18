import { Paper, Typography } from '@mui/material';
import { User } from '../models/user';

type UserItemProps = {
  user: User;
}

function UserItem({ user }: UserItemProps): JSX.Element {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
        mb: '10px',
      }}
      elevation={2}
    >
      <Typography component="h3" variant="h6">
        {user.name}
      </Typography>
      <Typography component="h3" variant="h6">
        {user.email}
      </Typography>
    </Paper>
  );
}

export { UserItem };
