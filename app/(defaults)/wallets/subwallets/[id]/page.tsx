'use client';
// import {
//     getUSDCBalance,
//     getETHBalance,
//     getUSDTBalance,
//     getBalanceBSC_USDC,
//     getBalanceBSC_USDT,
//     getBalancePolygon_USDC,
//     getBalancePolygon_USDT,
//     getBTCBalance,
//     getUsdtTRONBalance,
//     getUsdcTRONBalance,
// } from '@/api/balance';
import IconCopy from '@/components/icon/icon-copy';
import { Dialog, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import IconX from '@/components/icon/icon-x';
import Loading from '@/components/layouts/loading';
import IconPlus from '@/components/icon/icon-plus';
import Link from 'next/link';

interface Address {
    assetId: string;
    walletAddress: string;
}

function SubWalletDetails() {
    const pathname = usePathname();
    const walletId = pathname.split('/wallets/subwallets/')[1];
    const [mnemonicsList, setMnemonicsList] = useState<any>([]);
    const [getBalance, setgetBalance] = useState<any>([]);
    const [walletName, setWalletName] = useState([]);
    const [loading, setLoading] = useState<any>(false);
    const [addSubWallet, setAddSubWallet] = useState<any>(false);

    const getAllMnemonics = async (walletId: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subwallets/getSubWallets/${walletId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // setWalletName(data.walletName.walletName);
            setMnemonicsList(data.walletName.SubWalletAddresses);
            if (data) {
                console.log('data waited and printed');
            }
        } catch (error) {
            console.error('Error fetching Mnemonics:', error);
        }
    };

    useEffect(() => {
        getAllMnemonics(walletId);
        setLoading(false);
    }, [walletId]);

    // ---------------------------------------------------
    // const getBalances = async (mnemonicsList: any[]) => {
    //     const balancePromises = mnemonicsList.map(async (item: any) => {
    //         let balance = 0;
    //         if (item.assetId === 'ETH') {
    //             const ethBalance = await getETHBalance(item.address);
    //             balance = ethBalance.body.etherAmount;
    //         } else if (item.assetId === 'USDC') {
    //             const usdcBalance = await getUSDCBalance(item.address);
    //             balance = usdcBalance.body.resultInEther;
    //         } else if (item.assetId === 'USDT_ERC20') {
    //             const usdtBalance = await getUSDTBalance(item.address);
    //             balance = usdtBalance.body.resultInEther;
    //         } else if (item.assetId === 'USDC_BSC') {
    //             const usdcbscBalance = await getBalanceBSC_USDC(item.address);
    //             balance = usdcbscBalance.body.resultInEther;
    //         } else if (item.assetId === 'USDT_BSC') {
    //             const usdtbscBalance = await getBalanceBSC_USDT(item.address);
    //             balance = usdtbscBalance.body.resultInEther;
    //         } else if (item.assetId === 'USDC_POLYGON') {
    //             const usdcpolygonBalance = await getBalancePolygon_USDC(item.address);
    //             balance = usdcpolygonBalance.body.resultInEther;
    //         } else if (item.assetId === 'USDT_POLYGON') {
    //             const usdtpolygonBalance = await getBalancePolygon_USDT(item.address);
    //             balance = usdtpolygonBalance.body.resultInEther;
    //         } else if (item.assetId === 'BTC') {
    //             const btcBalance = await getBTCBalance(item.address);
    //             balance = btcBalance.balanceBTC;
    //         } else if (item.assetId === 'USDT_TRON') {
    //             const usdt_tronBalance = await getUsdtTRONBalance(item.address);
    //             balance = usdt_tronBalance.body.finalBalance;
    //         } else if (item.assetId === 'USDC_TRON') {
    //             const usdc_tronBalance = await getUsdcTRONBalance(item.address);
    //             balance = usdc_tronBalance.body.finalBalance;
    //         } else {
    //             // console.log(`${item.assetId} Balance`, balance);
    //         }
    //         return { ...item, balance };
    //     });

    //     const balances = await Promise.all(balancePromises);
    //     return balances;
    // };

    // useEffect(() => {
    //     const fetchBalances = async () => {
    //         const result = await getBalances(mnemonicsList);
    //         setgetBalance(result);
    //     };

    //     fetchBalances();
    // }, [mnemonicsList]);

    // ---------------------------------------------------

    const maskAddress = (address: string): string => {
        if (address.length < 16) {
            throw new Error('Address is too short to mask');
        }
        const firstFour = address.slice(0, 16);
        const masked = `${firstFour}...`;
        return masked;
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    const onCopy = (text: any) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                showMessage('Copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy!', err);
            });
    };

    const defaultParams = {
        id: null,
        senderAddress: '',
        currency: '',
        receiverAddress: '',
        amount: 0,
    };

    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    const changeValue = (e: any) => {
        const { value, id } = e.target;

        setParams({ ...params, [id]: value });
    };

    return (
        <div>
            <>
                <div className="flex items-center justify-between">
                    <div className="flex w-fit gap-4 rounded-md bg-white px-4 py-3 shadow dark:bg-[#1c232f] dark:text-white-dark">
                        <h2 className=" text-base">
                            Sub-Wallet ID: <span className=" font-bold dark:text-white ">{walletId}</span>
                        </h2>
                    </div>
                    <div className="flex w-fit gap-4 rounded-md  px-4 py-3 ">
                        <Link href="/wallets/subwallets" type="button" className="btn btn-primary">
                            View Sub-Wallets
                        </Link>
                    </div>
                </div>

                <div className="panel mt-5 overflow-hidden border-0 p-0">
                    <div className="table-responsive">
                        <table className="table-striped table-hover">
                            {loading ? (
                                <div className=" mt-8 flex w-full items-center justify-center">
                                    <span className="m-auto mb-10 inline-block h-14 w-14 animate-[spin_3s_linear_infinite] rounded-full border-8 border-b-[#220b3f] border-l-[#06b6d4] border-r-[#a78bfa] border-t-[#05e9d6] align-middle"></span>
                                </div>
                            ) : (
                                <>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>assetId</th>
                                            <th>address</th>
                                            <th>balance</th>
                                            <th>privateKey</th>
                                            <th>publicKey</th>
                                            <th className="!text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mnemonicsList.map((mnemonic: any) => {
                                            return (
                                                <tr key={mnemonic.id}>
                                                    <td className="">{mnemonic.id}</td>
                                                    <td className="whitespace-nowrap">{mnemonic.assetId}</td>
                                                    <td className="whitespace-nowrap">{mnemonic.address}</td>
                                                    <td className="whitespace-nowrap">{mnemonic.balance}</td>
                                                    <td className="whitespace-nowrap">
                                                        <p className=" flex min-w-32 justify-between">
                                                            {maskAddress(mnemonic.privateKey)}
                                                            <span className=" cursor-pointer" onClick={() => onCopy(mnemonic.privateKey)}>
                                                                <IconCopy />
                                                            </span>
                                                        </p>
                                                    </td>
                                                    <td className="whitespace-nowrap">
                                                        <p className="flex min-w-32 justify-between">
                                                            {maskAddress(mnemonic.publicKey)}
                                                            <span className=" cursor-pointer" onClick={() => onCopy(mnemonic.publicKey)}>
                                                                <IconCopy />
                                                            </span>
                                                        </p>
                                                    </td>

                                                    <td>
                                                        <div className="flex items-center justify-center gap-4">
                                                            <button type="button" onClick={() => ''} className="btn btn-sm btn-outline-primary">
                                                                View
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </>
                            )}
                        </table>
                    </div>
                </div>
            </>
        </div>
    );
}

export default SubWalletDetails;
