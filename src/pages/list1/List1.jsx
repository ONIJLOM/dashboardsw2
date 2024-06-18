import "./list1.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List1 = () => {
  return (
    <div className="list1">
      <Sidebar/>
      <div className="list1Container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List1