import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {


    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                <img src="logo2.jpg" alt="logo" style={{ marginRight: "10px" }} />
                ProiectII
                </Menu.Item>
                <Menu.Item name="Jobs" />
                <Menu.Item>
                    <Button onClick={openForm} positive content="Add Job" />
                </Menu.Item>
            </Container>
        </Menu>
    )


}