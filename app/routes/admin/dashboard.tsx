import { Header, StatsCard, TripCard } from "../../../components";


const Dashboard = () => {
  const user = { name : "John Doe"};
  const dashboardStats = {
    totalUsers: 11540,
    usersJoined:{ currentMonth: 200, previousMonth: 150 },
    totalTrips: 2000,
    tripsCreated: { currentMonth: 100, previousMonth: 80 },
    userRole: {total:77, currentMonth: 25, lastMonth: 15},
  }
  const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
         title={`Welcome ${user?.name ?? "Guest"}👋 `}
         description ="Track activity ,trends and popular destinations in real time"
      />
      <section className=" flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard 
            headerTitle="Total Users"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.previousMonth}
          />    
          <StatsCard 
            headerTitle="Total Trips"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.previousMonth}
          />
          <StatsCard 
            headerTitle="Active Users Today"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        

  </div>
</section>

      
      <TripCard/>
     
    </main>
    
  )
}
export default Dashboard;