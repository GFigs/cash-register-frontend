import { NavLink } from "react-router-dom";
import SidebarLink from "./types";

type SidebarItemProps = {
    item: SidebarLink;
};

export default function SidebarItem({ item }: SidebarItemProps) {
    return (
        <NavLink
            to={item.to}
            className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition ${isActive
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
            }
        >
            {item.label}
        </NavLink>
    );
}