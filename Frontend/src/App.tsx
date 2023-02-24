import { AuthProvider } from "./Contexts/auth";
import AppRoutes from "./Routes/App.Routes";
import GlobalStyle from "./Styles/GlobalStyles";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
