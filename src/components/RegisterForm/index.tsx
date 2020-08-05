import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const RegisterForm: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>New user? Register now</Typography>
      <form className={styles.formContainer}>
        <Box className={styles.displayNameContainer}>
          <TextField
            required
            variant="outlined"
            className={styles.fieldDisplayName}
            label="First Name"
            name="firstname"
          />
          <TextField
            required
            variant="outlined"
            className={styles.fieldDisplayName}
            label="Last Name"
            name="lastname"
          />
        </Box>
        <TextField
          required
          variant="outlined"
          className={styles.field}
          label="Email"
          type="email"
        />
        <TextField
          required
          variant="outlined"
          className={styles.field}
          label="Password"
          type="password"
        />
        <TextField
          required
          variant="outlined"
          className={styles.field}
          label="Confirm Password"
          type="password"
        />
        <Button variant="outlined" type="submit" className={styles.registerBt}>
          Register Now
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
