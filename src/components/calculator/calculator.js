import React from "react";

import * as S from "./styled";

import Icon from "../icon/icon";
import Porcent from "../../icons/percent.svg";
import Minus from "../../icons/minus.svg";
import Plus from "../../icons/plus.svg";
import Equal from "../../icons/equal.svg";

function Calculator() {
  return (
    <>
      <S.Wrap>
        <S.WindowResult>
          <S.BeforeRes>
            20 + 8 + 3 - 2
          </S.BeforeRes>
          <S.InitialRes>
            20
          </S.InitialRes>
        
        </S.WindowResult>
        <S.WrapOptions>
          <S.Option>c</S.Option>
          <S.Option>
            <Icon icon={Porcent} />
          </S.Option>
          <S.Option>/</S.Option>
          <S.Option>X</S.Option>
          <S.Option>7</S.Option>
          <S.Option>8</S.Option>
          <S.Option>9</S.Option>
          <S.Option><Icon icon={Minus} /></S.Option>
          <S.Option>4</S.Option>
          <S.Option>5</S.Option>
          <S.Option>6</S.Option>
          <S.Option><Icon icon={Plus} /></S.Option>
          <S.Option>1</S.Option>
          <S.Option>2</S.Option>
          <S.Option>3</S.Option>
          <S.Option>0</S.Option>
          <S.Option>.</S.Option>
          <S.Option>ap</S.Option>
          <S.OptionEqual><Icon icon={Equal} /></S.OptionEqual>
        </S.WrapOptions>
      </S.Wrap>
    </>
  );
}

export default Calculator;
