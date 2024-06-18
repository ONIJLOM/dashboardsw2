import "./list4.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List4 = () => {
  return (
    <div className="list4">
      <Sidebar/>
      <div className="list4Container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List4