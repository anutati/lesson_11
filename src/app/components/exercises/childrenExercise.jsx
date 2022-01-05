import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
            <Divider />

            <ChildrenList>
                <ComponentWithId />
                <ComponentWithId />
                <ComponentWithId />
            </ChildrenList>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

const ChildrenList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            id: child.key
        })
    );
};

ChildrenList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ComponentWithId = ({ id }) => {
    return <div>{id} Компонент списка</div>;
};
ComponentWithId.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
