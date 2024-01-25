/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Grid, GridItem, TextInput } from '@strapi/design-system';

//RFC = React Functional Component
const HomePage = () => {
  return (
    <div>
       <form>
        <Grid>
          <GridItem col={6}>
              <TextInput placeholder="" label="Student Name" name="student"  />
          </GridItem>
        </Grid>
        <Grid>
          <GridItem col={6}>
        
            <Button variant="default">Submit</Button>
          </GridItem>
        </Grid>
      </form>
    </div>
  );
};

export default HomePage;
