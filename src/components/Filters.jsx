import React from "react";
const Filters = ({ columnFilters, setColumnFilters }) => {
  // console.log(columnFilters);

  const firstName = columnFilters.find((f) => f.id === "firstName")?.value || "";

  const onFilterChange = (id, value) => setColumnFilters((prev) => prev.filter((f) => f.id !== id).concat({ id, value }));

  return (
    <div className="search-bar">
      <p>Search:</p>
      <input type="text" value={firstName} onChange={(e) => onFilterChange("firstName", e.target.value)}></input>
    </div>
  );
};
export default Filters;
// Ce composant est une barre de recherche qui permet de filtrer une colonne spécifique d'un tableau de données. Voici comment il fonctionne :

// Props : Le composant prend deux props : columnFilters et setColumnFilters. columnFilters est un tableau d'objets où chaque objet représente un filtre appliqué à une colonne. setColumnFilters est une fonction qui permet de mettre à jour les filtres.

// Filtre firstName : Le composant cherche dans columnFilters un filtre avec l'id "firstName". Si un tel filtre existe, sa valeur est utilisée comme valeur de l'input. Sinon, la valeur de l'input est une chaîne vide.

// onFilterChange : C'est une fonction qui est appelée chaque fois que la valeur de l'input change. Elle prend deux arguments : l'id du filtre à changer et la nouvelle valeur. Elle met à jour columnFilters en supprimant l'ancien filtre avec le même id et en ajoutant un nouveau filtre avec la nouvelle valeur.

// Rendu : Le composant rend une barre de recherche avec un input. Chaque fois que la valeur de l'input change, la fonction onFilterChange est appelée avec l'id "firstName" et la nouvelle valeur de l'input.
