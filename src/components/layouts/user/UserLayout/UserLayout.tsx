import type { ReactElement } from "react";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const UserLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};
