import { useDispatch, useSelector } from "react-redux"
import { addNotification } from "./redux/slices/notificationSlice";


const NotifyGui = ({ status, message, id }) => {
  return (
    <div
      className={`fixed top-4 right-4 ${status} text-white px-4 py-3 rounded shadow-lg`}
    >
      <p className="text-sm   ">
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
    const Newnotfy = {
      id: new Date().getTime(),
      status: 'bg-blue-500',
      message: 'This is an  notification',
      isOpen: true,
      duration: 3000,
      position: 'top-4 right-4',
    };
    dispatch(addNotification(Newnotfy));
  }
  //success button handler
  const handleSuccessButton = () => {
    const Newnotfy = {
      id: new Date().getTime(),
      status: 'bg-green-500',
      message: 'This is an success notification',
      isOpen: true,
      duration: 3000,
      position: 'top-4 right-4',
    };
    dispatch(addNotification(Newnotfy));
  }
  //warning button handler
    const handleWarningButton = () => {
    const Newnotfy = {
      id: new Date().getTime(),
      status: 'bg-yellow-500',
      message: 'This is an warning notification',
      isOpen: true,
      duration: 3000,
      position: 'top-4 right-4',
    };
    dispatch(addNotification(Newnotfy));
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Redux Dispatch Playground</h1>
        <p className="text-lg text-red-700">Welcome to the Redux Dispatch Playground!</p>
        <hr />
        <button onClick={handleInfoButton} className="hover:cursor-pointer w-1/2 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Info Button
        </button>
        <button onClick={handleSuccessButton} className="hover:cursor-pointer w-1/2 mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Success Button
        </button>
        <button onClick={handleWarningButton} className="hover:cursor-pointer w-1/2 mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Warning Button
        </button>
      </div>
      <div>
        {notifications.nofitications[notifications.nofitications.length - 1] && (
          <NotifyGui
            id={notifications.nofitications[notifications.nofitications.length - 1].id    }
            status={notifications.nofitications[notifications.nofitications.length - 1].status}
            message={notifications.nofitications[notifications.nofitications.length - 1].message}
          />
        )}  
      </div>
    </>
  )
}

export default App
