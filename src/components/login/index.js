import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Box} from 'react-layout-components';

export default ({title, subtitle}) => (
  <Box width={300} height={300}>
    <Card>
      <CardTitle title={title} subtitle={subtitle} />
      <CardText>
        <TextField hintText="Username" />
        <TextField hintText="Password" type="password" />
      </CardText>
      <CardActions>
        <Box justifyContent="flex-end">
          <RaisedButton primary={true} label="Login" />
        </Box>
      </CardActions>
    </Card>
  </Box>
);
