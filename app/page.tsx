import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="mx-6 py-5">
      <>
        <Header />
        <div className="px-5 pt-6">
          <Search />
        </div>
        <CategoryList />
      </>
    </div>
  );
}
