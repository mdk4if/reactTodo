const Lists = (props) => {
    const itemList = props.items;

    const listItem = itemList.map((item) => (
        <li key={item.Name}>
            <strong>{item.Name}</strong> — {item.calories} kcal / 100g
        </li>
    ));

    return (
        <div>
            <h2 className="listTitle">{props.categoery}</h2>
            <ul className="listItems">
                {listItem}
            </ul>
        </div>
    );
};

export default Lists;