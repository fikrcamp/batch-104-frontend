import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
function MenuItem() {
  return (
    <div className="flex justify-between border border-gray-300">
      <div className="flex flex-col justify-center pl-3">
        <h2 className="font-bold">Mexican Pizza</h2>
        <h2 className="text-sm text-gray-500 py-1">$12.4</h2>
        <div className="flex items-center space-x-1">
          <MdAddCircleOutline size={25} />
          <p className="text-sm">0</p>
          <MdRemoveCircleOutline size={25} />
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
          alt="food"
          className="h-24 w-32 "
        />
      </div>
    </div>
  );
}

export default MenuItem;
