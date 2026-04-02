// Configuration settings for the application
const config = {
    // Contract settings
    CONTRACT_ADDRESS: process.env.REACT_APP_CONTRACT_ADDRESS || '0x92Fffe14CDC25Ece0858037Ea1D905d10cced30f',
    ADMIN_ADDRESS: process.env.REACT_APP_ADMIN_ADDRESS || '0x129d7140d2ea226ff47800e776f54019481751bf',
    
    // Network settings
    NETWORK_ID: 11155111, // Sepolia
    NETWORK_NAME: 'Sepolia',
    
    // UI settings
    ADDRESS_DISPLAY_LENGTH: 8, // How many characters to show at beginning/end of ethereum addresses
    
    // Helper functions
    shortenAddress: (address) => {
      if (!address) return '';
      return `${address.substring(0, config.ADDRESS_DISPLAY_LENGTH)}...${address.substring(address.length - 4)}`;
    }
  };
  
  export default config;