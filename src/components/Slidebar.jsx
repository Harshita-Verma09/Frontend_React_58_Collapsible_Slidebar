import { useState } from "react";
import { Menu, X, Home, User, Settings } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-16"
                    } bg-gray-900 text-white h-screen transition-all duration-300 p-4`}
            >
                {/* Toggle Button */}
                <button
                    className="mb-4 text-white p-2 bg-gray-700 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Menu Items */}
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                        <Home size={20} />
                        {isOpen && <span>Home</span>}
                    </li>
                    <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                        <User size={20} />
                        {isOpen && <span>Profile</span>}
                    </li>
                    <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                        <Settings size={20} />
                        {isOpen && <span>Settings</span>}
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6">
                <h1 className="text-2xl">Main Content</h1>
            </div>
        </div>
    );
};

export default Sidebar;
