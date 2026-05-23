import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Code Splitting / Lazy Loading de rotas para máxima pontuação no PageSpeed
const SolucaoPage = React.lazy(() => import("./pages/SolucaoPage"));
const SolucaoBairroPage = React.lazy(() => import("./pages/SolucaoBairroPage"));

// Fallback ultraleve para previnir Cumulative Layout Shift (CLS)
const RouteSuspenseFallback = React.memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
));

const Router = React.memo(() => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Novas Rotas Injetadas com Lazy Loading */}
      <Route path="/solucoes/:slug">
        {() => (
          <Suspense fallback={<RouteSuspenseFallback />}>
            <SolucaoPage />
          </Suspense>
        )}
      </Route>

      <Route path="/solucoes/:solucaoSlug/bairro/:bairroSlug">
        {() => (
          <Suspense fallback={<RouteSuspenseFallback />}>
            <SolucaoBairroPage />
          </Suspense>
        )}
      </Route>

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default React.memo(App);