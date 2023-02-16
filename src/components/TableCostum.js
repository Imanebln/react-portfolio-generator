import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

function TableCostum({type, education, experiences}) {

    const userInfo = useSelector((state) => state.user);

    const Education = () => {
        return (
            <div>
                <Typography
                component="h2" 
                variant="h6"
                color="textSecondary" 
                gutterBottom
                >Education</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>School Or University</TableCell>
                            <TableCell>From</TableCell>
                            <TableCell>To</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userInfo?.education?.map((e) => (
                        <TableRow key={e.title}>
                            <TableCell>{e.title}</TableCell>
                            <TableCell>{e.univ}</TableCell>
                            <TableCell>{e.start}</TableCell>
                            <TableCell>{e.end}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    };

    const Experience = () => {
        return (
            <div>
                <Typography
                component="h2" 
                variant="h6"
                color="textSecondary" 
                gutterBottom
                >Work Experience</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>From</TableCell>
                            <TableCell>To</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {userInfo?.experiences?.map((e) => (
                        <TableRow key={e.title}>
                            <TableCell>{e.title}</TableCell>
                            <TableCell>{e.company}</TableCell>
                            <TableCell>{e.start}</TableCell>
                            <TableCell>{e.end}</TableCell>
                        </TableRow>
                    ))}    
                    </TableBody>
                </Table>
            </div>
        )
    };


  return (
    <div>
       {type === 'education' ? <Education /> : <Experience />}
    </div>
  )
}

export default TableCostum