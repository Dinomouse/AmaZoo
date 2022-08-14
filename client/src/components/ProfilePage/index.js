function ProfilePage({ user }) {
  return <div>{`Welcome Back, ${user.name.split(" ")[0]}`} </div>;
}

export default ProfilePage;
