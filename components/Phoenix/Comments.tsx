import { Channel } from "phoenix";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./Socket";
import styles from "./style.module.css";
import { formatDistanceToNow } from "date-fns";

function formatCommentDate(dateString: string): string {
  const date = new Date(dateString + "Z");
  return formatDistanceToNow(date, { addSuffix: true });
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  function showErrorMessage(message: string, type: string = "error") {
    setErrorMessage(message);
    setSuccessMessage(null);
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }

  function showSuccessMessage(message: string) {
    setSuccessMessage(message);
    setErrorMessage(null);
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  }

  function clearCommentForm() {
    setComment("");
    setAuthor("");
  }

  function handleCommentError(response: any) {
    if (response.errors) {
      const errors = response.errors;

      if (errors.content) {
        const contentErrors = Array.isArray(errors.content)
          ? errors.content
          : [errors.content];

        contentErrors.forEach((error: string) => {
          if (error.includes("inappropriate language")) {
            showErrorMessage(
              "🚫 Your comment contains inappropriate language. Please revise and try again.",
            );
          } else if (error.includes("can't be blank")) {
            showErrorMessage("Please enter a comment before submitting.");
          } else {
            showErrorMessage(`Content error: ${error}`);
          }
        });
      }

      if (errors.blog_slug) {
        showErrorMessage("Invalid blog reference. Please refresh the page.");
      }

      // Handle other field errors
      Object.keys(errors).forEach((field) => {
        if (field !== "content") {
          const fieldErrors = Array.isArray(errors[field])
            ? errors[field]
            : [errors[field]];
          showErrorMessage(`${field}: ${fieldErrors.join(", ")}`);
        }
      });
    } else {
      showErrorMessage("Failed to post comment. Please try again.");
    }
  }

  function sendComment() {
    if (!comment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const eventName = parentId === null ? "new_comment" : "new_reply";

    channel
      ?.push(eventName, {
        author: author.trim() || "Anonymous",
        content: comment.trim(),
        parent_id: parentId,
      })
      .receive("ok", (response) => {
        clearCommentForm();
        showSuccessMessage("Comment posted successfully!");
        if (parentId !== null) {
          setIsExpanded(false);
        }
        setIsSubmitting(false);
      })
      .receive("error", (response) => {
        handleCommentError(response);
        setIsSubmitting(false);
      })
      .receive("timeout", () => {
        showErrorMessage("Request timed out. Please try again.");
        setIsSubmitting(false);
      });
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
      {/* Error/Success Messages */}
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={isSubmitting}
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
          disabled={isSubmitting}
          className={`${styles.commentInput} ${styles.commentInputText}`}
          rows={3}
        />
      </div>
      <div className={styles.buttonGroup}>
        {parentId !== null && (
          <button
            onClick={() => setIsExpanded(false)}
            className={styles.cancelButton}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        )}
        <button
          onClick={sendComment}
          className={styles.sendButton}
          disabled={!comment.trim() || isSubmitting}
        >
          {isSubmitting ? (
            <span className={styles.loadingSpinner}>
              {parentId === null ? "Sending..." : "Replying..."}
            </span>
          ) : parentId === null ? (
            "Send"
          ) : (
            "Reply"
          )}
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
          {formatCommentDate(comment.inserted_at)}
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
                  {formatCommentDate(reply.inserted_at)}
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
