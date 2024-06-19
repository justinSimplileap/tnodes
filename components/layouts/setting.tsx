'use client';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyList, IRootState, statusList } from '@/store';
import { Dialog, Transition } from '@headlessui/react';
import Dropdown from '../dropdown';
import IconSettings from '@/components/icon/icon-settings';
import IconX from '@/components/icon/icon-x';
import MuiLoading from '../MuiLoading';

const Setting = () => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    const [showCustomizer, setShowCustomizer] = useState(false);
    const [transactionList, setTransactionList] = useState<Transaction[]>([]);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();
    const [individualTrx, setIndividualTrx] = useState(false);

    const [filters, setFilters] = useState({
        direction: '',
        asset: '',
        status: '',
    });

    const getAllTransaction = async (filters = {}) => {
        try {
            const query = new URLSearchParams(filters).toString();
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/transactions?${query}`);
            const data = await response.json();
            setTransactionList(data.allTransactions || []);
        } catch (error) {}
    };

    useEffect(() => {
        getAllTransaction(filters);
        // const intervalId = setInterval(() => getAllTransaction(filters), 1500);

        // return () => clearInterval(intervalId);
    }, [filters]);

    const openTransactionModal = (transaction: any) => {
        setSelectedTransaction(transaction);
        setIndividualTrx(true);
    };

    const pendingTrxsCount = transactionList.filter((item) => item.status === 'Pending').length;
    const allTrxsCount = transactionList.length;
    const clearFilters = () => {
        setFilters({
            direction: '',
            asset: '',
            status: '',
        });
    };

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    };

    return (
        <div>
            <Transition appear show={individualTrx} as={Fragment}>
                <Dialog as="div" open={individualTrx} onClose={() => setIndividualTrx(false)} className="z-[1000]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel w-full max-w-3xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setIndividualTrx(false)}
                                        className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 dark:hover:text-gray-600 ltr:right-4 rtl:left-4"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium dark:bg-[#121c2c] ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5">Transaction Details</div>
                                    <div className="p-5">
                                        <div className="p-5">
                                            {selectedTransaction && (
                                                <div className="space-y-2">
                                                    {Object.entries(selectedTransaction)
                                                        .filter(([key, value]) => key !== 'updatedAt' && key !== 'deletedAt' && key !== 'id')
                                                        .map(([key, value]) => (
                                                            <div key={key} className="flex justify-between break-words">
                                                                <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:</span>
                                                                <span className="break-words text-gray-500">{value}</span>
                                                            </div>
                                                        ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className={`${(showCustomizer && '!block') || ''} fixed inset-0 z-[51] hidden bg-[black]/60 px-4 transition-[display]`} onClick={() => setShowCustomizer(false)}></div>

            <nav
                className={`${
                    (showCustomizer && 'ltr:!right-0 rtl:!left-0 ') || ''
                } fixed bottom-0 top-0 z-[51] w-full max-w-[400px] bg-white p-4 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 dark:bg-black ltr:-right-[400px] rtl:-left-[400px]`}
            >
                <button
                    type="button"
                    className="absolute bottom-0 top-[60px] flex h-10 w-12 cursor-pointer items-center justify-center bg-primary text-white ltr:-left-12 ltr:rounded-bl-full ltr:rounded-tl-full rtl:-right-12 rtl:rounded-br-full rtl:rounded-tr-full"
                    onClick={() => setShowCustomizer(!showCustomizer)}
                >
                    {!showCustomizer && pendingTrxsCount > 0 && (
                        <p className="absolute -left-2 -top-3 m-auto flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
                            <span>{pendingTrxsCount}</span>
                        </p>
                    )}
                    <IconSettings className="h-5 w-5 " />
                </button>

                <div className="perfect-scrollbar h-full overflow-y-auto overflow-x-hidden">
                    <div className="relative pb-5">
                        <button type="button" className="absolute top-0 opacity-30 hover:opacity-100 dark:text-white ltr:right-0 rtl:left-0" onClick={() => setShowCustomizer(false)}>
                            <IconX className="h-5 w-5" />
                        </button>

                        <div className="sticky top-0 z-10 mb-1 bg-white dark:bg-black dark:text-white">
                            <h2 className="text-2xl font-semibold">Recent activity {allTrxsCount}</h2>

                            <div className="flex items-center gap-4">
                                <div className="dropdown">
                                    <Dropdown
                                        offset={[0, 5]}
                                        placement={'bottom-start'}
                                        btnClassName="hover:opacity-80"
                                        button={<p className={`rounded-md border p-1  ${filters.direction && 'bg-blue-500 text-white'}`}>{filters.direction || 'Direction'}</p>}
                                    >
                                        <ul className="text-black dark:text-white-dark">
                                            <li>
                                                <button type="button" onClick={() => handleFilterChange('direction', 'Outgoing')}>
                                                    Outgoing
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" onClick={() => handleFilterChange('direction', 'Incoming')}>
                                                    Incoming
                                                </button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>

                                <div className="dropdown">
                                    <Dropdown
                                        offset={[0, 5]}
                                        placement={'bottom-start'}
                                        btnClassName="hover:opacity-80"
                                        button={<p className={`rounded-md border p-1  ${filters.asset && 'bg-blue-500 text-white'}`}>{filters.asset || 'Asset'}</p>}
                                    >
                                        <ul className="text-black dark:text-white-dark">
                                            {CurrencyList.map((currency) => (
                                                <li key={currency.value}>
                                                    <button type="button" onClick={() => handleFilterChange('asset', currency.value)}>
                                                        {currency.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </Dropdown>
                                </div>

                                <div className="dropdown">
                                    <Dropdown
                                        offset={[0, 5]}
                                        placement={'bottom-start'}
                                        btnClassName="hover:opacity-80"
                                        button={<p className={`rounded-md border p-1  ${filters.status && 'bg-blue-500 text-white'}`}>{filters.status || 'Status'}</p>}
                                    >
                                        <ul className="text-black dark:text-white-dark">
                                            {statusList.map((status) => (
                                                <li key={status}>
                                                    <button type="button" onClick={() => handleFilterChange('status', status)}>
                                                        {status}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </Dropdown>
                                </div>

                                {filters && (
                                    <button type="button" className="rounded bg-blue-500 p-1 text-white" onClick={clearFilters}>
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-2">
                            {transactionList.map((item, i) => (
                                <div key={i} className="mb-4 cursor-pointer rounded-md border bg-white p-4 shadow-md" onClick={() => openTransactionModal(item)}>
                                    <div className="mb-2 flex items-center justify-between gap-10">
                                        <div className="flex flex-1 flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span className="font-medium text-gray-700">From Address</span>
                                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{item.fromAddress}</span>
                                        </div>
                                        <div className="flex flex-1 flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span className="font-medium text-gray-700">To Address</span>
                                            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{item.toAddress}</span>
                                        </div>
                                    </div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-gray-500">
                                            {item.amount} {item.assetId}
                                        </span>
                                        <span className="text-gray-500">{item.transactiontype ?? 'Outgoing'}</span>
                                    </div>
                                    <div className="mb-1">
                                        <p className={`text-sm font-semibold ${item.status === 'Completed' ? 'text-[#92d145]' : item.status === 'Pending' ? 'text-[#3a7ed6]' : 'text-red-500'}`}>
                                            {item.status}
                                        </p>
                                    </div>
                                    <MuiLoading status={item.status} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Setting;
