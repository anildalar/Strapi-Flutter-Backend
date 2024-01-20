//1. Import area
import React,{ useState,useEffect } from 'react';
import { Avatar, BaseCheckbox, Box, Flex, IconButton, Table, Tbody, Th,Tr,Td, Thead, Typography, VisuallyHidden } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';

//RFC React Functional Component they return html tags
//2. Function defination area
const HomePage = () => { //Fat arrow function/new/old
  //2.1 Hooks Variable area
  const [fullname,setFullname] = useState('Anil Dollor1')
  const [address,setAddress] = useState('Neemuch2')
  const [mobileNo,setMobileNo] = useState('79994527113')

  //After page reload
  useEffect(()=>{
    console.log('Page loaded successfully')
    //http://localhost:1337/reqres-users/getusers
  },[])

  //2.2 Function defination area

  //2.3 return statement
  //Ever function return something
  return (
      <Box>
        <Table colCount={7} rowCount={1}>
          <Thead>
            <Tr>
              <Th>
                <BaseCheckbox aria-label="Select all entries" />
              </Th>
              <Th>
                <Typography variant="sigma">ID</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Email</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">First Name</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Last Name</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Avatar</Typography>
              </Th>
              <Th>
                <VisuallyHidden>Actions</VisuallyHidden>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
              <Tr >
                <Td>
                  <BaseCheckbox />
                </Td>
                <Td>
                  <Typography textColor="neutral800">{fullname}</Typography>
                </Td>
                <Td>
                {address}
                </Td>
                <Td>
                  <Typography textColor="neutral800">{mobileNo}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">3</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">4</Typography>
                </Td>
                <Td>
                  <Flex>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                      G
                    </a>
                    <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
                    <Box paddingLeft={1}>
                      <IconButton onClick={() => console.log('delete')} label="Delete" noBorder icon={<Trash />} />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
          </Tbody>
        </Table>
      </Box>
  );
};


//3. Export
export default HomePage;
