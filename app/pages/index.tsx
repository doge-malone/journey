import Landing from "@components/Landing";
import styles from "@styles/Home.module.css";
import { useEffect, useState } from "react";
import { VStack, Text } from "@chakra-ui/react";
import { useWaves } from "@components/WavesProvider";
import Explore from "@components/Explore";
import withTransition from "@components/withTransition";

function Home() {
  const { address } = useWaves();
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className={styles.container}>
        <VStack className={styles.titleContainer}>
          <Text className={styles.mobileText}>
            This application is not supported on mobile or tablet at the moment.
            Thank you for understanding.
          </Text>
        </VStack>
      </div>
    );
  }

  return !address ? <Landing /> : <Explore />;
}

export default withTransition(Home);
