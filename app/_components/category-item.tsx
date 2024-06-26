import { Category } from "@prisma/client";
import Image from "next/image";

// criar uma inteface para tipar minhas props
interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 bg-white px-4 py-3">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
