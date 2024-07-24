import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function Sort({ Options }) {
  const [Search, setSearch] = useSearchParams();
  function Change(e) {
    Search.set("sortby", e.target.value);
    setSearch(Search);
  }
  return <Select Options={Options} onChange={Change}></Select>;
}
