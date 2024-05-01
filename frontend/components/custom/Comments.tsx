"use client";

import { CommentSection } from "replyke";
import { CommentSectionContainerProps } from "replyke/dist/src/components/CommentSectionContainer";

export function Comments(props: CommentSectionContainerProps) {
  return (
    <>
      <CommentSection
        apiBaseUrl={props.apiBaseUrl}
        callbacks={props.callbacks}
        articleId={props.articleId}
      />
    </>
  );
}
