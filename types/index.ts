interface Transaction extends Common {
    assetId: string;
    transactionId: string;
    transactiontype: string;
    transactionHash: string;
    fromAddress: string;
    toAddress: string;
    amount: string;
    fee: string;
    status: string;
}

interface Common {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
