import React from "react";
import styled from "styled-components";

const StyledTopBar = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  background-color: var(--color-indigo-100); 
  text-align: center;
  padding: 15px 0;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-500);
`;

function TopBar() {
  return (
    <StyledTopBar>
      <p>
        👋 This project is for demon purpose. Creation, updation, and removal of
        records is deactivated in this version.
      </p>
    </StyledTopBar>
  );
}

export default TopBar;
