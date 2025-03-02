import { ProfileCard } from "./profileCard";

export function UserCard({userName , userEmail}) {
    return <ProfileCard profileName={userName} profileEmail={userEmail} />
}