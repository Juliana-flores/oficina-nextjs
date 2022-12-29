import styled from "styled-components";

export const CapaWrapper = styled.div`
  width: 100%;
  background-color: #ffa500;
  height: 93vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-style: normal;
  text-transform: uppercase;
  font-family: sans-serif;
`;

CapaWrapper.Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
`;

CapaWrapper.Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
  font-weight: 300;
  line-height: 58px;
`;
