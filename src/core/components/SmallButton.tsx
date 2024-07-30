import { ButtonProps, Button } from "primereact/button";

type SmallButtonProps = ButtonProps & {
  /**
   * Make is POP!
   */
  primary?: boolean;
};

export const SmallButton = (props: SmallButtonProps) => {
  return props.primary ? (
    <Button size="small" severity="contrast" {...props} />
  ) : (
    <Button size="small" {...props} />
  );
};
