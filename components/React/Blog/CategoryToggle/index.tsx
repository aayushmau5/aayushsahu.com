import styles from "./style.module.css";

export type BlogCategory = "tech" | "life-opinions-misc";

interface CategoryToggleProps {
  activeCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
}

export default function CategoryToggle({
  activeCategory,
  onCategoryChange,
}: CategoryToggleProps) {
  const categories: { value: BlogCategory; label: string }[] = [
    { value: "tech", label: "Tech" },
    { value: "life-opinions-misc", label: "Life/Opinions/Misc" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.toggleGroup}>
        {categories.map((category) => (
          <button
            key={category.value}
            className={`${styles.toggleButton} ${
              activeCategory === category.value ? styles.active : ""
            }`}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
