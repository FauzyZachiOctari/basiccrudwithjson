const TodoItem = ({ todo, setRefresh }) => {

const updateTodo = () => {

};

const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      setTimeout(() => {
				alert('Data berhasil dihapus')
			}, 500)
      setRefresh(true)
    });
  };

    return ( 
    	<li className="ikan">
    		<div>{todo.judul}</div>
    		<div>{todo.stok}</div>
    		<div className="ket">{todo.keterangan}</div>
    		<div><button class="tutup" onClick={updateTodo}>Edit</button><button class="tutup" onClick={deleteTodo}>Hapus</button></div>
    	</li>
    );

};
 
export default TodoItem;

