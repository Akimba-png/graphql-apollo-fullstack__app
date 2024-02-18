import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  TextField,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { User } from '../../models/user';

function UserForm(): JSX.Element {
  const [ user, setUser ] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
    setUser({
      ...user,
      [evt.target.name]: evt.target.value,
    });
  };

  const hanldeSubmitChange = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(user);
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '30px',
      }}
    >
      <Card
        onSubmit={hanldeSubmitChange}
        component="form"
        sx={{width: '60%'}}
      >
        <CardHeader component="h6" title="Add user" sx={{ m: 0 }}></CardHeader>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            margin="dense"
            name="name"
            value={ user.name }
            onChange={ handleInputChange }
            sx={{mb: 0}}
          />
          <TextField
            id="filled-basic"
            label="email"
            variant="outlined"
            margin="dense"
            name="email"
            value={ user.email }
            onChange={ handleInputChange }
          />
          <TextField
            id="standard-basic"
            label="password"
            variant="outlined"
            margin="dense"
            name="password"
            value={ user.password }
            onChange={ handleInputChange }
          />
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="outlined"
            sx={{ ml: 'auto', mr: '10px', mb: '20px' }}
          >
            Add user
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export { UserForm };
