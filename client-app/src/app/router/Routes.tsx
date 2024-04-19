import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import JobsDashboard from "../../features/jobs/dashboard/JobsDashboard";
import JobForm from "../../features/jobs/form/JobForm";
import JobsDetails from "../../features/jobs/details/JobsDetails";
import LoginForm from "../../features/users/LoginForm";
import Profile from "../../features/users/Profile";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [     
            {
                path: "jobs",
                element: <JobsDashboard />
            },
            {
                path: "createJob",
                element: <JobForm key="create"/>
            },
            {
                path: "jobs/:id",
                element: <JobsDetails />
            },
            {
                path: "manage/:id",
                element: <JobForm key="manage"/>
            },
            {
                path: "login",
                element: <LoginForm />
            },
            {
                path: "profile/:username",
                element: <Profile />

            }
        ]
    }
]

export const router = createBrowserRouter(routes);