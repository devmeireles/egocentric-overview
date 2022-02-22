import React from "react";
import {
    Routes as Router,
    Route
} from "react-router-dom";
import Profile from "../views/Profile";
import Home from "../views/Home";
import { RoutesEnum } from "./routesEnum";

export const Routes: React.FC = (): JSX.Element => {
    return (
        <Router>
            <Route
                path={`${RoutesEnum.HOME}`}
                element={
                    <Home />
                }
            />

            <Route path={`${RoutesEnum.PROFILE}`}>
                <Route path=":username" element={<Profile />} />
            </Route>
        </Router>
    )
}
