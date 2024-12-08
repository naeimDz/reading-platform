"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Home, Users, Book, Settings, Award, Globe } from "lucide-react";

type Breadcrumb = {
  label: string;
  icon: JSX.Element;
  path: string;
};

const Breadcrumbs = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Ensuring that the component is only using the router after it has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or render a loading state, if you prefer
  }

  const pathSegments = router.asPath.split("/").filter(Boolean);

  const breadcrumbMap: Record<string, { label: string; icon: JSX.Element }> = {
    "dashboard": { label: "Dashboard", icon: <Home /> },
    "users": { label: "User Management", icon: <Users /> },
    "books": { label: "Book Management", icon: <Book /> },
    "settings": { label: "Settings", icon: <Settings /> },
    "performance": { label: "Performance", icon: <Award /> },
    "groups": { label: "Groups", icon: <Globe /> },
  };

  // Generate breadcrumbs dynamically based on the route
  const breadcrumbs: Breadcrumb[] = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const { label, icon } = breadcrumbMap[segment] || { label: segment, icon: <Book /> };
    return { label, icon, path };
  });

  return (
    <nav className="flex items-center space-x-2 text-gray-700">
      <a href="/" className="flex items-center transition-all text-indigo-600 hover:text-indigo-800">
        <Home className="mr-2" />
        Home
      </a>
      <span className="text-gray-400">/</span>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          <a
            href={breadcrumb.path}
            className={`flex items-center transition-all ${
              index === breadcrumbs.length - 1
                ? "text-gray-900"
                : "text-indigo-600 hover:text-indigo-800"
            }`}
          >
            {breadcrumb.icon && <span className="mr-2">{breadcrumb.icon}</span>}
            <span>{breadcrumb.label}</span>
          </a>
          {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
