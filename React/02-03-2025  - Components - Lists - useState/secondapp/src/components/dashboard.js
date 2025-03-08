import { UserCard } from "./userCard";

export function DashboardCard({name , email}) {

    return <UserCard userName={name} userEmail={email}  />
}