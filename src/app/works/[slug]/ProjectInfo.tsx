'use client'

import { useParams } from "next/navigation";

export function ProjectInfo() {
    const params = useParams();

    const { slug } = params
    return (
        <div>
            
        </div>
    );
}
