import { useDispatch, useSelector } from "react-redux"
import { addNotification } from "./redux/slices/notificationSlice";


const NotifyGui = ({ status, position, message, id }) => {
  return (
    <div
      className={`fixed ${position} ${status} text-white px-4 py-3 rounded shadow-lg`}
    >
      <p>
        {id} - {message}
      </p>
    </div>
  );
};
function App() {
  const dispatch = useDispatch();


  const notifications = useSelector((state) => state.notifications);
  console.log(notifications);
  const handleInfoButton = () => {
    console.log("Info Button Clicked");
    const Newnotfy = {
      id: new Date().getTime(),
      status: 'info',
      message: 'This is an info notification',
      isOpen: true,
      duration: 3000,
      position: 'top-right',
    }
    dispatch(addNotification(Newnotfy));
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Redux Dispatch Playground</h1>
        <p className="text-lg text-red-700">Welcome to the Redux Dispatch Playground!</p>
        <hr />
        <button onClick={handleInfoButton} className=" hover:cursor-pointer width-1/2 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Info Button
        </button>
      </div>
      <ul>
        {notifications.nofitications.map((notif,index) => (
          <li key={index}>
            <NotifyGui key={notif.id} id={notif.id} status={notif.status} position={notif.position} message={notif.message} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
