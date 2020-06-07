import React from "react";
import Svg from "react-inlinesvg";

import styled from "@emotion/styled";

const Wrap = styled(Svg)`
  width: 12px;
  height: auto;
  fill:#eaebed;
`;

function Icon({ icon }) {
  return <Wrap src={icon} />;
}

export default Icon;
