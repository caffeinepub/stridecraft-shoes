import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ProductId = string;
export interface Product {
    id: ProductId;
    name: string;
    description: string;
    available: boolean;
    sizes: Array<bigint>;
    category: string;
    price: bigint;
    images: Array<string>;
}
export type SubmissionId = bigint;
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getFilteredProducts(category: string | null, minPrice: bigint | null, maxPrice: bigint | null, sortByPrice: boolean | null): Promise<Array<Product>>;
    getProduct(id: ProductId): Promise<Product>;
    submitForm(name: string, email: string, message: string): Promise<SubmissionId>;
}
