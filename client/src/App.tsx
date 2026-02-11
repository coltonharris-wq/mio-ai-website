import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AIReceptionist from "./pages/AIReceptionist";
import AIAutomation from "./pages/AIAutomation";
import LeadGeneration from "./pages/LeadGeneration";
import Healthcare from "./pages/industries/Healthcare";
import Finance from "./pages/industries/Finance";
import RealEstate from "./pages/industries/RealEstate";
import Manufacturing from "./pages/industries/Manufacturing";
import Ecommerce from "./pages/industries/Ecommerce";
import Technology from "./pages/industries/Technology";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import Construction from "./pages/industries/Construction";
import Retail from "./pages/industries/Retail";
import Hospitality from "./pages/industries/Hospitality";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/ai-receptionist"} component={AIReceptionist} />
      <Route path={"/ai-automation"} component={AIAutomation} />
      <Route path={"/lead-generation"} component={LeadGeneration} />
      <Route path={"/industries/healthcare"} component={Healthcare} />
      <Route path={"/industries/finance"} component={Finance} />
      <Route path={"/industries/real-estate"} component={RealEstate} />
      <Route path={"/industries/manufacturing"} component={Manufacturing} />
      <Route path={"/industries/ecommerce"} component={Ecommerce} />
      <Route path={"/industries/technology"} component={Technology} />
      <Route path={"/industries/professional-services"} component={ProfessionalServices} />
      <Route path={"/industries/construction"} component={Construction} />
      <Route path={"/industries/retail"} component={Retail} />
      <Route path={"/industries/hospitality"} component={Hospitality} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
