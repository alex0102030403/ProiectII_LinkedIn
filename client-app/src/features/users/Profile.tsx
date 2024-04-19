import React, { useEffect } from 'react';
import UserStore from '../../app/stores/userStore';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { all } from 'axios';
import UserDetails from './UserDetails';
import { User } from '../../app/models/user';
import { Card, Grid, Header, Icon } from 'semantic-ui-react';



export default observer(function Profile(){

    const {userStore: {user,logout,getUsers,allUsers,getUserDetails,userDetails}} = useStore();

    const {companyStore: {CompanyList}} = useStore();

    const [companyEmployees, setCompanyEmployees] = React.useState<User[] | null>(null);
    
    const userData = user;

    const [CompanyListOfCurrentUser, setCompanyListOfCurrentUser] = React.useState([] as any);
    

    useEffect(() => {
        console.log(userData);
        const Company = CompanyList.filter((company) => 
            company.employees.some((employee) => employee.appUserId === user?.id));
        setCompanyListOfCurrentUser(Company);
    }, []);

    
    return (
        <Grid centered>
            <Grid.Column width={10}>
                <Header as='h1' content='Profile' />
                
            <Card.Group> 
            
            {CompanyListOfCurrentUser.map((company: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; employees: User[]; }) => (
                
                <Card key={company.id}>
                    <Icon name='user' circular/>
                    <Card.Content>
                        <Card.Header>{company.name}</Card.Header>
                        
                        <Card.Meta>{<UserDetails users={company.employees}/>}</Card.Meta>
                        

                    </Card.Content>    
                </Card>
            ))}
            </Card.Group>
            </Grid.Column>
        </Grid>
    );

})


