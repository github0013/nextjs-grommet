import { Button, Text } from "grommet"

const ButtonComponent = ({ label, ...rest }) => {
  return <Button size="small" label={<Text>{label}</Text>} {...rest} />
}

export default ButtonComponent
