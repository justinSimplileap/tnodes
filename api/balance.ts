// ETH
export const getETHBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/eth/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch ETH balance');
    return response.json();
};
// USDC
export const getUSDCBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/usdcerc20/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch USDC balance');
    return response.json();
};
// USDT
export const getUSDTBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/usdt/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch USDT balance');
    return response.json();
};
// BSC_USDC
export const getBalanceBSC_USDC = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/bsc_usdc/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch BSC_USDC balance');
    return response.json();
};
// BSC_USDT
export const getBalanceBSC_USDT = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/bsc_usdt/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch BSC_USDT balance');
    return response.json();
};
// Polygon_USDC
export const getBalancePolygon_USDC = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/polygon_usdc/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch Polygon_USDC balance');
    return response.json();
};
// Polygon_USDT
export const getBalancePolygon_USDT = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/polygon_usdt/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch Polygon_USDT balance');
    return response.json();
};

// BTC
export const getBTCBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/btc/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch BTC balance');
    return response.json();
};

// USDT_TRON
export const getUsdtTRONBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/usdt_tron/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch USDT_TRON balance');
    return response.json();
};
// USDC_TRON
export const getUsdcTRONBalance = async (walletAddress: string): Promise<any> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance/usdc_tron/${walletAddress}`);
    if (!response.ok) throw new Error('Failed to fetch USDC_TRON balance');
    return response.json();
};
