import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProviderKeeper, isKeeperInstalled } from "@waves/provider-keeper";
import { Signer } from "@waves/signer";
import { onboardUser } from "@utils/web3";

const signer = new Signer({
  NODE_URL: "https://nodes.wavesnodes.com",
});
const keeper = new ProviderKeeper();

signer.setProvider(keeper);

type WavesContextType = {
  address: string;
  hasKeeper: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
  isLoading: boolean;
};

const initContext: WavesContextType = {
  address: "",
  hasKeeper: false,
  connectWallet: () => {},
  disconnectWallet: () => {},
  isLoading: false,
};

const WavesContext = createContext<WavesContextType>(initContext);

export const useWaves = () => useContext(WavesContext);

export const WavesProvider = ({ children }: any) => {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasKeeper, setHasKeeper] = useState(false);

  async function connectWallet() {
    setLoading(true);
    const user = await signer.login();
    setAddress(user.address);
    setLoading(false);
  }

  function disconnectWallet() {
    setLoading(true);
    try {
      setTimeout(() => {
        setAddress("");
        window.localStorage.removeItem("WAVES_ADDRESS");
        router.push("/");
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchedAddress = window.localStorage.getItem("WAVES_ADDRESS");
    if (!address && fetchedAddress) setAddress(fetchedAddress);
    if (address && address !== fetchedAddress)
      window.localStorage.setItem("WAVES_ADDRESS", address);
  }, [address]);

  useEffect(() => {
    async function checkKeeperInstalled() {
      const isInstalled = await isKeeperInstalled();
      setHasKeeper(isInstalled);
    }
    checkKeeperInstalled();
  }, []);

  // hook to save user in db
  const saveUser = useCallback(async () => {
    console.log("onboardUser: ", address);
    await onboardUser(address);
  }, [address]);

  useEffect(() => {
    if (address) {
      saveUser();
    }
  }, [address, saveUser]);

  return (
    <WavesContext.Provider
      value={{
        address,
        hasKeeper,
        connectWallet,
        disconnectWallet,
        isLoading,
      }}
    >
      {children}
    </WavesContext.Provider>
  );
};
