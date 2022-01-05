import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (SimpleComponent) => (props) => {
    const isLogin = localStorage.getItem("user");
    return (
        <>
            {isLogin ? (
                <SimpleComponent {...props} />
            ) : (
                <SmallTitle> Auth </SmallTitle>
            )}{" "}
        </>
    );
};

export default withLogin;
