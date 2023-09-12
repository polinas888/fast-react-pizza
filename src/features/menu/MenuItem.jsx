/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getPizzaQuantity } from "../cart/CartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector(getPizzaQuantity(id));

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex-grow flex-col justify-between pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="max-w-sm text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          <div className="flex items-center">
            <div className="mr-2">
              {!soldOut && pizzaQuantity !== 0 && (
                <UpdateItemQuantity pizzaId={id} />
              )}
            </div>
            {pizzaQuantity > 0 && <DeleteItem pizzaId={id} />}
            {!soldOut && pizzaQuantity === 0 && (
              <Button
                type="small"
                onClick={() => {
                  dispatch(
                    addItem({
                      pizzaId: id,
                      name,
                      quantity: 1,
                      unitPrice,
                      totalPrice: unitPrice,
                    }),
                  );
                }}
              >
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
