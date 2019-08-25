import {Badge, Card} from "antd";
import React from "react";


const UserList = (props) => {
    return (
        <Card style={{height: "600px"}} title="Users" headStyle={{textAlign: "center"}}>
            <ul style={{listStyleType: "none", padding: "0",}}>
                {
                    props.users.map((user, index) => {
                        if (user !== null) return <li style={{listStyleType: "none"}} key={index}><Badge status={(user.isOnline) ? "success" : "default"} text={user.userName} /></li>;
                        else return null;
                    })
                }
            </ul>
        </Card>
    )
};

export default UserList;