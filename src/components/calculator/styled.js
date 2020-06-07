import styled from "@emotion/styled";

export const Wrap = styled.div`
  background:  #181818;
  width: 300px;
  padding: 5px;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 20px;
`;

export const WindowResult = styled.div`
  padding: 10px;
  color: #eaebed;
  text-align: right;
  height: 100px;
`;

export const InitialRes = styled.div`
font-size: 3rem;

`;

export const BeforeRes = styled.div`
height: 50px;
font-size: 1rem;
`;


export const WrapOptions = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    padding: 2px;
`;

export const Option = styled.div`
    border: 0;
    font-size: 1rem;
    text-align: center;
    padding:30px;
    border-radius: 5px;
   background: #333333;
    margin-top: 5px;
    color: #eaebed;
    width:10px;
    height: 20px;
    &:hover{
        background:#161616;
    }
    cursor: pointer;
`;

export const OptionEqual = styled(Option)`
    width: 85px;
`;