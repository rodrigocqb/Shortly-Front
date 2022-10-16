import Ranking from "../components/Ranking";
import { useLocal } from "../hooks/useLocal";

export default function Home() {
  useLocal();
  return (
    <>
      <Ranking />
    </>
  );
}
