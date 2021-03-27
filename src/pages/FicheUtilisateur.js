import React, {useState} from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const FicheUtilisateur = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <Header/>
      <Navigation/>
      
      JE SUIS FICHE UTILISATEUR
    </div>
  );
};

export default FicheUtilisateur;