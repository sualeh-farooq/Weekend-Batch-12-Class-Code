import UserCard from "./user";

export default function DashboardCard({name , email}){
    return (
        <>
        <UserCard userName={name} userEmail={email} />
        </>
    )
}