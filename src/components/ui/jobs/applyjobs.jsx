import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function ApplyJob({title,id}) {
    return (
        <>
            <div className="flex px-5 py-2 justify-between bg-gray-200 items-center mt-5">
                <h2>{title}</h2>
                <Button>
                <Link href={`/careers/jobs/${id}`}>Apply</Link></Button>

            </div>
        </>
    );
}