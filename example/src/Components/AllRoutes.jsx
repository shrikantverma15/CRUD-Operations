import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";
import TicketEdit from "../Pages/TicketEdit";
import TicketCreate from "../Pages/TicketCreate";
import TicketView from "../Pages/TicketView";
import PrivatePage from "../Components/PrivatePage";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivatePage>
            <Home />
          </PrivatePage>
        }
      />
      <Route
        path="/home"
        element={
          <PrivatePage>
            <Home />
          </PrivatePage>
        }
      />
      <Route
      className="App"
        path="/about"
        element={
          <PrivatePage>
            <About />
          </PrivatePage>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivatePage>
            <Contact />
          </PrivatePage>
        }
      />
      <Route
        path="/login"
        element={
          <RedirectIfLoggedIn>
            <Login />
          </RedirectIfLoggedIn>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivatePage>
            <Tickets />
          </PrivatePage>
        }
      />

      <Route
        path="/ticket/create"
        element={
          <PrivatePage>
            <TicketCreate />
          </PrivatePage>
        }
      />

<Route
        path="/ticket/view/:id"
        element={
          <PrivatePage>
            <TicketView />
          </PrivatePage>
        }
      />

<Route
        path="/ticket/edit/:id"
        element={
          <PrivatePage>
            <TicketEdit />
          </PrivatePage>
        }
      />
    </Routes>
  );
}
