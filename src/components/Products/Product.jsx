/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Badge from "./Badge";
import BadgeOff from "./BadgeOff";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props._id;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div className="w-full relative group">
      <div className="max-w-full md:max-h-80 relative overflow-y-hidden">
        <div>
          <img className="w-full max-h-80 xl:max-h-full object-cover border-[1px]" src={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="جدید" />}
        </div>
        <div className="w-full h-20 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
            onClick={() =>
              dispatch(
                addToCart({
                  _id: props._id,
                  name: props.productName,
                  quantity: 1,
                  image: props.img,
                  badge: props.badge,
                  price: props.price,
                  colors: props.color,
                })
              )
            }
            className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              اضافه به سبد خرید
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
            onClick={handleProductDetails}
            className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              دیدن جزئیات
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        dir="rtl"
        className="max-w-full max-h-20 md:max-h-24 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4"
      >
        <div className="flex items-center justify-between font-titleFont">
          {props.badgeoff && <BadgeOff text={props.badgeoff} />}
          {props.productName && (
            <h2 className="text-sm text-primeColor font-bold">
              {props.productName}
            </h2>
          )}
          <div>
            <p dir="rtl" className="text-[#767676] text-[14px]">
              {props.price}
              <span className="mr-1">تومان</span>
            </p>
            {props.priceoff && (
              <p className="text-[#c2c2c2] line-through text-[14px]">
                {props.priceoff}
              </p>
            )}
          </div>
        </div>
        <div>
          {props.color && (
            <p className="text-[#767676] text-[14px]">{props.color}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
