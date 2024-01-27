
//1 import area
import React, { useState } from 'react';

import Student from '../../components/Forms/Student';

//2. Function defination area
//RFC = React Functional Component
const HomePage = () => {
  
  //2.3 return statemernt
  return (
    <div style={{padding:'40px'}}>
       <Student />
    </div>
  );
};


//3. Export area
export default HomePage;
