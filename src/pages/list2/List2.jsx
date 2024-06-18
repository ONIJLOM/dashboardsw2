import "./list2.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List2 = () => {
  return (
    <div className="list2">
      <Sidebar/>
      <div className="list2Container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List2