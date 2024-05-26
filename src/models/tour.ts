export interface ITourRequest {
    Thumbnail: string;
    Title: string;
    CountryId: number;
    ProvinceId: number | null;
    DistrictId: number;
    AreaName: string;
    Price: number;
    Description: string;
    MapEmbed: string;
}
export interface IGetToureResponse {
    Id: number;
    Thumbnail: string;
    Title: string;
    CountryId: number;
    ProvinceId: number;
    DistrictId: number;
    AreaName: string;
    Price: number;
    Description: string;
    MapEmbed: string;
    ImageDetails: IImageDetail[];
    CreatedAt: Date;
    ModifiedAt: Date;
}

export interface IImageDetail {
    Id: number;
    TourId: number;
    ImageName: string;
    ImageOrder: number;
}
export interface IImageRequest {
    TourId: number;
    ImageName: string;
    ImageOrder: number;
}