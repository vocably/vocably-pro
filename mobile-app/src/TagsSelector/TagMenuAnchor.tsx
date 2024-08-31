import React, { FC, ReactNode } from 'react';

export type TagMenuAnchorRenderProps = {
  openMenu: () => void;
  disabled: boolean;
};

export type TagMenuAnchorProps = TagMenuAnchorRenderProps & {
  renderAnchor: (props: TagMenuAnchorRenderProps) => ReactNode;
};
export const TagMenuAnchor: FC<TagMenuAnchorProps> = ({
  renderAnchor,
  openMenu,
  disabled,
}) => {
  return <>{renderAnchor({ openMenu, disabled })}</>;
};
