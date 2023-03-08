// import options from "./utils/Option";

import { Route, Routes } from "react-router-dom";
import News from "./components/news";
import MainLayout from "./Layout/MainLayout";
import SearchLayout from "./Layout/SearchLayout";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/news' element={<News />} />
        <Route path='/' element={<MainLayout />} />
        <Route path='/search' element={<SearchLayout />} />
      </Routes>
    </div>
  );
}

export default App;
