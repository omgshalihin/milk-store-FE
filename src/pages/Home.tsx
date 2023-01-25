import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <main className={styles.home__container}>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">list of products</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quia
        molestias fugiat dolor temporibus, in iste obcaecati repudiandae
        explicabo unde rem pariatur eaque, nemo ipsam culpa cupiditate
        voluptatum ab iusto porro necessitatibus commodi hic? Sint sed ea iusto
        odit tempora cumque enim reiciendis non accusantium dicta optio, fuga
        aspernatur repellat earum, doloribus voluptas iste soluta provident
        accusamus perspiciatis facere illo? Sequi deserunt aut dolorem non
        doloremque blanditiis repellat id delectus! Cum quia dolore corrupti
        alias dolores, ab repellat et sequi nihil molestias, quibusdam
        voluptatem exercitationem dolorum maxime? Facere fuga deserunt saepe
        expedita necessitatibus, reprehenderit ea aliquid? Corporis at officiis
        quod vero. Excepturi, fuga. Omnis, quae. Aut modi laboriosam eaque id.
        Laboriosam necessitatibus cupiditate aliquam consequatur est error
        officiis harum! Laboriosam, dolore? Autem quod, tempora libero quasi
        saepe ab facilis cum vel iusto error reprehenderit voluptatum corrupti
        nostrum, dolorum ad iure! Quidem quod aliquid odit nostrum inventore
        quasi laudantium nam! At placeat delectus, distinctio, quod dolorem
        ullam inventore sit consequuntur error blanditiis magni culpa nihil ex
        quo a? Voluptas tempora architecto animi veniam nulla accusantium
        obcaecati vero corrupti? Perferendis placeat pariatur reiciendis
        excepturi harum omnis quis ipsa error, nobis veniam doloribus dolor
        adipisci deleniti. Accusantium quam quidem minima? Asperiores illum
        facilis dolorum quaerat eius similique perspiciatis tempore! Qui
        architecto iure minima itaque quod laudantium eveniet veritatis, nam
        voluptates! Consectetur facilis magnam ab nihil fuga odio enim, impedit
        non autem id iure omnis laborum praesentium quis, voluptas ipsam itaque
        minus ullam iusto consequatur! Animi deleniti quas dolores laboriosam,
        facilis in quod esse excepturi enim ex doloremque nobis exercitationem
        voluptas neque ipsam saepe consequuntur dolorum tempora suscipit alias
        culpa! Repellendus rerum voluptas maiores, asperiores id nam, illo
        inventore natus velit ipsa nesciunt corrupti dolorum, eius fugiat
        officiis minima debitis libero est blanditiis. Illum fugiat architecto
        ea ipsam amet similique voluptate, rerum perspiciatis quaerat asperiores
        nam veniam ab molestias. A aliquid ab deserunt in sequi voluptatibus
        totam reiciendis hic, eveniet quos ut at blanditiis. Cupiditate unde
        obcaecati, sapiente minus sit iure consequuntur ipsa illum. Eligendi
        iusto quos voluptatem consequatur. Sunt a dolore quasi sit praesentium
        maxime, laborum officiis mollitia earum rerum temporibus corrupti
        voluptatibus dignissimos esse debitis nesciunt, expedita accusantium, ab
        ipsum! Accusantium ipsam sint fuga ipsa harum eaque exercitationem nam,
        mollitia necessitatibus! Ea mollitia pariatur necessitatibus at labore.
        Esse, minus! Provident, quae ea reiciendis, ducimus omnis dolorum nobis
        obcaecati ipsum minima qui nam voluptatem possimus quos iusto facere
        deserunt dolores nulla sapiente dolorem quisquam? Saepe officia nisi
        quisquam, officiis fugiat nemo quibusdam aliquid dolor, cumque sed vero
        sit porro corporis. Aspernatur, explicabo a iusto distinctio doloribus
        vel, porro placeat ullam repellat ipsum eaque suscipit magni alias animi
        maxime dolore corrupti voluptatem. Quod, ea delectus quibusdam nihil
        optio pariatur sed doloribus quos ullam quis. Dolorum quam ipsam quas
        neque, similique hic asperiores quidem temporibus, magnam rerum dicta
        non. Ut nesciunt, porro ad aspernatur perferendis mollitia ducimus
        provident molestias accusantium. Temporibus laboriosam porro cupiditate,
        quae voluptate nemo eius hic repellendus, ab dignissimos deserunt, odit
        earum rem magnam ea totam ipsam incidunt dolorum? Nihil, mollitia esse!
      </p>
    </main>
  );
};

export default Home;
