import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Eye, Share2, Search, Filter, Grid, List, Phone, Shield } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import sensibilisation from '../assets/Affiche_VSS.png';
import cocktail from '../assets/AngelShot.png';
import phone from '../assets/Phone.png';
import consentement from '../assets/Consentement.png';
import action from '../assets/QueFaire.png';
import association from '../assets/Association.png';
import ViolentometreQuiz from './ViolentometreQuiz';

interface Poster {
  id: number;
  title: string;
  description: string;
  category: string;
  format: string;
  size: string;
  preview: any;
  colors: string[];
  downloads?: number; // optionnelle
}

export function PostersPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const posters = [
    {
      id: 1,
      title: "Erinyes - Statistiques VSS",
      description: "Affiche général et informative sur les Violences Sexistes et Sexuelles.",
      category: "Sensibilisation",
      format: "A3",
      size: "510 Ko",
      preview: sensibilisation,
      colors: ["#9B7FD7", "#FFA45C"],
      downloads: 0
    },
    {
      id: 2,
      title: "Le Consentement",
      description: "Si tu ne sais pas ce que veux dire le consentement ou que tu n'es pas sûr, cette affiche est là pour t'aider.",
      category: "Sensibilisation",
      format: "A3",
      size: "623 Ko",
      preview: consentement,
      colors: ["#9B7FD7", "#FFA45C"],
      downloads: 0
    },
    {
      id: 3,
      title: "Que dois-je faire ?",
      description: "Voici les quatre étapes à suivre si tu es témoin d'une Violence Sexiste et Sexuelle.",
      category: "Sensibilisation",
      format: "A3",
      size: "787 Ko",
      preview: action,
      colors: ["#9B7FD7", "#FFA45C"],
      downloads: 0
    },
    {
      id: 4,
      title: "Angel Shot",
      description: "Voici un code que tu peux utiliser lors d'une de tes soirées dans un bar. Tous les bars de France connaissent ce dispositif.",
      category: "Information",
      format: "A3",
      size: "1.6 Mo",
      preview: cocktail,
      colors: ["#9B7FD7", "#FFA45C"],
      downloads: 0
    },
    {
      id: 5,
      title: "Numéros d'urgence",
      description: "Les numéros à contacter si jamais tu te sens en danger.",
      category: "Information",
      format: "A3",
      size: "412 Ko",
      preview: phone,
      colors: ["#9B7FD7", "#FFA45C"],
      downloads: 0
    },
    {
      id: 6,
      title: "Associations",
      description: "Voici certaines associations qui peuvent t'aider dans tes démarches et suivant ce que tu recherches.",
      category: "Information",
      format: "A4",
      size: "3.7 MB",
      preview: association,
      colors: ["#FF69B4", "#8B5E3C"],
      downloads: 0
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'Sensibilisation', label: 'Sensibilisation' },
    { value: 'Information', label: 'Information' }
  ];

  const filteredPosters = posters.filter(poster => {
    const matchesSearch = poster.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         poster.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || poster.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (poster: any) => {
    const link = document.createElement('a');
    link.href = poster.preview;
    link.download = `${poster.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (poster: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: poster.title,
          text: poster.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Partage annulé');
      }
    } else {
      // Fallback: copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const handlePreview = (poster: any) => {
    setPreviewImage(poster.preview);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sensibilisation": return "bg-[#9B7FD7] text-white";
      case "Information": return "bg-[#FFA45C] text-white";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">
            Affiches de sensibilisation
          </h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Téléchargez gratuitement nos affiches de sensibilisation <br></br> pour diffuser les messages de prévention des VSS.
          </p>
        </div>

        {/* Filtres et recherche */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-white/95 rounded-lg border border-[#E5E1DA]">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#6B6B6B]" />
              <Input
                placeholder="Rechercher une affiche..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#E5E1DA] focus:border-[#9B7FD7]"
              />
            </div>
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] border-[#E5E1DA] focus:border-[#9B7FD7] cursor-pointer">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/95 border-[#E5E1DA] text-center p-4">
            <div className="text-2xl font-bold text-[#9B7FD7]">{posters.length}</div>
            <div className="text-sm text-[#6B6B6B]">Affiches disponibles</div>
          </Card>
          <Card className="bg-white/95 border-[#E5E1DA] text-center p-4">
            <div className="text-2xl font-bold text-[#8B5E3C]">2</div>
            <div className="text-sm text-[#6B6B6B]">Catégories</div>
          </Card>
        </div>

        {/* Contenu principal avec grille et sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Grille des affiches */}
          <div className="lg:col-span-3">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' 
                : 'grid-cols-1'
            }`}>
          {filteredPosters.map((poster) => (
            <Card key={poster.id} className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
              {viewMode === 'grid' ? (
                <>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={poster.preview}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={getCategoryColor(poster.category)}>
                        {poster.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#8B5E3C]">{poster.title}</CardTitle>
                    <CardDescription className="text-[#6B6B6B]">
                      {poster.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-[#6B6B6B] mb-4 cursor-pointer">
                      <span>Format: {poster.format}</span>
                      <span>{poster.size}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white flex-1 cursor-pointer"
                        onClick={() => handleDownload(poster)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-[#9B7FD7] text-[#9B7FD7] cursor-pointer"
                        onClick={() => handlePreview(poster)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-[#9B7FD7] text-[#9B7FD7] cursor-pointer"
                        onClick={() => handleShare(poster)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex p-6">
                  <div className="w-24 h-32 flex-shrink-0 mr-6">
                    <ImageWithFallback
                      src={poster.preview}
                      alt={poster.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-[#8B5E3C]">{poster.title}</h3>
                      <Badge className={getCategoryColor(poster.category)}>
                        {poster.category}
                      </Badge>
                    </div>
                    <p className="text-[#6B6B6B] mb-4">{poster.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-[#6B6B6B]">
                        {poster.format} • {poster.size} • {poster.downloads} téléchargements
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white"
                          onClick={() => handleDownload(poster)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-[#9B7FD7] text-[#9B7FD7]"
                          onClick={() => handlePreview(poster)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-[#9B7FD7] text-[#9B7FD7]"
                          onClick={() => handleShare(poster)}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
            </div>
          </div>

          {/* Violentomètre */}
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 sticky top-24">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="text-center bg-white p-4">
                <CardTitle className="text-lg text-[#8B5E3C]">Violentomètre</CardTitle>
                <p className="text-sm text-[#6B6B6B]">Outil pour mesurer si votre relation est saine ou dangereuse</p>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Button className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white w-full cursor-pointer" onClick={() => setShowQuiz(!showQuiz)}>
                  {showQuiz ? 'Fermer le quiz' : 'Lancer le quiz'}
                </Button>
                <Button className="bg-white text-[#8B5E3C] hover:bg-gray-100 w-full font-bold mt-2 cursor-pointer" onClick={() => window.open('tel:3919')}>
                  <Phone className="mr-2 h-4 w-4" />3919 - Violences Info
                </Button>
              </CardContent>
            </Card>

            {/* Quiz toggle */}
            {showQuiz && (
              <Card className="overflow-hidden border-none shadow-lg mt-4">
                <CardContent className="p-4">
                  <ViolentometreQuiz />
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {filteredPosters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B6B6B] text-lg">Aucune affiche trouvée pour votre recherche.</p>
          </div>
        )}

        {/* Call to action */}
        <section className="mt-16 text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Diffusez les messages de prévention
          </h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Imprimez et diffusez ces affiches dans vos locaux, écoles, associations ou espaces publics 
            pour sensibiliser le plus grand nombre aux violences sexistes et sexuelles.
          </p>
          <Button 
            className="bg-[#FFA45C] hover:bg-[#FF9440] text-white px-8 py-3 cursor-pointer"
            onClick={() => {
              posters.forEach(poster => handleDownload(poster));
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Télécharger le pack complet
          </Button>
        </section>

        {/* Modal de prévisualisation */}
        {previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#8B5E3C]">Aperçu de l'affiche</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setPreviewImage(null)}
                  className='cursor-pointer'
                >
                  ✕
                </Button>
              </div>
              <div className="p-4">
                <img 
                  src={previewImage} 
                  alt="Aperçu de l'affiche" 
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}