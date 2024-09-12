import React from "react";

interface ContainerProps {
    hasMargin?: boolean;
    classes?: string;
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
    return <div className={`container z-10 ${classes}`}>{children}</div>;
};

export default Container;
