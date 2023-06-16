import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageDonasi from "./pages/PageDonasi"
import PagePembayaran from "./pages/PagePembayaran"
import PageAcceptPembayaran from "./pages/PageAcceptPembayaran"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
  return (
    <>
 <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
    <Router>
      <Routes>
        <Route path="/" element={<PageDonasi/>}/>
        <Route path="/pembayaran" element={<PagePembayaran/>}/>
        <Route path="/accept" element={<PageAcceptPembayaran/>}/>
      </Routes>
    </Router>
    </>
  )
}


export default App
