import "./list3.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable3/Datatable3"

const List3 = () => {
  return (
    <div className="list3">
      <Sidebar/>
      <div className="list3Container">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List3