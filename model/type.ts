export interface ObjectData{
    address:string,
        updateCount: number,
        lastScore: number,
        lastDate: string
}

export interface ObjectDetailData{
    braking: any,
        dangerousBrake: any,
        dangerousTurn: any,
        dangerousSpeed: any,
        averageSpeed: any,
        drivingTime: any,
        date: any,
        score: any
}
export interface ObjectPromotionData{
    _id: any,
    promotionCodeId: any,
    promotionCodeName: any,
    companyId: any,
    discount: any,
    description: any,
    quantity: any,
    used: any
    start: any
    expires: any
}
export interface ObjectModel{
    _id: string,
    modelContractId: string,
    modelContractName: string
   
}

export interface ObjectCompanyModel{
    _id: string,
            contractId: string,
            contractValue: number
            status:string,
            userStatus:string,
            emailStatus:string,
            userId:string
}