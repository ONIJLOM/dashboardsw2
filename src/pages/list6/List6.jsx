import "./list6.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable2 from "../../components/datatable2/Datatable2"

const List6 = () => {
  return (
    <div className="list6">
      <Sidebar/>
      <div className="list6Container">
        <Navbar/>
        <Datatable2/>
      </div>
    </div>
  )
}

export default List6