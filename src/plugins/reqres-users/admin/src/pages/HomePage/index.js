/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Avatar, BaseCheckbox, Box, Flex, IconButton, Table, Tbody, Th,Tr,Td, Thead, Typography, VisuallyHidden } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';

const HomePage = () => {
  
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
                <Typography variant="sigma">Cover</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Description</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Categories</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Contact</Typography>
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
                  <Typography textColor="neutral800">1</Typography>
                </Td>
                <Td>
                  a
                </Td>
                <Td>
                  <Typography textColor="neutral800">2</Typography>
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

export default HomePage;
