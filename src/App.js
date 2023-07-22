import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import './App.css';
function App() {
  return (
    <>
    <Navbar/>
    <div className='d-flex gap-4 justify-content-center pt-5'>
<Cards title="React" src="logo192.png" para="Elit eiusmod consequat adipisicing fugiat eu exercitation consectetur proident consequat voluptate anim."/>
<Cards title="javascript" src="logo192.png" para="Elit eiusmod consequat adipisicing fugiat eu exercitation consectetur proident consequat voluptate anim."/>
<Cards title="Nodejs" src="logo192.png" para="Elit eiusmod consequat adipisicing fugiat eu exercitation consectetur proident consequat voluptate anim."/>
</div>
</>
  );
}

export default App;
