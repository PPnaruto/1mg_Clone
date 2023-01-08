import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCarousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onemg.gumlet.io/3b281a19-790a-440d-a94f-ec2c8c4433dd_1672911261.jpg?w=1269&h=250&format=auto"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onemg.gumlet.io/322cab94-7475-46ed-9032-51a5d44b55d0_1663311778.png?w=1269&h=250&format=auto"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onemg.gumlet.io/a_ignore,w_1269,h_250,c_fit,q_auto,f_auto/c697f3c8-0c49-417c-9765-b89aba6e746e.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousal;
