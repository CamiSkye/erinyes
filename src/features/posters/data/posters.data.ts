import sensibilisation from '../../../assets/Affiche_VSS.png';
import cocktail      from '../../../assets/AngelShot.png';
import phone         from '../../../assets/Phone.png';
import consentement  from '../../../assets/Consentement.png';
import action        from '../../../assets/QueFaire.png';
import association   from '../../../assets/Association.png';

export const posterPreviews = [
  sensibilisation,
  consentement,
  action,
  cocktail,
  phone,
  association,
];

export const posterColors = [
  ["#9B7FD7", "#FFA45C"],
  ["#9B7FD7", "#FFA45C"],
  ["#9B7FD7", "#FFA45C"],
  ["#9B7FD7", "#FFA45C"],
  ["#9B7FD7", "#FFA45C"],
  ["#FF69B4", "#8B5E3C"],
];

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Sensibilisation': return 'bg-[#9B7FD7] text-white';
    case 'Information':     return 'bg-[#FFA45C] text-white';
    default:                return 'bg-gray-100 text-gray-800';
  }
};