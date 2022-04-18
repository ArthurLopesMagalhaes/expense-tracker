import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: darkblue;
  height: 150px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  color: #fff;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 980px;
  margin-bottom: 50px;
`;
