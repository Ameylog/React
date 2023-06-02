import React from 'react';

function ButtonClickPrintDataIntoTable() {
    const userObj = {
        firstName: '',
        lastName: ''
    };

    const [user, setUser] = React.useState(userObj);
    const [userList, setUserList] = React.useState([]);

    const handleInput = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleClick = () => {
        setUserList([...userList, user]);
        setUser(userObj);
    };

    return (
        <div>
            <center>
                First Name:- <input type="text" name='firstName' value={user.firstName} onChange={handleInput} /><br /><br />
                Last Name:- <input type="text" name='lastName' value={user.lastName} onChange={handleInput} /><br /><br />

                <button onClick={handleClick}>Add to Table</button><br /><br />
                <Childfun userList={userList} />

            </center>
        </div>
    );
}

function Childfun({ userList }) {
    return (

        <div>

            <table style={{ border: '1px solid black' }}>

                <thead >
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default ButtonClickPrintDataIntoTable;