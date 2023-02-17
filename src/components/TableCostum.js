import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExperience, removeEducation } from "../redux/store";
import DeleteIcon from "@mui/icons-material/Delete";

function TableCostum({ type, edit }) {
  const userInfo = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const Education = () => {
    return (
      <div>
        <Typography
          component="h2"
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          Education
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>School Or University</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userInfo?.education?.map((e) => (
              <TableRow key={e.title}>
                <TableCell>{e.title}</TableCell>
                <TableCell>{e.univ}</TableCell>
                <TableCell>{e.start}</TableCell>
                <TableCell>{e.end}</TableCell>
                <TableCell>
                  {edit && (
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => dispatch(removeEducation(e.title))}
                      >
                        <DeleteIcon fontSize="small" sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  const Experience = () => {
    return (
      <div>
        <Typography
          component="h2"
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          Work Experience
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userInfo?.experiences?.map((e) => (
              <TableRow key={e.title}>
                <TableCell>{e.title}</TableCell>
                <TableCell>{e.company}</TableCell>
                <TableCell>{e.start}</TableCell>
                <TableCell>{e.end}</TableCell>
                <TableCell>
                  {edit && (
                    <Tooltip title="Delete">
                      <IconButton
                        onClick={() => dispatch(removeExperience(e.title))}
                      >
                        <DeleteIcon fontSize="small" sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return <div>{type === "education" ? <Education /> : <Experience />}</div>;
}

export default TableCostum;
