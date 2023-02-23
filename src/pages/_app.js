import { AuthContextProvider } from "@/Context/AuthContext";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps, children }) {
  return (
    <AuthContextProvider>
      {children}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}
