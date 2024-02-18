
function ProfilePicture() {
  const imageUrl = "./src/assets/react.svg";

  const handleClick = (e) => e.target.style.display = "none";

  return(
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
  );
}

export default ProfilePicture