import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Badge } from "../../shared/ui/badge";
import { ImageWithFallback } from "../../shared/figma/ImageWithFallback";
import { Download, Eye, Share2, Search, Filter, Phone } from "lucide-react";
import { Input } from "../../shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/select";
import ViolentometreQuiz from '../quiz/ViolentometreQuiz';

import { usePosters, type PosterItem } from "./hooks/usePosters";
import { posterPreviews, getCategoryColor } from "./data/posters.data";

export function PostersPage() {
  const { t } = useTranslation();
  const {
    viewMode,
    searchTerm,       setSearchTerm,
    selectedCategory, setSelectedCategory,
    previewImage,
    showQuiz,
    filterPosters,
    handleDownload,
    handleDownloadAll,
    handleShare,
    handlePreview,
    closePreview,
    toggleQuiz,
  } = usePosters();

  const allPosters  = t("posters.items",      { returnObjects: true }) as PosterItem[];
  const categories  = t("posters.categories", { returnObjects: true }) as { value: string; label: string }[];
  const filtered    = filterPosters(allPosters);

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">

      <Helmet>
        <title>Affiches de sensibilisation VSS — Erinyes</title>
        <meta name="description" content="Téléchargez gratuitement nos affiches de sensibilisation contre les violences sexistes et sexuelles. À afficher partout pour sensibiliser." />
        <meta property="og:title" content="Affiches de sensibilisation VSS — Erinyes" />
        <meta property="og:description" content="Téléchargez gratuitement nos affiches de sensibilisation contre les VSS." />
        <meta property="og:url" content="https://erinyes.fr/affiches" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">{t("posters.title")}</h1>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">{t("posters.subtitle")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-white/95 rounded-lg border border-[#E5E1DA]">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#6B6B6B]" />
              <Input
                placeholder={t("posters.search")}
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
                <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/95 border-[#E5E1DA] text-center p-4">
            <div className="text-2xl font-bold text-[#9B7FD7]">{allPosters.length}</div>
            <div className="text-sm text-[#6B6B6B]">{t("posters.available")}</div>
          </Card>
          <Card className="bg-white/95 border-[#E5E1DA] text-center p-4">
            <div className="text-2xl font-bold text-[#8B5E3C]">2</div>
            <div className="text-sm text-[#6B6B6B]">{t("posters.categoriesCount")}</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {filtered.map((poster, index) => {
                const preview = posterPreviews[allPosters.indexOf(poster)];
                return (
                  <Card key={index} className="bg-white/95 border-[#E5E1DA] hover:shadow-lg transition-shadow">
                    {viewMode === 'grid' ? (
                      <>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                          <ImageWithFallback src={preview} alt={poster.title} className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3">
                            <Badge className={getCategoryColor(poster.category)}>{poster.category}</Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-[#8B5E3C]">{poster.title}</CardTitle>
                          <p className="text-sm text-[#6B6B6B]">{poster.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between text-sm text-[#6B6B6B] mb-4">
                            <span>{t("posters.format")}: {poster.format}</span>
                            <span>{poster.size}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white flex-1 cursor-pointer" onClick={() => handleDownload(preview, poster.title)}>
                              <Download className="mr-2 h-4 w-4" />{t("posters.download")}
                            </Button>
                            <Button size="sm" variant="outline" className="border-[#9B7FD7] text-[#9B7FD7] cursor-pointer" onClick={() => handlePreview(preview)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-[#9B7FD7] text-[#9B7FD7] cursor-pointer" onClick={() => handleShare(poster.title, poster.description, t("posters.linkCopied"))}>
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      <div className="flex p-6">
                        <div className="w-24 h-32 flex-shrink-0 mr-6">
                          <ImageWithFallback src={preview} alt={poster.title} className="w-full h-full object-cover rounded" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-[#8B5E3C]">{poster.title}</h3>
                            <Badge className={getCategoryColor(poster.category)}>{poster.category}</Badge>
                          </div>
                          <p className="text-[#6B6B6B] mb-4">{poster.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-[#6B6B6B]">{poster.format} • {poster.size}</div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white" onClick={() => handleDownload(preview, poster.title)}>
                                <Download className="mr-2 h-4 w-4" />{t("posters.download")}
                              </Button>
                              <Button size="sm" variant="outline" className="border-[#9B7FD7] text-[#9B7FD7]" onClick={() => handlePreview(preview)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-[#9B7FD7] text-[#9B7FD7]" onClick={() => handleShare(poster.title, poster.description, t("posters.linkCopied"))}>
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#6B6B6B] text-lg">{t("posters.noResults")}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 space-y-4 sticky top-24">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardHeader className="text-center bg-white p-4">
                <CardTitle className="text-lg text-[#8B5E3C]">{t("posters.violentometre.title")}</CardTitle>
                <p className="text-sm text-[#6B6B6B]">{t("posters.violentometre.subtitle")}</p>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Button className="bg-[#9B7FD7] hover:bg-[#8B6BC7] text-white w-full cursor-pointer" onClick={toggleQuiz}>
                  {showQuiz ? t("posters.violentometre.close") : t("posters.violentometre.launch")}
                </Button>
                <Button className="bg-white text-[#8B5E3C] hover:bg-gray-100 w-full font-bold mt-2 cursor-pointer" onClick={() => window.open('tel:3919')}>
                  <Phone className="mr-2 h-4 w-4" />{t("posters.violentometre.call")}
                </Button>
              </CardContent>
            </Card>
            {showQuiz && (
              <Card className="overflow-hidden border-none shadow-lg mt-4">
                <CardContent className="p-4">
                  <ViolentometreQuiz />
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <section className="mt-16 text-center bg-[#9B7FD7] bg-opacity-5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("posters.cta.title")}</h2>
          <p className="text-white mb-6 max-w-2xl mx-auto">{t("posters.cta.content")}</p>
          <Button className="bg-[#FFA45C] hover:bg-[#FF9440] text-white px-8 py-3 cursor-pointer" onClick={() => handleDownloadAll(allPosters)}>
            <Download className="mr-2 h-5 w-5" />
            {t("posters.downloadAll")}
          </Button>
        </section>

        {previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#8B5E3C]">{t("posters.previewTitle")}</h3>
                <Button variant="outline" size="sm" onClick={closePreview} className="cursor-pointer">✕</Button>
              </div>
              <div className="p-4">
                <img src={previewImage} alt={t("posters.previewTitle")} className="w-full h-auto max-h-[70vh] object-contain" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}