// styles.js or inside your component file
export const hoverStyle = (isHovered) => ({
  border: `2px solid ${isHovered ? "#60a5fa" : "transparent"}`,
  transition: "border-color 0.3s ease",
  borderRadius: "8px",
  padding: "1rem",
  width: "200px",
  textAlign: "center",
});
