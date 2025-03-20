import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Sample(xyz) {
    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch('https://67d7ed389d5e3a10152c9db5.mockapi.io/user/Details', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            // setdata(tasks)             // For the Straight Data 
            setdata(tasks.reverse())     // For the Reverse Data 
            // Do something with the list of tasks
        }).catch(error => {
            console.log(data)
            // handle error
        })
    }, [xyz.value]);

    const deleteUser = (id) => {

        fetch(`https://67d7ed389d5e3a10152c9db5.mockapi.io/user/Details/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            alert("Deleted Successfully...!");
            xyz.avalue(!xyz.value);
            // Do something with deleted task
        }).catch(error => {
            // handle error
        })
    }

    return (
        <>
            <Button variant={"warning"} className="border-0 fs-5 mb-4" onClick={() => xyz.editClick()}> Add Data </Button>
            <Table striped bordered hover variant="dark text-center fs-5">
                <thead>
                    <tr>
                        <th className="p-4 bg-secondary">S.No.</th>
                        <th className="p-4 bg-secondary">Name</th>
                        <th className="p-4 bg-secondary">Email</th>
                        <th className="p-4 bg-secondary">Phone</th>
                        <th className="p-4 bg-secondary">Location</th>
                        <th className="p-4 bg-secondary">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((i, j, k) => {
                        return (
                            <>
                                <tr>
                                    <td className="p-4">{j + 1}</td>
                                    <td className="p-4">{i.Name}</td>
                                    <td className="p-4">{i.Email}</td>
                                    <td className="p-4">{i.Phone}</td>
                                    <td className="p-4">{i.Location}</td>
                                    <td className="p-4">
                                        <Button className="bg-success border-0 ps-4 pe-4 me-2" onClick={() => xyz.editClick(i)}> Edit </Button>
                                        <Button className="bg-danger border-0 ps-4 pe-4 ms-2" onClick={() => deleteUser(i.id)}> Delete </Button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default Sample;