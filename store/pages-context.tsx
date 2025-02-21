"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import MainContent from "@/components/MainContent"; // Default component

// Define types for the context
interface PagesContextType {
	activePage: React.ComponentType;
	setActivePage: (component: React.ComponentType) => void;
}

// Create context
const PagesContext = createContext<PagesContextType | undefined>(undefined);

export const PagesProvider = ({ children }: { children: ReactNode }) => {
	const [activePage, setActivePage] = useState<React.ComponentType>(
		() => MainContent
	);

	return (
		<PagesContext.Provider value={{ activePage, setActivePage }}>
			{children}
		</PagesContext.Provider>
	);
};

// Custom hook to use context
export const usePagesContext = () => {
	const context = useContext(PagesContext);
	if (!context) {
		throw new Error("usePagesContext must be used within a PagesProvider");
	}
	return context;
};
