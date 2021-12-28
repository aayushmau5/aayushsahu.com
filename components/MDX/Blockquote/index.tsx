export default function Blockquote(props) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(45deg, #21daa2, #43dce5, #36c3ef, #4a5ae9)",
        padding: "3px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          background: "#0a0a0a",
          color: "white",
          padding: "1rem 0",
          borderRadius: "inherit",
        }}
      >
        <blockquote {...props} />
      </div>
    </div>
  );
}
