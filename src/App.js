// import Header from "./components/Header";
// import TodoList from "./components/TodoList";

// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <Header />
//         <TodoList />
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Header from "./test/Header.js";
import TodoList from "./test/TodoList";
// import Header from "./components/Header";
// import TodoList from "./components/TodoList";

function App() {

  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="App">
      <div className="content">
        <Header setRefresh={setRefresh} />
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
}

export default App;