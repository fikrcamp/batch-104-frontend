import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
function MenuItem({ item, add, remove }) {
  return (
    <div className="flex justify-between border border-gray-300">
      <div className="flex flex-col justify-center pl-3">
        <h2 className="font-bold">{item.name}</h2>
        <h2 className="text-sm text-gray-500 py-1">${item.price}</h2>
        <div className="flex items-center space-x-1">
          <MdAddCircleOutline size={25} onClick={() => add(item)} />
          {/* <p className="text-sm">0</p> */}
          <MdRemoveCircleOutline size={25} onClick={() => remove(item)} />
        </div>
      </div>
      <div>
        <img
          src={`http://localhost:8000/${item.image}`}
          alt="food"
          className="h-24 w-32 "
        />
      </div>
    </div>
  );
}

export default MenuItem;
