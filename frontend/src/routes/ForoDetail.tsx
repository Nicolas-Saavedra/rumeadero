import { useParams } from "react-router-dom";

export default function ForoDetail() {
  const { id } = useParams();
  return <div className="py-8 px-4 md:px-8"></div>;
}
