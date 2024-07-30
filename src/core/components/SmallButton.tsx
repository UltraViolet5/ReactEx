import { ButtonProps, Button } from "primereact/button";

type SmallButtonProps = {
  /**
   * Make is POP!
   */
  primary?: boolean;
};

type Props = ButtonProps & SmallButtonProps;

export const SmallButton = ({ primary, ...restProps }: Props) => {
  return primary ? (
    <Button size="small" severity="contrast" {...restProps} />
  ) : (
    <Button size="small" {...restProps} />
  );
};
