export interface Comment {
  id: number;
  text: string;
  children: Comment[];
  showReplyForm: boolean;
  isVisible: boolean;
}
