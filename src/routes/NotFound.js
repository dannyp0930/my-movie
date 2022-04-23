import NotFoundImage from "../assets/images/NotFound.png"

function NotFound () {
  return (
    <div
      style={{
        marginTop: "10rem",
        textAlign: "center",
      }}
    >
      <img
        src={NotFoundImage}
        alt="NotFound"
        style={{
          width: "50%",
        }}
      />
    </div>
  )
}

export default NotFound;