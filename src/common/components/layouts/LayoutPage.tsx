import React from "react";

interface Props{
  children: React.ReactNode
}
export const LayoutPage: React.FunctionComponent<Props> = ({children}) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}