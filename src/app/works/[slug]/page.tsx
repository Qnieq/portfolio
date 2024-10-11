import { Metadata } from "next";
import { ProjectInfo } from "./ProjectInfo";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;

    return {
        title: `Works | ${slug}`,
        robots: { index: false, follow: false },
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <ProjectInfo />
        </div>
    );
}