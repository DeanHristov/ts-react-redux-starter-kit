import React, { FunctionComponent } from 'react';

interface IHeaderContainerProps {
  title: string;
}

const HeaderContainer: FunctionComponent<IHeaderContainerProps> = ({ title }) => {
  return (
    <div className={"header-component"}>{title}</div>
  );
}

export default HeaderContainer;
