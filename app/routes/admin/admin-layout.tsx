import { Outlet } from "react-router"
import {SidebarComponent} from "@syncfusion/ej2-react-navigations"
import { MobileSlidebar, NavItems } from "../../../components"
import { account } from "~/appwrite/client";
import { redirect } from "react-router";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
  try {
    const user = await account.get();
    
    if(!user.$id) return redirect('/sign-in');
    
    const existingUser = await getExistingUser(user.$id);
    
    if(existingUser?.status === 'user') {
      return redirect('/');
    }
    
    return existingUser?.$id ? existingUser : await storeUserData();
  } catch (e) {
    console.log('Error in clientLoader', e)
    return redirect('/sign-in')
  }
}

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
