import React, { useState } from "react";

import * as S from "./styled";

import Icon from "../icon/icon";
import Porcent from "../../icons/percent.svg";
import Minus from "../../icons/minus.svg";
import Plus from "../../icons/plus.svg";
import Equal from "../../icons/equal.svg";

function Calculator() {
  const [number, setNumber] = useState([]);

  function SetNewState(num) {
    let n = num;
    setNumber(n);
    let addNumber = [number, ...n]
    console.log(addNumber)
    setNumber(addNumber)
  }

  return (
    <>
      <S.Wrap>
        <S.WindowResult>
          <S.BeforeRes>20 + 8 + 3 - 2</S.BeforeRes>
          <S.InitialRes>{number}</S.InitialRes>
        </S.WindowResult>
        <S.WrapOptions>
          <S.Option onClick={() => setNumber("")}>c</S.Option>
          <S.Option onClick={() => SetNewState("%")}>
            <Icon icon={Porcent} />
          </S.Option>
          <S.Option onClick={() => SetNewState("/")}>/</S.Option>
          <S.Option onClick={() => SetNewState("x")}>X</S.Option>
          <S.Option onClick={() => SetNewState("7")}>7</S.Option>
          <S.Option onClick={() => SetNewState("8")}>8</S.Option>
          <S.Option onClick={() => SetNewState("9")}>9</S.Option>
          <S.Option onClick={() => SetNewState("-")}>
            <Icon icon={Minus} />
          </S.Option>
          <S.Option onClick={() => SetNewState("4")}>4</S.Option>
          <S.Option onClick={() => SetNewState("5")}>5</S.Option>
          <S.Option onClick={() => SetNewState("6")}>6</S.Option>
          <S.Option onClick={() => SetNewState("+")}>
            <Icon icon={Plus} />
          </S.Option>
          <S.Option onClick={() => SetNewState("1")}>1</S.Option>
          <S.Option onClick={() => SetNewState("2")}>2</S.Option>
          <S.Option onClick={() => SetNewState("3")}>3</S.Option>
          <S.Option onClick={() => SetNewState("0")}>0</S.Option>
          <S.Option onClick={() => SetNewState(".")}>.</S.Option>
          <S.Option onClick={() => SetNewState("")}>ap</S.Option>
          <S.OptionEqual>
            <Icon icon={Equal} />
          </S.OptionEqual>
        </S.WrapOptions>
      </S.Wrap>
    </>
  );
}

export default Calculator;
