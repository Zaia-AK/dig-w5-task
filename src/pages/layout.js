import { NavLink, Outlet } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";
import { Sidebar } from "../components/sidebar";
import { Switcher } from "../components/Switcher";
import { AuthContext } from "../contexts/AuthContext";

export default function Layout(){
    const context = useContext(ThemeContext);
    const authContext = useContext(AuthContext)
    const {logout} = authContext;
    const color = context.settings.themeValue.background;
    return <>
        <div className="flex flex-row">
            <Sidebar/>
            
            <div id="detiails" className="w-full p-8">
                <Outlet/>
            </div>
        </div>
    </>
}