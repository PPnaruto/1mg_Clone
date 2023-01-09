import styles from "../styles/Home.module.css";

import MainBanner from "../components/Home/MainBanner";
import SmallCarousal from "../components/Home/SmallCarousal";

const health_array = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
    title: "Diabetes Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
    title: "Cardiac Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
    title: "Stomach Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
    title: "Liver Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
    title: "Bone, Joint & Muscle Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
    title: "Kidney Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fa7ff8e9-f1f8-4a3e-9125-c9b36bcf38cd.png",
    title: "Pain Relief",
  },
];

const brand_array = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fccafd09-569d-419d-b65a-84b6d314295a.png",
    title: "Cetaphil",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e657a4c7-8cee-4eb6-850f-e48d1dd1288c.png",
    title: "Mamaearth",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/21c4a8bf-2e3a-42a1-83e9-6ef63e760f88.png",
    title: "Dabur",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f28e82bd-37ec-4891-8eb7-69486635a199.png",
    title: "mCaffeine",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/eba5fb6b-6baa-4bc0-b030-793645a2ee4e.png",
    title: "Nivea",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f142c987-e7aa-48da-90b3-306cd90ea1c9.png",
    title: "Accu-Chek",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e9dae18-a318-405b-b97f-36c3c1e9b9e4.png",
    title: "Protinex",
  },
];

const popular_categories = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b3fcf5ba-ae5e-4c94-a43f-e381cd27d5ab.webp",
    title: "Top Deals",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba7328d6-022b-45fe-b87a-1f1fbead2789.png",
    title: "Winter Care",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f5fb69f7-cf7a-4e7c-ba48-b924c7b5111c.png",
    title: "Nutritional Drinks",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5adb8954-6264-46d7-8136-cb5a633b7535.png",
    title: "Ayurveda",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/15e1ce5f-798f-4aa7-b6b4-1b140c4d6f4d.webp",
    title: "Sexual Wellness",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/668f0b65-56ef-4875-8aef-9a53b919b53c.webp",
    title: "Vitamins & Supplements",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/de1183ce-6b14-4549-9fda-f732d96a11de.webp",
    title: "Skin Care",
  },
];

const face_care = [
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d5hkmorf6bhvfaygavgr.jpg",
    title: "Facewash",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/vvfvegx0ioloahdllziq.jpg",
    title: "Face Moisturisers",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/mce9xf6uprsxs0faiejb.jpg",
    title: "Cleanser",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ivel2razune9mzbtck39.jpg",
    title: "Lip Balm",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/uj6sgg1gmwyaanhqq6jb.jpg",
    title: "Face Scrub & exfoliator",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/j6dwuymx857oekcixhee.jpg",
    title: "Facial kit & sheet mask",
  },
  {
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jymippakro903wf1alxa.jpg",
    title: "Face Serum & oil",
  },
];

const Home = () => {
  return (
    <main>
      <MainBanner />
      <div className={styles.adone}>
        <img src="https://onemg.gumlet.io/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" />
      </div>
      <div className={styles.shopHealth}>
        <div className={styles.caption}>
          <p>Shop by health concerns</p>
        </div>
        <SmallCarousal data={health_array} />
      </div>
      <div className={styles.shopHealth}>
        <div className={styles.caption}>
          <p>Featured brands</p>
        </div>
        <SmallCarousal data={brand_array} />
      </div>
      <div className={styles.shopHealth}>
        <div className={styles.caption}>
          <p>Popular categories</p>
        </div>
        <SmallCarousal data={popular_categories} />
      </div>
      <div className={styles.shopHealth}>
        <div className={styles.caption}>
          <p>Face Care Products</p>
        </div>
        <SmallCarousal data={face_care} />
      </div>
    </main>
  );
};

export default Home;
