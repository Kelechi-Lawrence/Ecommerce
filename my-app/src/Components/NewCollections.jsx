import "../css/newCollections.css";
import Item from "../Components/Items";
import collections from "../Components/new-collection";
function NewCollections() {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.name}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default NewCollections;
