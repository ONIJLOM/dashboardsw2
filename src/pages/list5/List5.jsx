import "./list5.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List5 = () => {
  return (
    <div className="list5">
      <Sidebar/>
      <div className="list5Container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List5