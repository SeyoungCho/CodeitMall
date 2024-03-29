import { useRouter } from "next/router";
import { useState } from "react";
export default function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push(`/`);
      return;
    }
    router.push(`/search?q=${value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
      <button type="submit">검색</button>
    </form>
  );
}
