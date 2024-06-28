import { Button } from "../atom/Button";
import { createThirdwebClient } from "thirdweb";
import { darkTheme } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { useProfileContext } from "../contexts/ProfileContext";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import readGameState from "../../utils/readState.js"

// import { ethers } from "ethers";

const clientId = "5555e76cfe72676f69d044a91ce98d30";
const client = createThirdwebClient({ clientId });

const customTheme = darkTheme({
  colors: {
    primaryText: "white",
    secondaryText: "#FFFFFFFF",
    accentText: "#FFFFFFFF",

    primaryButtonBg: "",
    primaryButtonText: "#FFFFFFFF",

    borderColor: "FFFFFF",
    skeletonBg: "green",
    connectedButtonBg: "",
  },
});

const ConnectButton2 = () => {
  const activeAccount = useActiveAccount();
  const {profile, setProfile} = useProfileContext();
  const status = useActiveWalletConnectionStatus();

  console.log("Connected account is " + activeAccount?.address);
  console.log("Status is........... " + status);


  async function syncProfile() { 
    if (status === "connected") {
      if (profile?.wallet_address?.toLowerCase() != activeAccount?.address?.toLowerCase()) {
        console.log("Different wallet address.......");
        console.log("last recorded wallet is: ", profile?.wallet_address);
        const {Status, request_payload} = await readGameState(`profile/${activeAccount?.address}`); // Call your function
        if (Status) {
          console.log(request_payload, "request_payload");
          setProfile(request_payload);
          console.log("new wallet address is: ", request_payload?.wallet_address);
        }
        
      }
    }
  }

  syncProfile()

  return (
    <Button className="tg-border-btn text-gray-100 text-[0.7rem] font-bold font-barlow px-4 py-2 flex justify-center items-center">
      <ConnectButton
        client={client}
        theme={customTheme}
        chain={{ id: 84532, rpc: "https://sepolia.base.org" }}
      />
    </Button>
  );
};

export default ConnectButton2;
