export interface IGetProvinceResponse {
    Id: number;
    ProvinceCode: string;
    NameEn: string;
    NameKh: string;
    CountryId: number;
    ProvinceImage: string;
    CreatedAt: Date;
    ModifiedAt: Date;
}

export interface IProvinceRequest {
    ProvinceCode: string;
    NameEn: string;
    NameKh: string;
    CountryId: number;
    ProvinceImage: string;
}