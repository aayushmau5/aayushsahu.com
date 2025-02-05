export default function Blockquote(props) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(45deg, var(--theme-one), var(--theme-two), var(--theme-three), var(--theme-four))",
        padding: "3px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          background: "var(--blockquote-background)",
          color: "var(--blockquote-color)",
          padding: "1rem 0",
          borderRadius: "inherit",
        }}
      >
        <blockquote {...props} />
      </div>
    </div>
  );
}
