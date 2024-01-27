//1 Import
//import DefaultImport, {NamedImport} from 'somelibary'
import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import { Alert, Button, Grid, GridItem, TextInput } from '@strapi/design-system';

//2. define areas
function Student() {
    //2.1 Hooks area
    const [name, setName] = useState("");
    const [isDataSaved, setIsDataSaved] = useState(false);


    //2.2 Function defaiont
    let saveStudentName = async ()=>{
        console.log(name)
        let payload = {
            "name":name
        }
        console.log('payload',payload)
        const response = await fetch("http://localhost:1337/students/mystudents",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const responseData  = await response.json();
        console.log(responseData);
        setIsDataSaved(true)
        //alert("Student saved scuccess")
    }


    //2.3 return statement
    return (
        <>
            {
                isDataSaved === true &&
                <Alert closeLabel="Close alert" title="Title">
                    Student Stored successfully
                </Alert>
            }
            <form>
                <Grid>
                    <GridItem col={6}>
                        <TextInput 
                        placeholder="" 
                        label="Student Name" 
                        name="student"  
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </GridItem>
                </Grid>
                <Grid>
                    <GridItem col={6}>
                    
                        <Button onClick={saveStudentName} variant="default" style={{marginTop:'20px'}}>Submit</Button>
                    </GridItem>
                </Grid>
        </form>
        </>
    )
}


//3. Export
export default Student;

