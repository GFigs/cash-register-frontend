import SidebarItem from "./SidebarItem";
import SidebarLink from "./types";

const navItems: SidebarLink[] = [
    {
        label: "Caja Registradora",
        to: "/cash-register",
    },
];

export default function Sidebar() {
    return (
        <aside className="w-60 bg-white border-r shadow-sm p-4 select-none">
            <h2 className="text-lg font-bold mb-6">Menú</h2>
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <SidebarItem key={item.to} item={item} />
                ))}
            </nav>
        </aside>
    );
}