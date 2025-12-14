import { useUser } from '../hooks/getUser'
import ProfileCard from './ProfileCard';

function UserCall() {
    const {user,loading,error} = useUser();
    console.log(user);

    if(loading) return <p>Loding...</p>;
    if(error) return <p>Error in fatching user {error}</p>
    console.log("User Call",user);
    
    
  return (
    <div className=''>
    <ProfileCard user={user} />
      {/* <img src={user.picture.large} />
     <p>FullName : {user.name.title} {user.name.first} {user.name.last}</p>
     <p>Email: {user.email}</p> */}
    </div>
  )
}

export default UserCall
