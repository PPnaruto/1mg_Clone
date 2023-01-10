import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fillGenderFilter, setGenderFilter } from "../../redux/Utils/action";
import styles from "../../styles/AgeList.module.css";

let array = [];

function fillData(raw) {
  let arr = [];
  raw.map((element) => {
    if (arr.includes(element) == false) arr.push(element);
  });
  array = arr;
}

const FilterGenderList = ({ data }) => {
  const [search_params, setSearchParams] = useSearchParams();
  const sort = search_params.get("sort") || "id";
  const search = search_params.get("search") || "";
  const age_filter = search_params.get("age_filter") || "none";
  const gender_param = search_params.get("gender_filter") || "none";
  const gender_filter = useSelector((store) => store.utils.gender_filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gender_param != "none") {
      fillGenderFilter(dispatch, gender_param.split(","));
    }
  }, []);

  if (typeof data != "undefined") {
    fillData(data);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const status = e.target.checked;

    if (status) {
      if (gender_filter.length == 0) {
        setSearchParams({
          search,
          age_filter,
          gender_filter: value,
          sort,
        });
      } else {
        setSearchParams({
          search,
          age_filter,
          gender_filter: gender_filter.join(",") + "," + value,
          sort,
        });
      }
      setGenderFilter(dispatch, value);
    } else {
      const removed = gender_filter.filter((element) => element != value);
      fillGenderFilter(dispatch, removed);
      if (removed.length > 0) {
        setSearchParams({
          search,
          age_filter,
          gender_filter: removed.join(","),
          sort,
        });
      } else {
        setSearchParams({
          search,
          age_filter,
          gender_filter: "none",
          sort,
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      {array.map((element, index) => (
        <div className={styles.list} key={index}>
          <input
            type="checkbox"
            value={element}
            id={element}
            onChange={handleChange}
            checked={gender_filter.includes(element)}
          />
          <label htmlFor={element}>{element}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterGenderList;
