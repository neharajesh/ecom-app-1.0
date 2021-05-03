import { useCategory } from "../../context/categories-context";

export const Categories = () => {
  console.log("before usecategory");
  const { categories } = useCategory();

  console.log(categories);

  return (
    <div>
      {categories.map((category) => (
        <div>{category.name}</div>
      ))}
    </div>
  );
};
