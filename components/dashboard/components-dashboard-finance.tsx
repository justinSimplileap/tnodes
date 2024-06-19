'use client';
import Dropdown from '@/components/dropdown';
import IconBinance from '@/components/icon/icon-binance';
import IconBitcoin from '@/components/icon/icon-bitcoin';
import IconCircleCheck from '@/components/icon/icon-circle-check';
import IconEthereum from '@/components/icon/icon-ethereum';
import IconEye from '@/components/icon/icon-eye';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import IconLitecoin from '@/components/icon/icon-litecoin';
import IconSolana from '@/components/icon/icon-solana';
import IconTether from '@/components/icon/icon-tether';
import { IRootState } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IconCopy from '../icon/icon-copy';
import Swal from 'sweetalert2';

const ComponentsDashboardFinance = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [transactionsList, setTransactionsList] = useState<any>([]);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    //bitcoinoption
    const bitcoin: any = {
        series: [
            {
                data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //ethereumoption
    const ethereum: any = {
        series: [
            {
                data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //litecoinoption
    const litecoin: any = {
        series: [
            {
                data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //binanceoption
    const binance: any = {
        series: [
            {
                data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //tetheroption
    const tether: any = {
        series: [
            {
                data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    //solanaoption
    const solana: any = {
        series: [
            {
                data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
            },
        ],
        options: {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        },
    };

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const gettenTransaction = async () => {
        try {
            const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/transactions/`);
            let lastTen = true
            if (lastTen) {
                url.searchParams.append('lastTen', 'true');
            }
            const response = await fetch(url.toString());
            const data = await response.json();
            setTransactionsList(data.allTransactions || []);
        } catch (error) {
            console.error('Error fetching Mnemonics:', error);
        }
    };

    useEffect(() => {
        gettenTransaction();
    }, []);

    const getStatusClassName = (status: any) => {
        switch (status) {
            case 'SUCCESS':
                return 'bg-success/20 text-success';
            case 'COMPLETED':
                return 'bg-success/20 text-success';
            case 'PENDING':
                return 'bg-info/20 text-info';
            case 'INPROGRESS':
                return 'bg-info/20 text-info';
            case 'FAILED':
                return 'bg-danger/20 text-danger';
            default:
                return '';
        }
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

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/dashboard" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-6 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 xl:grid-cols-4">
                    <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Total Wallets</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 170.46 </div>
                            <div className="badge bg-white/30">+ 2.35% </div>
                        </div>
                        <div className="mt-5 flex items-center font-semibold">
                            <IconEye className="shrink-0 ltr:mr-2 rtl:ml-2" />
                            Last Week 44,700
                        </div>
                    </div>

                    {/* Sessions */}
                    <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Total Sub Wallets</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 74,137 </div>
                            <div className="badge bg-white/30">- 2.35% </div>
                        </div>
                        <div className="mt-5 flex items-center font-semibold">
                            <IconEye className="shrink-0 ltr:mr-2 rtl:ml-2" />
                            Last Week 84,709
                        </div>
                    </div>

                    {/*  Time On-Site */}
                    <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Total Transactions</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 38,085 </div>
                            <div className="badge bg-white/30">+ 1.35% </div>
                        </div>
                        <div className="mt-5 flex items-center font-semibold">
                            <IconEye className="shrink-0 ltr:mr-2 rtl:ml-2" />
                            Last Week 37,894
                        </div>
                    </div>

                    {/* Bounce Rate */}
                    <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                        <div className="flex justify-between">
                            <div className="text-md font-semibold ltr:mr-1 rtl:ml-1">Pending Transactions</div>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:opacity-80"
                                    button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}
                                >
                                    <ul className="text-black dark:text-white-dark">
                                        <li>
                                            <button type="button">View Report</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Report</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> 49.10% </div>
                            <div className="badge bg-white/30">- 0.35% </div>
                        </div>
                        <div className="mt-5 flex items-center font-semibold">
                            <IconEye className="shrink-0 ltr:mr-2 rtl:ml-2" />
                            Last Week 50.01%
                        </div>
                    </div>
                </div>

                <div className="grid  gap-6 xl:grid-cols-1 mb-4">
                    {/*  Favorites  */}
                    <div>
                        <div className="mb-5 flex items-center font-bold">
                            <span className="text-lg">Crypto Chains</span>
                            <button type="button" className="text-primary hover:text-black dark:hover:text-white-dark ltr:ml-auto rtl:mr-auto">
                                See All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:mb-5">
                            {/*  Bitcoin  */}
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/bitcoin.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">BTC</h6>
                                        <p className="text-xs text-white-dark">Bitcoin</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $20,000 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            {/*  Ethereum*/}
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full bg-warning p-2">
                                    <img src="/assets/images/crypto/ethereum.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">ETH</h6>
                                        <p className="text-xs text-white-dark">Ethereum</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $21,000 <span className="text-sm font-normal text-danger">-1.25%</span>
                                </div>
                            </div>
                            {/*  usdc erc 20*/}
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdc.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">ETH</h6>
                                        <p className="text-xs text-white-dark">USDC (ERC-20)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $11,657 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdterc20.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">ETH</h6>
                                        <p className="text-xs text-white-dark">USDT (ERC-20)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $20,000 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdcpolygon.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">Polygon</h6>
                                        <p className="text-xs text-white-dark">USDC</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $20,000 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdtpolygon.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">Polygon</h6>
                                        <p className="text-xs text-white-dark">USDT</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $20,000 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdcbsc.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">BNB</h6>
                                        <p className="text-xs text-white-dark">USDC(BSC)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $21,000 <span className="text-sm font-normal text-danger">-1.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full">
                                    <img src="/assets/images/crypto/usdtbsc.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">BNB</h6>
                                        <p className="text-xs text-white-dark">USDT(BSC)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $20,000 <span className="text-sm font-normal text-success">+0.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full bg-warning p-2">
                                    <img src="/assets/images/crypto/usdctrc20.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">TRON</h6>
                                        <p className="text-xs text-white-dark">USDC(TRC20)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $21,000 <span className="text-sm font-normal text-danger">-1.25%</span>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5 flex items-center font-semibold">
                                    <div className="grid h-10 w-10 shrink-0 place-content-center rounded-full bg-warning p-2">
                                    <img src="/assets/images/crypto/usdttrc20.svg" alt="Bitcoin"  />
                                    </div>
                                    <div className="ltr:ml-2 rtl:mr-2">
                                        <h6 className="text-dark dark:text-white-light">TRON</h6>
                                        <p className="text-xs text-white-dark">USDT(TRC20)</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-base font-bold">
                                    $21,000 <span className="text-sm font-normal text-danger">-1.25%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    <div className="grid gap-6 xl:grid-flow-row">
                        {/*  Previous Statement  */}
                        <div className="panel overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-bold">Previous Statement</div>
                                    <div className="text-success"> Paid on June 27, 2022 </div>
                                </div>
                                <div className="dropdown">
                                    <Dropdown
                                        offset={[0, 5]}
                                        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                        btnClassName="hover:opacity-80"
                                        button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}
                                    >
                                        <ul>
                                            <li>
                                                <button type="button">View Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Edit Report</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <div className="absolute -bottom-12 h-24 w-24 ltr:-right-12 rtl:-left-12">
                                    <IconCircleCheck className="h-full w-full text-success opacity-20" />
                                </div>
                                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                                    <div>
                                        <div className="text-primary">Card Limit</div>
                                        <div className="mt-2 text-2xl font-semibold">$50,000.00</div>
                                    </div>
                                    <div>
                                        <div className="text-primary">Spent</div>
                                        <div className="mt-2 text-2xl font-semibold">$15,000.00</div>
                                    </div>
                                    <div>
                                        <div className="text-primary">Minimum</div>
                                        <div className="mt-2 text-2xl font-semibold">$2,500.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Current Statement */}
                        <div className="panel overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-bold">Current Statement</div>
                                    <div className="text-danger"> Must be paid before July 27, 2022 </div>
                                </div>
                                <div className="dropdown">
                                    <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 hover:opacity-80" />}>
                                        <ul>
                                            <li>
                                                <button type="button">View Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Edit Report</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <div className="absolute -bottom-12 h-24 w-24 ltr:-right-12 rtl:-left-12">
                                    <IconInfoCircle className="h-full w-24 text-danger opacity-20" />
                                </div>

                                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                                    <div>
                                        <div className="text-primary">Card Limit</div>
                                        <div className="mt-2 text-2xl font-semibold">$50,000.00</div>
                                    </div>
                                    <div>
                                        <div className="text-primary">Spent</div>
                                        <div className="mt-2 text-2xl font-semibold">$30,500.00</div>
                                    </div>
                                    <div>
                                        <div className="text-primary">Minimum</div>
                                        <div className="mt-2 text-2xl font-semibold">$8,000.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Recent Transactions  */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">Recent Transactions</div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '110px' }} className="ltr:rounded-l-md rtl:rounded-r-md">ID</th>
                                        <th>ASSET</th>
                                        <th>TRX NAME</th>
                                        <th>AMOUNT</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionsList.map((transaction: any) => (
                                        <tr key={transaction.id}>
                                            <td className="font-semibold flex overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs">
                                                <span style={{ width: '110px', overflow: 'hidden' }} className='me-2 cursor-pointer'> {transaction.transactionId}</span>
                                                <span className='cursor-pointer' onClick={() => onCopy(transaction.transactionId)}><IconCopy /></span>
                                            </td>
                                            <td className="whitespace-nowrap">{transaction.assetId}</td>
                                            <td className="whitespace-nowrap">{transaction.transactiontype}</td>
                                            <td>{transaction.amount}</td>
                                            <td className="text-center">
                                                <span className={`badge rounded-full ${getStatusClassName(transaction.status)} hover:top-0`}>
                                                    {transaction.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDashboardFinance;
