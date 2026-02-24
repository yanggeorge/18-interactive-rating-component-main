declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.VFC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export const ReactComponent;
  export default ReactComponent;
}
