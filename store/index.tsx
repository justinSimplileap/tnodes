import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from '@/store/themeConfigSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export const CurrencyList = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDC_ERC20', label: 'USDC_ERC20' },
    { value: 'USDC_BSC', label: 'USDC_BSC' },
    { value: 'USDC_TRC20', label: 'USDC_TRC20' },
    { value: 'USDC_POLYGON', label: 'USDC_POLYGON' },
    { value: 'USDT_ERC20', label: 'USDT_ERC20' },
    { value: 'USDT_BSC', label: 'USDT_BSC' },
    { value: 'USDT_TRC20', label: 'USDT_TRC20' },
    { value: 'USDT_POLYGON', label: 'USDT_POLYGON' },
];

export const statusList = ['Completed', 'Pending', 'Failed'];
