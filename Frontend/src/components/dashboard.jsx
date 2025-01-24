import React from "react";
import { useNavigate } from "react-router";


const Dashboard = () => {
    const navigate = useNavigate();

    const handleBtn = () => {
        document.cookie = "token="
        alert('You have been logged out');
        navigate('/login')
    }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#profile" className="text-white hover:text-gray-300">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#settings" className="text-white hover:text-gray-300">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#logout" className="text-white hover:text-gray-300">
                            Logout
                        </a>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
                    <div>
                        <button
                            onClick={handleBtn}
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                            Logout
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <section>
                    <div className="grid grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Total Users</h3>
                            <p className="text-3xl font-bold">1,500</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Revenue</h3>
                            <p className="text-3xl font-bold">$24,000</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Active Users</h3>
                            <p className="text-3xl font-bold">1,200</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
