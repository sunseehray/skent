import { fetchUserById } from "@/app/lib/data";
import AssignmentCards from "@/app/ui/assignments";
import Script from "next/script";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const user = await fetchUserById(id);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-4xl">
        {user.username}
      </h2>
      <div className="flex flex-col gap-2">
        {/* tasks */}
        <AssignmentCards id={id} />
      </div>
      <Script src="/scripts/points.js"></Script>
    </div>
  );
}
