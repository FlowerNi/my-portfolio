import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Layout>
              <AnimatePresence mode="wait">
                <motion.div key={router.route} className="h-full">
                  <Transition />
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
