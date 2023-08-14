
import { useState } from "react";
import {Link} from 'react-router-dom';

const Header = ({setRefresh}) => {
  const [keterangan, setKeterangan] = useState("");
  const [stok,setStok] = useState("");
  const [judul, setJudul] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
	  const newTodo = {judul, stok, keterangan}

	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			setJudul("")
			setStok("")
			setKeterangan("")
			setRefresh(true)

			setTimeout(() => {
				alert('Data berhasil ditambah')
			}, 500)
        });
  }

  return (

  	<div id="todo-header" className="header">
  	<Link to="/dashboard"> Dashboard</Link>
		  <h2>CRUD React JS</h2>
			<input type="text" 
			value={judul} 
			placeholder="Masukkan Judul" 
			onChange={(e) => setJudul(e.target.value)}/>

			<input type="number" 
			value={stok} 
			min="0"
			placeholder="Masukkan Stok" 
			onChange={(e) => setStok(e.target.value)}/>

			<textarea type="text" 
			value={keterangan} 
			placeholder="Masukkan keterangan" 
			onChange={(e) => setKeterangan(e.target.value)}></textarea>

      	<span className="tomboltambah" onClick={addTodo}>Tambah</span>
	</div>
  );
};

export default Header;