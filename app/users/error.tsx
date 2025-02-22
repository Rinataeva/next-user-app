"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.error(`${error}`);
    }, [error]);
    return (
        <div className="flex items-center justify-center h-screen">
            <h2 className="text-2xl text-red-800">Error fetching users data</h2>
        </div>
    );
}