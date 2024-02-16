import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

export default function Navigation(): JSX.Element {
  return (
    <>
      <AppBar position="static" sx={{mb: '30px'}}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
              React apollo app
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export { Navigation };
