import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fillAgeFilter, setAgeFilter } from "../../redux/Utils/action";
import styles from "../../styles/AgeList.module.css";

let global_array = [];

const fillData = (array) => {
  const temp = [];
  array.forEach((element) => {
    if (temp.includes(element) == false) temp.push(element);
  });
  global_array = temp;
};

const FilterAgeList = ({ data }) => {
  const [search_params, setSearchParams] = useSearchParams();

  const sort = search_params.get("sort") || "id";
  const search = search_params.get("search") || "";
  const gender_filter = search_params.get("gender_filter") || "none";

  const age_filter = useSelector((store) => store.utils.age_filter);
  const age_param = search_params.get("age_filter") || "none";

  const dispatch = useDispatch();

  useEffect(() => {
    if (age_param != "none") {
      fillAgeFilter(dispatch, age_param.split(","));
    }
  }, []);

  if (typeof data != "undefined") {
    fillData(data);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const status = e.target.checked;
    if (status) {
      if (age_filter.length == 0) {
        setSearchParams({
          search,
          age_filter: value,
          gender_filter,
          sort,
        });
      } else {
        setSearchParams({
          search,
          age_filter: age_filter.join(",") + "," + value,
          gender_filter,
          sort,
        });
      }
      setAgeFilter(dispatch, value);
    } else {
      const removed = age_filter.filter((element) => element != value);
      fillAgeFilter(dispatch, removed);
      if (removed.length > 0) {
        setSearchParams({
          search,
          age_filter: removed.join(","),
          gender_filter,
          sort,
        });
      } else {
        setSearchParams({
          search,
          age_filter: "none",
          gender_filter,
          sort,
        });
      }
    }
  };
  return (
    <div className={styles.container}>
      {global_array.map((element, index) => (
        <div className={styles.list} key={index}>
          <input
            type="checkbox"
            value={element}
            id={element}
            onChange={handleChange}
            checked={age_filter.includes(element)}
          />
          <label htmlFor={element}>{element}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterAgeList;
