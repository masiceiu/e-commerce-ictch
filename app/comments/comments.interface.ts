
export interface CommentPayload {
  id: number;
  content: string;
  // + many more
}

export interface CommentUiState {
  hasError: boolean;
  isLoading: boolean;
  editMode: boolean;
}

export interface CommentReply extends CommentPayload {
  uiState: CommentUiState;
}

export interface Comment extends CommentReply {
  replies: CommentReply[],
  uiState: { showReply: boolean } & CommentUiState;
}