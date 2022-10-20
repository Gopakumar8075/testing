const getAccountChainChange = (
  provider,
  setConnect,
  setWalletAdd,
  setChainId
) => {
  if (provider?.on) {
    const handleAccountsChanged = (accounts) => {
      localStorage.setItem('walletAddress', accounts[0]);
      accounts.length > 0 ? login(accounts[0]) : null;
      if (accounts?.length === 0) {
        localStorage.clear();
        setConnect(false);
        setWalletAdd('');
        const event = new Event('loggedOut');
        document.dispatchEvent(event);
      }
    };
    const handleChainChanged = (_hexChainId) => {
      setChainId(_hexChainId);
    };

    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('chainChanged', handleChainChanged);

    return () => {
      if (provider.removeListener) {
        provider.removeListener('accountsChanged', handleAccountsChanged);
        provider.removeListener('chainChanged', handleChainChanged);
      }
    };
  }
};

const disConnectRouteChange = (router) => {
  document.addEventListener('loggedOut', () => handleDisconnectRoute(router));
  return document.removeEventListener('loggedOut', () =>
    handleDisconnectRoute(router)
  );
};

const handleDisconnectRoute = (router) => {
  if (router.asPath === '/profile') {
    router.push('/');
  }
};

export { getAccountChainChange, disConnectRouteChange };
