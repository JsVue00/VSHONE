export interface IGetCityResponse {
    Id: number;
    CityName: string;
    CountryId: number;
    CityImage: string;
    ModifiedAt: string;
}
export interface ICityRequest {
    CityName: string;
    CountryId: number;
    CityImage: string;
}