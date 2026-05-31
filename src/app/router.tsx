import { createBrowserRouter, Navigate } from "react-router-dom";

import AppLayout from "./AppLayout";

// pages
import {HomePage} from "../features/home/HomePage";
import {ResourcesPage} from "../features/resources/ResourcesPage";
import {InterventionPage} from "../features/intervention/InterventionPage";
import {TrainingPage} from "../features/training/TrainingPage";
import { PostersPage} from "../features/posters/PostersPage";
import MentionsLegales from "../features/legal/MentionsLegales";
import ViolentometreQuiz from "../features/quiz/ViolentometreQuiz";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // ✅ nouvelles routes
      { path: "/", element: <HomePage /> },
      { path: "/ressources", element: <ResourcesPage /> },
      { path: "/interventions", element: <InterventionPage /> },
      { path: "/formations", element: <TrainingPage /> },
      { path: "/affiches", element: <PostersPage /> },
      { path: "/mentions-legales", element: <MentionsLegales /> },
      { path: "/quiz", element: <ViolentometreQuiz /> },

      // 🔁 anciennes routes → redirections propres
      { path: "/accueil", element: <Navigate to="/" replace /> },
      { path: "/intervention", element: <Navigate to="/interventions" replace /> },
      { path: "/medias", element: <Navigate to="/affiches" replace /> },

      // ❌ fallback 404 propre
      {
        path: "*",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>404</h1>
            <p>Page non trouvée</p>
          </div>
        ),
      },
    ],
  },
]);