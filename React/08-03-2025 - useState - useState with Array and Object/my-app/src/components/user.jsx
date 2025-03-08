import ProfileCard from "./profile";

export default function UserCard({userName , userEmail}){
    return (
        <>
        <ProfileCard profileEmail={userEmail} profileName={userName} />
        </>
    )
}