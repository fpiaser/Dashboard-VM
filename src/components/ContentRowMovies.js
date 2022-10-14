import React, { useState, useEffect, useRef } from "react";
import SmallCard from "./SmallCard";



function ContentRowTop() {
  const [countProducts, setCountProducts] = useState(0);
  const [categories, setCategories] = useState(0);
  const [users, setUsers] = useState(0);

  let productInDataBase = {
    color: "primary",
    titulo: "Cantidad de Productos",
    valor: countProducts,
    icono: "fas fa-film",
  };
  
  let amount = {
    color: "success",
    titulo: "Categorias Activas",
    valor: categories,
    icono: "fas fa-award",
  };
  
  let user = {
    color: "warning",
    titulo: "Cantidad de Usuarios",
    valor: users,
    icono: "fas fa-user",
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCountProducts(data.meta.total)
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/api/categorias")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.meta.total)
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.meta.total)
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);


  let cardProps = [productInDataBase, amount, user];

  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {/* <button onClick={changeTotal}>change</button> */}
        {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
