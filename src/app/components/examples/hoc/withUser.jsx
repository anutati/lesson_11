import React from "react";
import CardWrapper from "../../common/Card";

const withUser = (SimpleComponent) => (props) => {
    const handleLogIn = () => {
        localStorage.setItem("user", "name");
    };
    const handleLogOut = () => {
        localStorage.removeItem("user");
    };
    const isAuth = localStorage.getItem("user");
    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withUser;
