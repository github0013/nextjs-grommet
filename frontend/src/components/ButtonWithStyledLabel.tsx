import { Button, Text } from "grommet"
import styled from "styled-components"

const StyledLabel = styled(Text)`
  transform: scale3d(2, 2, 2);
  color: red;
`

const ButtonComponent = ({ label, ...rest }) => {
  return (
    <Button size="small" label={<StyledLabel>{label}</StyledLabel>} {...rest} />
  )
}

export default ButtonComponent
