import { Channel } from "phoenix";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./Socket";
import styles from "./style.module.css";
import { formatDistanceToNow, parseISO } from "date-fns";

type Comment = {
  id: number;
  author: string;
  content: string;
  updated_at: string;
  inserted_at: string;
  blog_slug: string;
  parent_id: number | null;
  replies: Comment[];
};

type Props = {
  slug: string;
};

export default function Comments({ slug }: Props) {
  const socket = useContext(SocketContext);
  const [phoenixChannel, setPhoenixChannel] = useState<Channel>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const roomId = `comments:${slug}`;

  useEffect(() => {
    if (socket && !phoenixChannel) {
      const channel = socket.channel(roomId);

      channel
        .join()
        .receive("ok", () => console.log("joined comments channel"))
        .receive("error", (resp) => console.log("unable to join", resp));

      channel.on("comments_loaded", (response) => {
        setComments(response.comments);
      });

      channel.on("new_comment", (comment) => {
        setComments((prev) => [...prev, comment]);
      });

      setPhoenixChannel(channel);
    }

    return () => {
      if (socket && phoenixChannel) {
        phoenixChannel.leave();
        console.log("left comments channel");
        setPhoenixChannel(null);
      }
    };
  }, [socket, roomId, phoenixChannel]);

  const topLevelComments = comments.filter(
    (comment) => comment.parent_id === null,
  );

  return (
    <div className={styles.commentsContainer}>
      <h2 className={styles.repliesTitle}>
        <span className={styles.highlight}>Comments</span>
      </h2>
      <CommentInput channel={phoenixChannel} parentId={null} />
      <CommentWindow comments={topLevelComments} channel={phoenixChannel} />
    </div>
  );
}

function CommentInput({
  channel,
  parentId,
}: {
  channel: Channel;
  parentId: number | null;
}) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(parentId === null);

  function sendComment() {
    if (!comment.trim()) return;

    channel?.push("new_reply", {
      author: author.trim() || "Anonymous",
      content: comment.trim(),
      parent_id: parentId,
    });

    setComment("");
    if (parentId !== null) {
      setIsExpanded(false);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      sendComment();
    }
  }

  if (parentId !== null && !isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className={styles.replyButton}
      >
        Reply
      </button>
    );
  }

  return (
    <div className={styles.commentInputContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={`${styles.commentInput} ${styles.commentInputAuthor}`}
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          placeholder={
            parentId === null ? "Write a comment..." : "Write a reply..."
          }
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`${styles.commentInput} ${styles.commentInputText}`}
          rows={3}
        />
      </div>
      <div className={styles.buttonGroup}>
        {parentId !== null && (
          <button
            onClick={() => setIsExpanded(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        )}
        <button
          onClick={sendComment}
          className={styles.sendButton}
          disabled={!comment.trim()}
        >
          {parentId === null ? "Send" : "Reply"}
        </button>
      </div>
    </div>
  );
}

function CommentWindow({
  comments,
  channel,
}: {
  comments: Comment[];
  channel: Channel;
}) {
  return (
    <div className={styles.commentWindow}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} channel={channel} />
      ))}
    </div>
  );
}

function CommentItem({
  comment,
  channel,
}: {
  comment: Comment;
  channel: Channel;
}) {
  const [showReplies, setShowReplies] = useState(true);
  const hasReplies = comment.replies && comment.replies.length > 0;

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentHeader}>
        <span className={styles.commentAuthor}>{comment.author}</span>
        <span className={styles.commentDate}>
          {formatDistanceToNow(parseISO(comment.inserted_at), {
            addSuffix: true,
          })}
        </span>
      </div>

      <div className={styles.commentContent}>{comment.content}</div>

      <div className={styles.commentActions}>
        {hasReplies && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className={styles.toggleRepliesButton}
          >
            {showReplies ? "Hide" : "Show"} {comment.replies.length}{" "}
            {comment.replies.length === 1 ? "reply" : "replies"}
          </button>
        )}
      </div>

      {hasReplies && showReplies && (
        <div className={styles.repliesContainer}>
          {comment.replies.map((reply) => (
            <div key={reply.id} className={styles.replyItem}>
              <div className={styles.commentHeader}>
                <span className={styles.commentAuthor}>{reply.author}</span>
                <span className={styles.commentDate}>
                  {formatDistanceToNow(parseISO(reply.inserted_at), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div className={styles.commentContent}>{reply.content}</div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.noRepliesContainer}>
        <CommentInput channel={channel} parentId={comment.id} />
      </div>
    </div>
  );
}
