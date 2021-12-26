interface Element {
  content: string;
  headingId: string;
  type: string;
  children?: Element[];
}

interface Props {
  elements: Element[];
}

const heading = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

export default function ToC({ elements = [] }: Props) {
  const parentElementType = elements[0]?.type;

  return (
    <details
      style={{
        background: "#0a0a0a",
        borderRadius: "0.55rem",
        paddingBottom: "0.04rem",
      }}
    >
      <summary
        style={{
          padding: "1rem 0.7rem",
          borderRadius: "0.55rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "white",
          cursor: "pointer",
        }}
      >
        Table of Contents
      </summary>
      <ul>
        {elements
          .filter((element) => element.type === parentElementType)
          .map((element, index) => (
            <li key={index}>
              <a
                style={{
                  color: "gray",
                }}
                href={`#${element.headingId}`}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                >
                  {heading[element.type]}
                </span>{" "}
                {element.content}
              </a>
            </li>
          ))}
      </ul>
    </details>
  );
}
