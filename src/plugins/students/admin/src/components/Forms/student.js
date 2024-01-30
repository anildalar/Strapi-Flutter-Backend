//1 Import
//import DefaultImport, {NamedImport} from 'somelibary'
import React, { useState } from "react";
// import PropTypes from 'prop-types';
import {
  Alert,
  Box,
  Button,
  Grid,
  GridItem,
  TextInput,
  Table,
  Thead,
  Tbody,
  TFooter,
  Tr,
  Td,
  Th,
  BaseCheckbox,
  Typography,
  VisuallyHidden,
  Avatar,
  Flex,
  IconButton,
} from "@strapi/design-system";
import { Pencil, Plus, Trash } from "@strapi/icons";
import { useEffect } from "react";

//2. define areas
function Student() {
  //2.1 Hooks area
  const [name, setName] = useState("");
  const [isDataSaved, setIsDataSaved] = useState(false);
  useEffect(()=>{
    console.log('OK')
  },[]) //After page reload

  //2.2 Function defaiont
  let saveStudentName = async () => {
    console.log(name);
    let payload = {
      name: name,
    };
    console.log("payload", payload);
    const response = await fetch("http://localhost:1337/students/mystudents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const responseData = await response.json();
    console.log(responseData);
    setIsDataSaved(true);
    //alert("Student saved scuccess")
  };

  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: "",
    description: "Chez Léon is a human sized Parisian",
    category: "French cuisine",
    contact: "Leon Lafrite",
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i,
    });
  }
  //2.3 return statement
  return (
    <>
      {isDataSaved === true && (
        <Alert closeLabel="Close alert" title="Title">
          Student Stored successfully
        </Alert>
      )}
      <form>
        <Grid>
          <GridItem col={4}>
            <TextInput
              placeholder=""
              label="Student Name"
              name="student"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </GridItem>
          <GridItem col={8}>
            <Table
              colCount={COL_COUNT}
              rowCount={ROW_COUNT}
            >
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
              
                  <Tr>
                    <Td>
                      aaa
                    </Td>
                    <Td>
                      <Typography textColor="neutral800"></Typography>
                    </Td>
                    <Td>
                      bb
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        cc
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        dd
                      </Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                       ee
                      </Typography>
                    </Td>
                  </Tr>
               
              </Tbody>
            </Table>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem col={3}>
            <Button
              onClick={saveStudentName}
              variant="default"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </GridItem>
        </Grid>
      </form>
    </>
  );
}

//3. Export
export default Student;
