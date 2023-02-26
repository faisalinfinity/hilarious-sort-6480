import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../constants/apiConstants";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function AdminTableUser() {
  const [user, setUser] = useState([]);

  const handleGetUser = () => {
    axios
      .get(`${BASE_URL}/users`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  console.log("user", user);
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>User ID</Th>
              <Th>User Name</Th>
              <Th>User Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {user?.map((el,index)=>(
                <Tr>
                <Td>{index+1}</Td>
                <Td>{el.id}</Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
              </Tr>
            ))}
          </Tbody>
         
        </Table>
      </TableContainer>
    </div>
  );
}
export default AdminTableUser;
