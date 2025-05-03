import { Outlet } from "react-router"
import {SidebarComponent} from "@syncfusion/ej2-react-navigations"
import { MobileSlidebar, NavItems } from "../../../components"


export default function AdminLayout() {
  return (
    <div>
  <MobileSlidebar />

  <div className="admin-layout flex">
    <aside className="w-full max-w-[270px] hidden lg:block">
      <SidebarComponent width={270} enableGestures={false}>
        <NavItems />
      </SidebarComponent>
    </aside>

    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
</div>

  )
}
