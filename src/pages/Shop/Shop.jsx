import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ShopSideNav from "../../components/shop/ShopSideNav";

const Shop = () => {

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full">
        </div>
      </div>
    </div>
  );
};

export default Shop;
