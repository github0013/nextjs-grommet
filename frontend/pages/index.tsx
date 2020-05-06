import { Button, grommet, Grommet } from "grommet"
import React from "react"
import ButtonWithStyledLabel from "../src/components/ButtonWithStyledLabel"
import ButtonWithTextLabel from "../src/components/ButtonWithTextLabel"

interface Props {}
const index: React.FC<Props> = (props) => {
  return (
    <Grommet theme={grommet}>
      <Button>button</Button>

      <ButtonWithTextLabel label="TextLabel" />
      {/* this was giving Warning: Prop `className` did not match. */}
      {/* after adding .babelrc + _document.tsx, I didn't see any more of the warning */}
      <ButtonWithStyledLabel label="StyledLabel" />
    </Grommet>
  )
}
export default index
