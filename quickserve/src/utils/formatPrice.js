export const formatCategoryName = (name) => {
    return name.replace(/[^a-zA-Z0-9]/g, ""); // Remove spaces, &, etc.
  };