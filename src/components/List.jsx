const List = ({ data, selectedId, handlerClick }) => {
  return (
    <ul className="list-group">
        {data.map((user) => (
          <li className={user.id == selectedId ? 'list-group-item item_selected' : 'list-group-item'} key={user.id} onClick={() => { handlerClick(user) }}>
            {user.name}
          </li>
        ))}
      </ul>
  )
}

export default List;