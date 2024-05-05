import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ForumDetailHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex mb-6 items-center gap-5">
      <button onClick={() => navigate(-1)}>
        <ArrowLeft className="size-6" />
      </button>
      <h2 className="text-2xl font-semibold">Posts</h2>
    </div>
  );
}
