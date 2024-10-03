
export const TodoItem = ({todo}) => {
    const {id, description, done} = todo;
  return (
    <>
        <li className='list-group-item d-flex justify-content-between'>
            <span className='align-self-enter'>{description}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    </>
  )
}
