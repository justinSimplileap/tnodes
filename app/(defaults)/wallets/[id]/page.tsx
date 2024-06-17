'use client';
import { getUSDCBalance, getETHBalance, getUSDTBalance } from '@/api/balance';
import IconCopy from '@/components/icon/icon-copy';
import { Dialog, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import IconX from '@/components/icon/icon-x';

interface Address {
    assetId: string;
    walletAddress: string;
}

function WalletDetails() {
    const pathname = usePathname();
    const walletId = pathname.split('/wallets/')[1];
    const [mnemonicsList, setMnemonicsList] = useState<any>([]);
    // const [getBalance, setgetBalance] = useState<any>([]);
    const [mnemonics, setMnemonics] = useState([]);
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [loading, setLoading] = useState<any>(false);

    const getAllMnemonics = async (walletId: string) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/wallets/${walletId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMnemonics(data.mnemonic.walletName);
            setMnemonicsList(data.mnemonic.WalletAddresses);
        } catch (error) {
            console.error('Error fetching Mnemonics:', error);
        }
    };

    useEffect(() => {
        getAllMnemonics(walletId);
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

    const saveNote = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/withdraw/${params.currency}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            setLoading(false);

            const res = await response.json();

            if (res.error) {
            }

            if (res.success) {
                showMessage(res.message);
                setParams(JSON.parse(JSON.stringify(defaultParams)));
                setAddContactModal(false);
            }
        } catch (error) {}
    };

    const transferAmount = ({ senderAddress, currency }: any) => {
        setParams({ ...params, senderAddress: senderAddress, currency: currency });
        setAddContactModal(true);
    };

    return (
        <div>
            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-50">
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
                                <Dialog.Panel className="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setAddContactModal(false)}
                                        className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 dark:hover:text-gray-600 ltr:right-4 rtl:left-4"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium dark:bg-[#121c2c] ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5">
                                        {params.id ? 'Withdraw' : `${params.currency} `}
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="mb-5">
                                                <label htmlFor="receiverAddress">Address</label>
                                                <input
                                                    id="receiverAddress"
                                                    type="text"
                                                    placeholder="Enter Address"
                                                    className="form-input"
                                                    value={params.receiverAddress}
                                                    onChange={(e) => changeValue(e)}
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="amount">Amount</label>
                                                <input id="amount" type="text" placeholder="Enter Title" className="form-input" value={params.amount} onChange={(e) => changeValue(e)} />
                                            </div>
                                            {/* <div className="mb-5">
                                                <label htmlFor="name">User Name</label>
                                                <select id="user" className="form-select" value={params.user} onChange={(e) => changeValue(e)}>
                                                    <option value="">Select User</option>
                                                    <option value="Max Smith">Max Smith</option>
                                                    <option value="John Doe">John Doe</option>
                                                    <option value="Kia Jain">Kia Jain</option>
                                                    <option value="Karena Courtliff">Karena Courtliff</option>
                                                    <option value="Vladamir Koschek">Vladamir Koschek</option>
                                                    <option value="Robert Garcia">Robert Garcia</option>
                                                    <option value="Marie Hamilton">Marie Hamilton</option>
                                                    <option value="Megan Meyers">Megan Meyers</option>
                                                    <option value="Angela Hull">Angela Hull</option>
                                                    <option value="Karen Wolf">Karen Wolf</option>
                                                    <option value="Jasmine Barnes">Jasmine Barnes</option>
                                                    <option value="Thomas Cox">Thomas Cox</option>
                                                    <option value="Marcus Jones">Marcus Jones</option>
                                                    <option value="Matthew Gray">Matthew Gray</option>
                                                    <option value="Chad Davis">Chad Davis</option>
                                                    <option value="Linda Drake">Linda Drake</option>
                                                    <option value="Kathleen Flores">Kathleen Flores</option>
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="tag">Tag</label>
                                                <select id="tag" className="form-select" value={params.tag} onChange={(e) => changeValue(e)}>
                                                    <option value="">None</option>
                                                    <option value="personal">Personal</option>
                                                    <option value="work">Work</option>
                                                    <option value="social">Social</option>
                                                    <option value="important">Important</option>
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="desc">Description</label>
                                                <textarea
                                                    id="description"
                                                    rows={3}
                                                    className="form-textarea min-h-[130px] resize-none"
                                                    placeholder="Enter Description"
                                                    value={params.description}
                                                    onChange={(e) => changeValue(e)}
                                                ></textarea>
                                            </div> */}
                                            <div className="mt-8 flex items-center justify-end">
                                                <button type="button" className="btn btn-outline-danger gap-2" onClick={() => setAddContactModal(false)}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={saveNote}>
                                                    {loading ? 'Loading...' : 'Withdraw'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="flex w-fit gap-4 rounded-md bg-white px-4 py-3 shadow dark:bg-[#1c232f] dark:text-white-dark">
                <h2 className=" text-base">
                    Wallet ID: <span className=" font-bold dark:text-white ">{walletId}</span>
                </h2>
                <h2 className=" text-base">
                    Wallet Name: <span className=" font-bold dark:text-white">{mnemonics}</span>
                </h2>
            </div>

            <div className="panel mt-5 overflow-hidden border-0 p-0">
                <div className="table-responsive">
                    <table className="table-striped table-hover">
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
                                                <button
                                                    type="button"
                                                    onClick={() => transferAmount({ senderAddress: mnemonic.address, currency: mnemonic.assetId })}
                                                    className="btn btn-sm btn-outline-primary"
                                                >
                                                    Transfer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WalletDetails;
