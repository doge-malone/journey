import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { Button, HStack, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { abridgeAddress } from "@utils/abridgeAddress";
import { useState } from "react";
import { useWaves } from "./WavesProvider";

const Navbar = () => {
  const { address, disconnectWallet, isLoading } = useWaves();
  const [isHover, setIsHover] = useState<boolean>(false);

  if (!address) return;

  return (
    <HStack className={styles.navbarContainer}>
      <VStack w="100%">
        <Text className={styles.announcement}>
          Please note Journey is in{" "}
          <Text as="span" fontWeight={700}>
            beta mode
          </Text>
          . All quests will be verified on WAVES mainnet, and NFT rewards will
          be airdropped on WAVES mainnet.
        </Text>
        <HStack className={styles.navbar}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              cursor="pointer"
              className={styles.logo}
            ></Image>
          </Link>
          <HStack className={styles.navLeftSection}>
            <Link href="/journey/SOEKIWe2g0JDOKTZBl6N">
              <Text>Journey (Beta)</Text>
            </Link>
            <Link href="/profile">
              <Text>My Profile</Text>
            </Link>
            <Link href="/community">
              <Text>Community</Text>
            </Link>
            {address && (
              <Button
                className={styles.addressPill}
                onClick={disconnectWallet}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                {isLoading ? (
                  <Spinner color="white" />
                ) : isHover ? (
                  "Disconnect"
                ) : (
                  abridgeAddress(address)
                )}
              </Button>
            )}
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Navbar;
