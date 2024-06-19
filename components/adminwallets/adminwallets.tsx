'use client';
import React, { Fragment, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import IconCopy from '../icon/icon-copy';

const AdminWallets = () => {
    const [adminWallet, setAdminWallet] = useState<any>([]);
    const getAdminWallets = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/adminwallets`);
            const data = await response.json();
            setAdminWallet(data.adminwallets || []);
        } catch (error) {
            console.error('Error fetching Mnemonics:', error);
        }
    };

    useEffect(() => {
        getAdminWallets();
    }, []);

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

    const maskAddress = (address: string): string => {
        if (address.length < 16) {
            throw new Error('Address is too short to mask');
        }
        const firstFour = address.slice(0, 30);
        const masked = `${firstFour}...`;
        return masked;
    };

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl">Admin Wallets</h2>
            </div>

            <div className="panel mt-5 overflow-hidden border-0 p-0">
                <div className="table-responsive">
                    <table className="table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Asset ID</th>
                                <th>Mnemonics</th>
                                <th>PrivateKey</th>
                                <th>PublicKey</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminWallet.map((mnemonic: any) => {
                                return (
                                    <tr key={mnemonic.id}>
                                        <td className=" flex-1">{mnemonic.id}</td>
                                        <td>
                                            <div className="flex w-max flex-1 items-center">
                                                <div>{mnemonic.assetId}</div>
                                            </div>
                                        </td>
                                        <td className="flex-1 whitespace-nowrap">
                                            <p className="flex gap-2">
                                                {maskAddress(mnemonic.mnemonics)}{' '}
                                                <span className=" cursor-pointer" onClick={() => onCopy(mnemonic.mnemonic)}>
                                                    <IconCopy />
                                                </span>
                                            </p>
                                        </td>
                                        <td className="flex-1 whitespace-nowrap">
                                            <p className="flex gap-2">
                                                {maskAddress(mnemonic.privateKey)}
                                                <span className=" cursor-pointer" onClick={() => onCopy(mnemonic.privateKey)}>
                                                    <IconCopy />
                                                </span>
                                            </p>
                                        </td>
                                        <td className="flex-1 whitespace-nowrap">
                                            <p className="flex gap-2">
                                                {maskAddress(mnemonic.publicKey)}
                                                <span className=" cursor-pointer" onClick={() => onCopy(mnemonic.publicKey)}>
                                                    <IconCopy />
                                                </span>
                                            </p>
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
};

export default AdminWallets;
