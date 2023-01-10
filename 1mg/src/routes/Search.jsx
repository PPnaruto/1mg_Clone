import styles from "../styles/Vitamins.module.css";

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../redux/Product/action";
import SearchFilters from "../components/Search/SearchFilters";
import Wrapper from "../components/Search/Wrapper";

const Search = () => {
  const [search_param, setSearchParam] = useSearchParams();
  const dispatch = useDispatch();

  const query = search_param.get("search") || "";

  useEffect(() => {
    dispatch(searchData(query));
  }, [query]);

  return (
    <main>
      <section className={styles.product}>
        <div className={styles.filterWrapper}>
          <SearchFilters />
        </div>
        <div className={styles.productWrapper}>
          <Wrapper category={query} />
        </div>
      </section>
    </main>
  );
};
export default Search;
