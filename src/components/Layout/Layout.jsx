"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoIcon from "../../../public/svgs/LogoIcon";
import DashboardIcon from "../../../public/svgs/DashboardIcon";
import AnalyticsIcon from "../../../public/svgs/AnalyticsIcon";
import "./style.css";

export default function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const router = useRouter(); // Ensure this is used in the right context

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    const status = localStorage.getItem("status");

    if (mode === "dark") {
      setIsDarkMode(true);
    }
    if (status === "close") {
      setIsSidebarClosed(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isSidebarClosed) {
      document.querySelector("nav").classList.add("close");
      localStorage.setItem("status", "close");
    } else {
      document.querySelector("nav").classList.remove("close");
      localStorage.setItem("status", "open");
    }
  }, [isSidebarClosed]);

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <div>
      <nav className={isSidebarClosed ? "close" : ""}>
        <div className="logo-name">
          <div
            onClick={() => setIsSidebarClosed(!isSidebarClosed)}
            className="logo-image  p-0"
          >
            <LogoIcon
              color={isDarkMode ? "#678FFF" : "#678FFF"}
              height={30}
              width={30}
            />
          </div>
          <span className="logo_name">Esterra</span>
        </div>

        <div className="menu-items">
          <ul className="nav-links flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className={`flex p-4 gap-3 hover:bg-[#678FFF]/20 rounded-xl ${
                  isActive("/") ? "bg-[#678FFF] text-white" : ""
                }`}
              >
                <div className="uil uil-files-landscapes flex justify-center items-center ">
                  <DashboardIcon
                    stroke={isActive("/") ? "white" : "#678FFF"}
                    color="none"
                    height={16}
                    width={15}
                  />
                </div>
                <span className="link-name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className={`flex p-4 gap-3 hover:bg-[#678FFF]/20 rounded-xl ${
                  isActive("/analytics") ? "bg-[#678FFF] text-white" : ""
                }`}
              >
                <div className="uil uil-files-landscapes flex justify-center items-center ">
                  <AnalyticsIcon
                    stroke={isActive("/analytics") ? "white" : "#678FFF"}
                    color="none"
                    height={16}
                    width={15}
                  />
                </div>
                <span className="link-name">Analytics</span>
              </Link>
            </li>
            {/* Add other links similarly */}
          </ul>

          <ul className="logout-mode">
            <li>
              <a href="#">
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </a>
            </li>

            <li className="mode">
              <a href="#">
                <i className="uil uil-moon"></i>
                <span className="link-name">Dark Mode</span>
              </a>

              <div
                className="mode-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <span className="switch"></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section className="dashboard">
        <div className="top">
          <i
            className="uil uil-bars sidebar-toggle"
            onClick={() => setIsSidebarClosed(!isSidebarClosed)}
          ></i>

          <div className="search-box">
            <input type="text" placeholder="Search here..." />
          </div>

          <img src="/images/profile.jpg" alt="Profile" />
        </div>

        <div>{children}</div>
      </section>
    </div>
  );
}
