import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fillBrandFilter, setBrandFilter } from "../../redux/Utils/action";
import styles from "../../styles/BrandFilterList.module.css";

let array = [];

function fillData(raw) {
  let arr = [];
  raw.map((element) => {
    if (arr.includes(element) == false) arr.push(element);
  });
  array = arr;
}

const BrandFilterList = ({ data }) => {

  const [search_param, setSearchParam] = useSearchParams();
  const sort = search_param.get("sort") || "id";
  const brand_filter = useSelector((state) => state.utils.brand_filter) || [];
  const search_brand = search_param.get("brand_filter")?.split(",") || ["none"];
  const age_filter = search_param.get("age_filter") || "none";
  const gender_filter = search_param.get("gender_filter") || "none";
  const dispatch = useDispatch();


  useEffect(() => {
    if (search_brand[0] != "none") {
      fillBrandFilter(dispatch, search_brand);
    }
  }, []);
  fillData(data);
  const handleChange = (e) => {
    let value = e.target.value;
    const status = e.target.checked;

    if (status) {
      if (brand_filter.length == 0) {
        setSearchParam({
          brand_filter: value,
          age_filter,
          gender_filter,
          sort,
        });
      } else {
        setSearchParam({
          brand_filter: brand_filter.join(",") + "," + value,
          age_filter,
          gender_filter,
          sort,
        });
      }
      setBrandFilter(dispatch, value);
    } else {
      if (brand_filter.length == 1) {
        fillBrandFilter(dispatch, []);
        setSearchParam({
          brand_filter: "none",
          age_filter,
          gender_filter,
          sort,
        });
      } else {
        let removed = brand_filter.filter((element) => element != value);
        fillBrandFilter(dispatch, removed);
        setSearchParam({
          brand_filter: removed.join(","),
          age_filter,
          gender_filter,
          sort,
        });
      }
    }
  };

  return (
    <div className={styles.list}>
      {array.map((element, index) => (
        <div className={styles.item} key={index}>
          <input
            type="checkbox"
            id={element}
            value={element}
            onChange={handleChange}
            checked={brand_filter.includes(element)}
          />
          <label htmlFor={element}>{element}</label>
        </div>
      ))}
    </div>
  );
};

export default BrandFilterList;
