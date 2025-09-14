import { PageSEO } from "@/components/SEO";
import { useState, useContext, useEffect } from "react";
import { Channel } from "phoenix";
import { SocketContext } from "@/components/Phoenix/Socket";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const socket = useContext(SocketContext);
  const [phoenixChannel, setPhoenixChannel] = useState<Channel>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (socket && !phoenixChannel) {
      const channel = socket.channel("contact");

      channel
        .join()
        .receive("ok", () => console.log("joined contact channel"))
        .receive("error", (resp) =>
          console.log("unable to join contact channel", resp)
        );

      setPhoenixChannel(channel);
    }

    return () => {
      if (socket && phoenixChannel) {
        phoenixChannel.leave();
        console.log("left contact channel");
        setPhoenixChannel(null);
      }
    };
  }, [socket, phoenixChannel]);

  function showErrorMessage(message: string) {
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

  function clearForm() {
    setEmail("");
    setMessage("");
  }

  function handleContactError(response: any) {
    if (response.errors) {
      const errors = response.errors;

      if (errors.email) {
        const emailErrors = Array.isArray(errors.email)
          ? errors.email
          : [errors.email];

        emailErrors.forEach((error: string) => {
          if (error.includes("can't be blank")) {
            showErrorMessage("Please enter your email address.");
          } else if (error.includes("invalid")) {
            showErrorMessage("Please enter a valid email address.");
          } else {
            showErrorMessage(`Email error: ${error}`);
          }
        });
      }

      if (errors.message) {
        const messageErrors = Array.isArray(errors.message)
          ? errors.message
          : [errors.message];

        messageErrors.forEach((error: string) => {
          if (error.includes("can't be blank")) {
            showErrorMessage("Please enter a message before submitting.");
          } else {
            showErrorMessage(`Message error: ${error}`);
          }
        });
      }

      // Handle other field errors
      Object.keys(errors).forEach((field) => {
        if (field !== "email" && field !== "message") {
          const fieldErrors = Array.isArray(errors[field])
            ? errors[field]
            : [errors[field]];
          showErrorMessage(`${field}: ${fieldErrors.join(", ")}`);
        }
      });
    } else {
      showErrorMessage("Failed to send message. Please try again.");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      showErrorMessage("Please fill in both email and message fields.");
      return;
    }

    if (!email.includes("@")) {
      showErrorMessage("Please enter a valid email address.");
      return;
    }

    if (message.length > 1000) {
      showErrorMessage(
        "Message is too long. Please keep it under 1000 characters."
      );
      return;
    }

    if (!phoenixChannel) {
      showErrorMessage("Connection not established. Please refresh the page.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    phoenixChannel
      ?.push("new_contact", {
        email: email.trim(),
        message: message.trim(),
      })
      .receive("ok", (response) => {
        clearForm();
        showSuccessMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setIsSubmitting(false);
      })
      .receive("error", (response) => {
        handleContactError(response);
        setIsSubmitting(false);
      })
      .receive("timeout", () => {
        showErrorMessage("Request timed out. Please try again.");
        setIsSubmitting(false);
      });
  }

  return (
    <div>
      <PageSEO title="Contact | Aayush Sahu" description="Contact Me" />

      <div>
        <h1 className={styles.header}>Contact Me</h1>
        <p className={styles.contactDescription}>
          Reach out to me if you wanna have a chat.
        </p>
        <p className={styles.contactWarning}>
          <strong>Warning:</strong> I will respond back!
        </p>
      </div>

      <div className={styles.formContainer}>
        {/* Error/Success Messages */}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
              className={styles.formTextarea}
              rows={4}
              maxLength={1000}
              required
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!email.trim() || !message.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.loadingSpinner}>Sending...</span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
